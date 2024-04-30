import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {responsiveFont, responsiveScale} from '../../utilities/helper';
import {themeColor} from '../theme';

interface EarnAndSpentCardProps {
  spentAmount: string;
  earnedAmount: string;
}

const EarnAndSpentCard = ({
  earnedAmount,
  spentAmount,
}: EarnAndSpentCardProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',

        //   backgroundColor: 'red',
      }}>
      <View style={{flexDirection: 'row', backgroundColor: 'none'}}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: responsiveScale(2),
              borderColor: themeColor.orangeRed,
              borderRadius: responsiveScale(500),
              // padding: responsiveScale(5),
              marginTop: responsiveScale(5),
            }}
          />
        </View>
        <View style={{marginLeft: responsiveScale(4)}}>
          <Text
            style={{
              color: themeColor.secondaryText,
              fontFamily: 'DM Sans',
              fontSize: responsiveFont(11),
            }}>
            Spent
          </Text>
          <Text
            style={{
              color: themeColor.secondaryText,
              fontFamily: 'DM Sans',
              fontSize: responsiveFont(30),
              fontWeight: 'bold',
            }}>
            {spentAmount}
          </Text>
        </View>
      </View>

      {/* second one */}
      <View style={{flexDirection: 'row', backgroundColor: 'none'}}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: responsiveScale(2),
              borderColor: themeColor.purple,
              borderRadius: responsiveScale(500),
              // padding: responsiveScale(5),
              marginTop: responsiveScale(5),
            }}
          />
        </View>
        <View style={{marginLeft: responsiveScale(4)}}>
          <Text
            style={{
              color: themeColor.secondaryText,
              fontFamily: 'DM Sans',
              fontSize: responsiveFont(11),
            }}>
            Earned
          </Text>
          <Text
            style={{
              color: themeColor.secondaryText,
              fontFamily: 'DM Sans',
              fontSize: responsiveFont(30),
              fontWeight: 'bold',
            }}>
            {earnedAmount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EarnAndSpentCard;
