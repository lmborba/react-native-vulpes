import React, { Component, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import HTML, {
  defaultSystemFonts,
  HTMLContentModel,
  HTMLElementModel,
} from 'react-native-render-html';
import { BodyLargeBold } from '..';
import { getColors } from '../colors';
import VulpesContext from '../contexts/VulpesContext';
import { getFonts } from '../fonts';
import useVulpes from '../hooks/useVulpes';
import { separatorToLong, titleStyle } from '../styles/list';
import { Icon } from './icon';
import { RegularBold } from './typos';

const accordionStyle = (theme) => {
  const colors = getColors(theme);
  const fonts = getFonts(theme);
  return {
    ...fonts.regular,
    color: colors('gray.80'),
    paddingRight: 10,
  };
};

const Title = (props) => {
  if (!props.title) return null;
  return (
    <BodyLargeBold style={titleStyle} color={'primary.80'}>
      {props.title}
    </BodyLargeBold>
  );
};

export const Accordion = (props) => {
  const cItens = React.Children.toArray(props.children).filter(
    (c) => c.props.visible !== false
  );

  const itemCount = cItens.length;
  const accStyle = { flex: 1, marginTop: 8, marginBottom: 16, ...props.style };
  return (
    <View style={accStyle}>
      <Title title={props.title} />
      {cItens.map((child, i) => {
        const last = i === itemCount - 1;
        return React.cloneElement(child, {
          last: last,
        });
      })}
    </View>
  );
};

const NavIcon = ({ showing }) => {
  const navIconCont = {
    justifyContent: 'center',
    textAlign: 'center',
    verticalAlign: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  };
  return (
    <View style={navIconCont}>
      <Icon size={12} name={showing ? 'chevron_down' : 'chevron_right'} />
    </View>
  );
};

const Children = ({ children }) => {
  let item =
    typeof children === 'string' ? (
      <RegularBold>{children}</RegularBold>
    ) : (
      children
    );
  const style = { flex: 1, minHeight: 24, justifyContent: 'center' };
  return <View style={style}>{item}</View>;
};

class ShowHTML extends Component {
  rendererProps() {
    const { onLink } = this.props;

    return {
      a: {
        onPress: onLink ? (_data, href) => onLink(href) : undefined,
      },
    };
  }

  customHTMLElementModels() {
    const { theme } = this.context;
    const fonts = getFonts(theme);
    const colors = getColors(theme);
    const strongModel = HTMLElementModel.fromCustomModel({
      tagName: 'b',
      mixedUAStyles: {
        ...fonts.regularBold,
        color: colors('gray.80'),
        paddingRight: 10,
      },
      contentModel: HTMLContentModel.textual,
    });
    return {
      a: HTMLElementModel.fromCustomModel({
        tagName: 'a',
        mixedUAStyles: {
          ...fonts.regularBold,
          textDecorationLine: 'underline',
        },
        contentModel: HTMLContentModel.textual,
      }),
      b: strongModel,
      strong: strongModel,
    };
  }

  render() {
    const { html } = this.props;
    const { theme } = this.context;
    return (
      <HTML
        baseStyle={accordionStyle(theme)}
        systemFonts={[
          'DasaSans-Regular',
          'DasaSans-Bold',
          ...defaultSystemFonts,
        ]}
        source={{ html: html }}
        style={separatorToLong}
        renderersProps={this.rendererProps()}
        customHTMLElementModels={this.customHTMLElementModels()}
      />
    );
  }
}
ShowHTML.contextType = VulpesContext;

function itemStyle(props, theme) {
  const colors = getColors(theme);
  let style = {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomColor: colors('gray.40'),
    borderBottomWidth: 1,
    flexDirection: 'column',
    ...props.style,
  };
  if (props.last) style.borderBottomWidth = 0;

  return style;
}

export const AccordionItem = (props) => {
  const [showing, setShowing] = useState(props.showing || false);
  const toggleShowing = () => setShowing(!showing);
  const touchStyle = { flexDirection: 'row', alignItems: 'center' };
  const { theme } = useVulpes();
  return (
    <View style={itemStyle(props, theme)}>
      <TouchableOpacity onPress={toggleShowing} style={touchStyle}>
        <Children children={props.children} />
        <NavIcon showing={showing} />
      </TouchableOpacity>
      {showing ? (
        <View>
          {props.long && <ShowHTML html={props.long} onLink={props.onLink} />}
          {props.content}
        </View>
      ) : null}
    </View>
  );
};
