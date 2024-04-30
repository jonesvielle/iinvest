import * as React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import {responsiveScale, width} from '../../utilities/helper';
import {themeColor} from '../theme';

interface ActivityCardComponentProps {
  children: React.ReactNode;
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const ActivityCardComponent = ({
  children,
  title,
  onPress,
}: ActivityCardComponentProps) => {
  return (
    <View
      style={{
        // flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: width * 0.065,
        paddingVertical: responsiveScale(8),
        borderWidth: responsiveScale(0.2),
        borderColor: themeColor.lightGrey,
        borderRadius: responsiveScale(5),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable onPress={onPress}>
          <View
            style={{
              backgroundColor: themeColor.purple,
              padding: responsiveScale(5),
              borderRadius: responsiveScale(5),
              alignItems: 'center',
            }}>
            {children}
          </View>
        </Pressable>
      </View>
      <Text
        style={{
          marginTop: responsiveScale(5),
          color: themeColor.secondaryText,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default ActivityCardComponent;
