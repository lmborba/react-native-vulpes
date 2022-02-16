import React, { useState } from 'react';
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

const Pagination = ({ onChangePage, data }) => {
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

  return (
    <View style={sm}>
      {currentPage > 0 && (
        <Button onPress={down} text={'Página anterior'} style={sb} />
      )}
      {<Button onPress={up} text={'Próxima página'} style={sb} />}
    </View>
  );
};

export const Table = ({ style, ...props }) => {
  const cItens = [
    rowsFromData(props),
    React.Children.toArray(props.children),
  ].flat();

  const itemCount = cItens.length;

  const contStyle = { flexGrow: 1 };
  return (
    <ScrollView
      horizontal={true}
      disableScrollViewPanResponder={true}
      contentContainerStyle={contStyle}
    >
      <View style={[listContainer, style]}>
        <Title title={props.title} />
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
        <Pagination {...props} />
      </View>
    </ScrollView>
  );
};

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

  const cells = data.map((c, i) => {
    const width = columnWidth[i] || null;
    return (
      <Cell key={'c' + i} {...props} width={width}>
        {c}
      </Cell>
    );
  });

  return <View style={{ ...params.style }}>{cells}</View>;
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
  const { width } = props;
  const widthStyle = width ? { width: width, flex: undefined } : {};

  return (
    <View style={{ ...cellStyle, ...props.cellStyle, ...widthStyle }}>
      <CellContent {...props} />
    </View>
  );
};
