import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

global.height = height;
global.width = width;

export default {};
