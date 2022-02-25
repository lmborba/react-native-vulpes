import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Colors, Row, Table } from 'react-native-vulpes';
import { Spinner } from '../../../src';

const colorList = () => {
  var keys = [undefined];
  for (var k in Colors) {
    if (k.substring(0, 8) !== 'gradient') {
      keys.push(k);
    }
  }
  return keys;
};

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {
    color: {
      description: 'color for the button',
      control: {
        type: 'select',
        options: colorList(),
      },
    },
  },
};

const data = [
  [1, 2, 3],
  [4, 5, 6],
];
const jsonData = [
  { username: 'fernando', email: 'abc@cde.com.br', titulo: <Spinner /> },
  { username: 'maria', email: 'abc@cde.com.br', titulo: 'teste\nzzz' },
  { username: 'João', email: 'abc@cde.com.br', titulo: 'teste' },
  { username: 'Carlos', email: 'abc@cde.com.br', titulo: 'teste' },
];

const TemplateList = ({ ...rest }) => (
  <>
    <Table {...rest} title={'Tabela com dados JSON'} data={jsonData} />

    <Table
      {...rest}
      title={'Table com dados de array'}
      header={['a', 'b', 'c']}
      data={data}
    />

    <Table {...rest} title={'Titulo 3'} header={['Coluna']}>
      <Row>Item 1</Row>
      <Row>Item 2</Row>
      <Row>Item 3</Row>
      <Row>Item 4</Row>
    </Table>
  </>
);

export const Example = TemplateList;

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('Table', TemplateList, Example.args);
}
