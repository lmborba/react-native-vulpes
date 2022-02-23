import React, { Component, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-vulpes';
import {
  cellStyle,
  listContainer,
  listItem,
  titleStyle,
} from '../styles/table';
import { H3, Regular, RegularBold } from './typos';

const Title = (props) => {
  if (!props.title) return null;
  return <H3 style={titleStyle}>{props.title}</H3>;
};

function parseData(data) {
  if (Array.isArray(data)) return data;

  if (typeof data === 'object') return Object.values(data);
  return [];
}

const rowsFromData = ({ data, ...rest }) => {
  if (!data) return null;
  const aData = [data].flat();

  if (aData.length === 0) return null;
  return aData.map((rd, i) => {
    const ad = parseData(rd);
    return <Row key={'r' + i} {...rest} data={ad} />;
  });
};

const Header = (props) => {
  const r = (d) => {
    const params = { head: true, ...props, data: [d] };
    return rowsFromData(params);
  };

  if (props.header) {
    const { data } = props;
    if (!data || data.length === 0) return null;
    return r(props.header);
  }

  const { data } = props;
  if (!data) return null;
  const first = props.data[0];
  if (!first) return null;

  if (Array.isArray(first)) return null;

  if (typeof data === 'object') return r(Object.keys(first));
  return null;
};

const EmptyState = ({ emptyState, data }) => {
  if (!emptyState) return null;
  if (data && data.length > 0) return null;
  return emptyState;
};

const Pagination = ({ onChangePage, data, pageSize }) => {
  const [currentPage, setPage] = useState(0);

  if (!onChangePage) return null;
  if (!data || (data.length === 0 && currentPage === 0)) return null;

  const change = (v) => {
    const next = currentPage + v;
    setPage(next);
    onChangePage(next);
  };
  const up = () => change(1);
  const down = () => change(-1);

  const sm = {
    flex: 1,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const sb = { marginLeft: 5, marginRight: 5 };

  if (pageSize && currentPage === 0 && data.length < pageSize) return null;

  return (
    <View style={sm}>
      {currentPage > 0 && (
        <Button onPress={down} text={'Página anterior'} style={sb} />
      )}
      {<Button onPress={up} text={'Próxima página'} style={sb} />}
    </View>
  );
};

export class Table extends Component {
  constructor(props) {
    super(props);

    this.propsCWidth = { ...props.columnWidth } || {};

    this.state = {
      tableWidth: null,
      columnWidth: { ...props.columnWidth } || {},
    };
    this.cWidth = this.state.columnWidth;
    this.delta = 8;
  }

  onCellLayout({ nativeEvent }, index, lastCellRender) {
    const { width } = nativeEvent.layout;
    const minWidth = 50;
    if (this.propsCWidth[index] !== undefined) return;

    const cellWidth = Math.round(width) + this.delta;
    let nVal = Math.max(this.cWidth[index] || 0, cellWidth, minWidth);

    this.cWidth[index] = nVal;
    if (lastCellRender) {
      const aWidth = Object.values(this.cWidth);
      const nCols = aWidth.length;
      const sNCols = aWidth.reduce((s, a) => s + a, 0);
      console.log('REFRESHING...', sNCols, this.tableWidth);

      if (sNCols - this.tableWidth < -2) {
        for (let i = 0; i < nCols; i++) {
          const nWidth = Math.round((this.tableWidth * aWidth[i]) / sNCols);
          this.cWidth[i] = Math.round(nWidth);
        }
      }

      this.delta = 0;
      this.setState({ columnWidth: this.cWidth });
    }
  }

  onTableLayout({ nativeEvent }) {
    const { width } = nativeEvent.layout;
    this.tableWidth = width;
  }

  render() {
    let { style, containerStyle, ...props } = this.props;

    props.onCellLayout = this.onCellLayout.bind(this);
    props.columnWidth = this.state.columnWidth;

    const cItens = [
      rowsFromData({ ...props }),
      React.Children.toArray(props.children),
    ].flat();

    const itemCount = cItens.length;
    this.nTableRows = cItens.length;

    const contScrollStyle = {
      flexGrow: 1,
      minWidth: '100%',
    };

    return (
      <View style={containerStyle}>
        <Title title={props.title} />
        <ScrollView
          horizontal={true}
          disableScrollViewPanResponder={true}
          contentContainerStyle={contScrollStyle}
        >
          <View
            onLayout={this.onTableLayout.bind(this)}
            style={{ ...listContainer, ...style }}
          >
            <EmptyState {...props} />
            <Header {...props} />
            {cItens.map((child, i) => {
              const last = i === itemCount - 1;
              if (!child) return child;
              return React.cloneElement(child, {
                last: last,
                key: 'c' + i,
              });
            })}
          </View>
        </ScrollView>
        <Pagination {...props} />
      </View>
    );
  }
}

function listProps(props) {
  const style = { ...listItem, ...props.style };
  let param = { activeOpacity: 1, style: style };
  if (props.last) {
    param.style = {
      ...param.style,
      borderBottomWidth: 0,
    };
  }

  return param;
}

export const Row = (props) => {
  const params = listProps(props);

  const data = [React.Children.toArray(props.children), props.data].flat();
  const columnWidth = props.columnWidth || {};
  const nCellI = data.length - 1;

  const cells = data.map((c, i) => {
    const width = columnWidth[i] || null;

    return (
      <Cell
        key={'c' + i}
        index={i}
        lastCell={i === nCellI}
        {...props}
        width={width}
      >
        {c}
      </Cell>
    );
  });

  return <View style={params.style}>{cells}</View>;
};

const CellContent = (props) => {
  const { children, head, dictionary } = props;
  if (React.isValidElement(children)) return children;

  let val =
    children === null || children === undefined ? '' : children.toString();
  if (dictionary) val = dictionary[val] || val;

  if (head) return <RegularBold>{val}</RegularBold>;
  return <Regular>{val}</Regular>;
};

const Cell = (props) => {
  const { width, index, last, lastCell } = props;
  const widthStyle = width ? { width: width } : {};

  const ss = { minWidth: 2 };
  return (
    <View
      style={{ ...cellStyle, ...props.cellStyle, ...widthStyle }}
      onLayout={(e) => props.onCellLayout(e, index, last && lastCell)}
    >
      <View style={ss}>
        <CellContent {...props} />
      </View>
    </View>
  );
};
