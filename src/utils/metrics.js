import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const DEVICE_HEIGHT = height;
const DEVICE_WIDTH = width;

export { DEVICE_HEIGHT, DEVICE_WIDTH };
