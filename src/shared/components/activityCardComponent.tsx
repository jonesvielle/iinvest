import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {responsiveScale, width} from '../../utilities/helper';
import {themeColor} from '../theme';

interface ActivityCardComponentProps {
  children: React.ReactNode;
  title: string;
}

const ActivityCardComponent = ({
  children,
  title,
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
        <View
          style={{
            backgroundColor: themeColor.purple,
            padding: responsiveScale(5),
            borderRadius: responsiveScale(5),
            alignItems: 'center',
          }}>
          {children}
        </View>
      </View>
      <Text style={{marginTop: responsiveScale(5)}}>{title}</Text>
    </View>
  );
};

export default ActivityCardComponent;
