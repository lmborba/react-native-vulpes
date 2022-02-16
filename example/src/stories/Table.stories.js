import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Table, Row } from 'react-native-vulpes';
import { Spinner } from '../../../src';

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {},
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
    <Table title={'Tabela com dados JSON'} data={jsonData} />

    <Table
      title={'Table com dados de array'}
      header={['a', 'b', 'c']}
      data={data}
    />

    <Table title={'Titulo 3'} header={['Coluna']}>
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
