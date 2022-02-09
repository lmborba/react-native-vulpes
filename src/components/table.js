import React from 'react';
import { View } from 'react-native';
import {
  listContainer,
  listItem,
  listItemText,
  titleStyle,
} from '../styles/table';
import { H4, Regular, RegularBold } from './typos';

const Title = (props) => {
  if (!props.title) return null;
  return <H4 style={titleStyle}>{props.title}</H4>;
};

function parseData(data) {
  if (Array.isArray(data)) return data;
  if (typeof data === 'object') return Object.values(data);
  return [];
}

const rowsFromData = ({ data, ...rest }) => {
  const aData = [data].flat();

  if (aData.length === 0) return null;

  return aData.map((rd, i) => {
    const ad = parseData(rd);

    return <Row key={'r' + i} {...rest} data={ad} />;
  });
};

const Header = (props) => {
  const r = (d) => {
    const params = { header: true, ...props, data: [d] };
    return rowsFromData(params);
  };

  if (props.header) return r(props.header);

  const { data } = props;
  if (!data) return null;
  const first = props.data[0];
  if (!first) return null;

  if (Array.isArray(first)) return null;

  if (typeof data === 'object') return r(Object.keys(first));
  return null;
};

export const Table = (props) => {
  const cItens = [
    rowsFromData(props),
    React.Children.toArray(props.children),
  ].flat();

  const itemCount = cItens.length;
  return (
    <View style={[listContainer, props.style]}>
      <Title title={props.title} />
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

  const { columnWidth } = props;

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
  const { children, header } = props;
  if (React.isValidElement(children)) return children;
  const val =
    children === null || children === undefined ? '' : children.toString();
  if (header) return <RegularBold>{val}</RegularBold>;
  return <Regular>{val}</Regular>;
};

const Cell = (props) => {
  const { width } = props;
  console.log('W', width);
  const widthStyle = width ? { width: width, flex: undefined } : {};
  const cellStyle = {
    ...listItemText,
    ...props.cellStyle,
    borderWidth: 0,
    ...widthStyle,
  };

  return (
    <View style={cellStyle}>
      <CellContent {...props} />
    </View>
  );
};
