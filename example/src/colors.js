import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  BodyLarge,
  BodyLargeBold,
  Button,
  GradientView,
  H1,
  H2,
  H3,
  H4,
  Icon,
  Placeholder,
  PlaceholderBold,
  Regular,
  RegularBold,
  Small,
  Small2,
  SmallBold,
  Text,
} from 'react-native-vulpes';

const flexedDiv = { flex: 1 };

const gradientsContainer = {
  paddingLeft: 20,
  paddingRight: 20,
  flexDirection: 'row',
};

const buttonsContainer = {
  padding: 10,
  flexDirection: 'row',
};
const gradientBox = {
  height: 100,
  width: 100,
  alignSelf: 'center',
  margin: 5,
};
const gradientText = {
  alignSelf: 'center',
  flex: 1,
  textAlign: 'center',
};
const iconsContainer = {
  padding: 20,
};
const iconSpacing = {
  padding: 5,
};
export default (props) => {
  return (
    <View style={flexedDiv}>
      <ScrollView>
        <H1>Primary</H1>
        <H2 color="cyan">Cyan</H2>
        <H3 color="dark_cyan">Dark Cyan</H3>
        <H4 color="light_cyan">Light Cyan</H4>

        <H1>Secondary</H1>
        <BodyLarge color="blue">Blue</BodyLarge>
        <BodyLargeBold color="dark_blue">Dark Blue</BodyLargeBold>
        <Placeholder color="light_blue">Light Blue</Placeholder>

        <PlaceholderBold color="green">Green</PlaceholderBold>
        <Regular color="dark_green">Dark Green</Regular>
        <RegularBold color="light_green">Light Green</RegularBold>

        <Small color="orange">Orange</Small>
        <Small2 color="dark_orange">Dark Orange</Small2>
        <SmallBold color="light_orange">Light Orange</SmallBold>

        <Text color="purple">Purple</Text>
        <Text color="dark_purple">Dark Purple</Text>
        <Text color="light_purple">Light Purple</Text>

        <Text color="pink">Pink</Text>
        <Text color="dark_pink">Dark Pink</Text>
        <Text color="light_pink">Light Pink</Text>

        <Text color="red">Red</Text>
        <Text color="dark_red">Dark Red</Text>
        <Text color="light_red">Light Red</Text>

        <Text color="yellow">Yellow</Text>
        <Text color="dark_yellow">Dark Yellow</Text>
        <Text color="light_yellow">Light Yellow</Text>

        <H1>Neutral</H1>
        <Text color="black">Black</Text>
        <Text color="white">White</Text>

        <Text color="gray">Gray</Text>
        <Text color="dark_gray">Dark Gray</Text>
        <Text color="light_gray">Light Gray</Text>

        <H1>Functional</H1>
        <Text color="success">Success</Text>
        <Text color="dark_success">Dark Success</Text>
        <Text color="light_success">Light Success</Text>

        <Text color="error">Error</Text>
        <Text color="dark_error">Dark Error</Text>
        <Text color="light_error">Light Error</Text>

        <Text color="alert">Alert</Text>
        <Text color="dark_alert">Dark Alert</Text>
        <Text color="light_alert">Light Alert</Text>

        <H1>Gradients</H1>
        <View style={gradientsContainer}>
          <GradientView color="gradient_blue" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient Blue
            </Text>
          </GradientView>
          <GradientView color="gradient_cyan" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient cyan
            </Text>
          </GradientView>
          <GradientView color="gradient_green" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient green
            </Text>
          </GradientView>
        </View>
        <View style={gradientsContainer}>
          <GradientView color="gradient_orange" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient orange
            </Text>
          </GradientView>
          <GradientView color="gradient_pink" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient pink
            </Text>
          </GradientView>
          <GradientView color="gradient_purple" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient purple
            </Text>
          </GradientView>
        </View>

        <View style={gradientsContainer}>
          <GradientView color="gradient_red" style={gradientBox}>
            <Text color="white" style={gradientText}>
              Gradient red
            </Text>
          </GradientView>
        </View>
        <H1>Icons</H1>
        <Text style={iconsContainer}>
          <Icon style={iconSpacing} name="arrow_down" />
          <Icon style={iconSpacing} name="arrow_right" size={40} />
          <Icon style={iconSpacing} name="bookmark" color="dark_alert" />
          <Icon style={iconSpacing} name="bookmark_empty" />
          <Icon style={iconSpacing} name="calendar" />
          <Icon style={iconSpacing} name="chat" />
          <Icon style={iconSpacing} name="check" />
          <Icon style={iconSpacing} name="checkin" />
          <Icon style={iconSpacing} name="chevron_down" color="dark_blue" />
          <Icon style={iconSpacing} name="chevron_left" />
          <Icon style={iconSpacing} name="chevron_right" />
          <Icon style={iconSpacing} name="chevron_up" />
          <Icon style={iconSpacing} name="clock" />
          <Icon style={iconSpacing} name="close" />
          <Icon style={iconSpacing} name="community" />
          <Icon style={iconSpacing} name="compress_video" />
          <Icon style={iconSpacing} name="content" />
          <Icon style={iconSpacing} name="context_menu" />
          <Icon style={iconSpacing} name="download" />
          <Icon style={iconSpacing} name="edit" />
          <Icon style={iconSpacing} name="exclamation" />
          <Icon style={iconSpacing} name="expand_video" />
          <Icon style={iconSpacing} name="external_link" />
          <Icon style={iconSpacing} name="favorite" />
          <Icon style={iconSpacing} name="favorite_empty" />
          <Icon style={iconSpacing} name="filter" />
          <Icon style={iconSpacing} name="help" />
          <Icon style={iconSpacing} name="home" />
          <Icon style={iconSpacing} name="info" />
          <Icon style={iconSpacing} name="like" color="dark_red" />
          <Icon style={iconSpacing} name="like_empty" color="light_red" />
          <Icon style={iconSpacing} name="lock" />
          <Icon style={iconSpacing} name="long_arrow_left" />
          <Icon style={iconSpacing} name="long_arrow_right" />
          <Icon style={iconSpacing} name="menu" />
          <Icon style={iconSpacing} name="notification" />
          <Icon style={iconSpacing} name="notification_empty" />
          <Icon style={iconSpacing} name="notification_2" />
          <Icon style={iconSpacing} name="options" />
          <Icon style={iconSpacing} name="order" />
          <Icon style={iconSpacing} name="photo" />
          <Icon style={iconSpacing} name="pin" />
          <Icon style={iconSpacing} name="plan" />
          <Icon style={iconSpacing} name="play_video" />
          <Icon style={iconSpacing} name="plus" />
          <Icon style={iconSpacing} name="qr_code" />
          <Icon style={iconSpacing} name="search" />
          <Icon style={iconSpacing} name="send" />
          <Icon style={iconSpacing} name="spinner" />
          <Icon style={iconSpacing} name="streaming" />
          <Icon style={iconSpacing} name="ticket" />
          <Icon style={iconSpacing} name="trash" />
          <Icon style={iconSpacing} name="unlock" />
          <Icon style={iconSpacing} name="user" />
          <Icon style={iconSpacing} name="volume" />
        </Text>

        <H1>Buttons</H1>
        <View style={buttonsContainer}>
          <Button>
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button>
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button>
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>

        <View style={buttonsContainer}>
          <Button outline>
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button outline>
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button outline>
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>

        <View style={buttonsContainer}>
          <Button ghost>
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button ghost>
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button ghost>
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>

        <View style={buttonsContainer}>
          <Button color="blue">
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button color="success" textColor="dark_success">
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button color="red">
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>

        <View style={buttonsContainer}>
          <Button outline color="purple">
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button outline color="light_purple">
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button outline color="light_gray">
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>

        <View style={buttonsContainer}>
          <Button ghost color="orange">
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button ghost color="green">
            <Icon name="like_empty" />
            <Text>Primary button</Text>
          </Button>
        </View>
        <View style={buttonsContainer}>
          <Button ghost color="alert">
            <Text>Primary button</Text>
            <Icon name="like_empty" />
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
