import {Dimensions} from 'react-native';

import {type IntegerReturnType, type RestyleProps} from './types';

export const {fontScale, scale, height, width} = Dimensions.get('window');

export const responsiveFont: IntegerReturnType = (value: number) => {
  return fontScale * value;
};
export const responsiveScale: IntegerReturnType = (value: number) => {
  return scale * value;
};

export const homeActivity = [
  {
    name: 'Transfer',
    icon: require(`../shared/images/send.png`),
  },
  {
    name: 'My Card',
    icon: require(`../shared/images/credit-card.png`),
  },
  {
    name: 'Insight',
    icon: require(`../shared/images/growth.png`),
  },
];
