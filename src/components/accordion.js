import React, { Component, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import HTML, {
  HTMLContentModel,
  HTMLElementModel,
} from 'react-native-render-html';
import { BodyLargeBold, Colors, Fonts } from '..';
import {
  listContainer,
  listItem,
  listItemText,
  navIconCont,
  separatorToLong,
  titleStyle,
  touchStyle,
} from '../styles/list';
import { Icon } from './icon';
import { Regular } from './typos';

function accordionStyle() {
  return {
    ...Fonts.small,
    color: Colors.gray,
    paddingRight: 10,
  };
}

const Title = (props) => {
  if (!props.title) return null;
  return (
    <BodyLargeBold style={titleStyle} color={'cyan'}>
      {props.title}
    </BodyLargeBold>
  );
};

export const Accordion = (props) => {
  const cItens = React.Children.toArray(props.children).filter(
    (c) => c.props.visible !== false
  );

  const itemCount = cItens.length;
  return (
    <View style={[listContainer, props.style]}>
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

function listProps(props) {
  let param = { activeOpacity: 1, style: listItem };
  if (props.last) {
    param.style = {
      ...param.style,
      borderBottomWidth: 0,
    };
  }
  param.style = {
    ...param.style,
    flex: 1,
    flexDirection: 'column',
  };
  return param;
}

const NavIcon = ({ showing }) => {
  return (
    <View style={navIconCont}>
      <Icon size={12} name={showing ? 'chevron_down' : 'chevron_right'} />
    </View>
  );
};

const Children = ({ children }) => {
  if (typeof children !== 'string') return children;
  return <Regular style={listItemText}>{children}</Regular>;
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
    return {
      a: HTMLElementModel.fromCustomModel({
        tagName: 'a',
        mixedUAStyles: {
          ...Fonts.smallBold,
          textDecorationLine: 'underline',
        },
        contentModel: HTMLContentModel.textual,
      }),
    };
  }

  render() {
    const { html } = this.props;
    return (
      <HTML
        baseStyle={accordionStyle()}
        source={{ html: html }}
        style={separatorToLong}
        renderersProps={this.rendererProps()}
        customHTMLElementModels={this.customHTMLElementModels()}
      />
    );
  }
}

export const AccordionItem = (props) => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing(!showing);
  const params = listProps(props);
  return (
    <View style={params.style}>
      <TouchableOpacity onPress={toggleShowing} style={touchStyle}>
        <Children children={props.children} />
        <NavIcon showing={showing} />
      </TouchableOpacity>
      {showing ? (
        <View style={separatorToLong}>
          <ShowHTML html={props.long} onLink={props.onLink} />
        </View>
      ) : null}
    </View>
  );
};
