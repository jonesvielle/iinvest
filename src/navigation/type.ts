import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  DetailScreen: undefined;
  ScoreScreen: undefined;
  transfer: undefined;
  receipt: undefined;
};

// export type RootStackScreenProps = StackScreenProps<RootStackParamList>;

export type RootStackScreenProps = StackNavigationProp<RootStackParamList>;
