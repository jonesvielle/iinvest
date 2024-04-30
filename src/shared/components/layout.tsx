import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Platform} from 'react-native';
import {themeColor} from '../theme';
import {
  homeActivity,
  responsiveFont,
  responsiveScale,
} from '../../utilities/helper';
import {Image} from 'react-native-svg';
import ActivityCardComponent from './activityCardComponent';
import * as Progress from 'react-native-progress';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,

            backgroundColor: themeColor.backgroundColor,
          }}>
          {children}

          {/* Down bar */}
          {/* {Platform.OS === 'ios' ? null : (
            <View
              style={{
                marginBottom: responsiveScale(10),
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                 borderColor: themeColor.purple,
                 borderWidth: responsiveScale(1),
                 width: '35%',
                }}
              />
            </View>
          )} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Layout;
