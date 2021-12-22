import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { Accordion, AccordionItem } from 'react-native-vulpes';

export default {
  title: 'Example/Accordion',
  component: Accordion,
  argTypes: {},
};

const longs = [
  "It's information about the future isn't it. I warned you about this kid. The consequences could be disastrous. Okay, alright, Saturday is good, Saturday's good, I could spend a week in 1955. I could hang out, you could show me around. Hello, hello, anybody home? Think, McFly, think. I gotta have time to get them re-typed. Do you realize what would happen if I hand in my reports in your handwriting. I'll get fired. You wouldn't want that to happen would you? Would you? You cost three-hundred buck damage to my car, you son-of-a-bitch. And I'm gonna take it out of your ass. Hold him. Now, of course not, Biff, now, I wouldn't want that to happen.",
  'A lógica do programa é muito simples:<ol><li>Você escolhe quais hábitos quer monitorar</li><li>Você realiza as atividades desejadas e registra na ferramenta</li><li>Essas atividades começam a <a href="gogood://support">gerar pontos</a> que melhoram sua posição nos rankings</li></ol>',
  "I'm gonna be at the dance. I will. Why do you keep following me around? He's alright. Thank god I still got my hair. What on Earth is that thing I'm wearing?",
  "What, what, ma? Yeah well, you shouldn't drink. No, bastards. Believe me, Marty, you're better off not having to worry about all the aggravation and headaches of playing at that dance. Cause, George, she wants to go to the dance with you, she just doesn't know it yet. That's why we got to show her that you, George McFly, are a fighter. You're somebody who's gonna stand up for yourself, someone who's gonna protect her.",
];

const AccordionList = ({ ...rest }) => (
  <>
    <Accordion title={'Titulo 1'}>
      <AccordionItem long={longs[0]}>
        Qual é o e-mail devo utilizar para me cadastrar?
      </AccordionItem>
      <AccordionItem
        long={longs[1]}
        onLink={(data) => {
          console.log('CALLED');
          console.log(data);
        }}
      >
        Não lembro o meu e-mail. O que devo fazer?
      </AccordionItem>
      <AccordionItem long={longs[2]}>
        Como posso recuperar a minha senha?
      </AccordionItem>
      <AccordionItem long={longs[3]}>
        Como posso mudar a minha senha?
      </AccordionItem>
    </Accordion>
  </>
);

export const Example = AccordionList;

if (Platform.OS === 'android') {
  const fillStories = storiesOf('Color', module).addDecorator((Story) => (
    <View>
      <Story />
    </View>
  ));

  fillStories.add('List', AccordionList, Example.args);
}
