import * as React from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import Layout from '../shared/components/layout';
import {height, responsiveFont, responsiveScale} from '../utilities/helper';
import {themeColor} from '../shared/theme';

interface ScoreScreenProps {}

const Recommendations = [
  {
    title: 'Spending',
    body: 'You spent $468 on food. That’s 50% higher than the average of our users.',
    count: '17',
  },
  {
    title: 'Credit',
    body: 'You were late to pay last month’s card bills. Lets try to be on time this month.',
    count: '8',
  },
];

const ScoreScreen = (props: ScoreScreenProps) => {
  return (
    <Layout>
      <View
        style={{
          width: '100%',
          height: height * 0.4,
          backgroundColor: themeColor.purple,
          borderBottomEndRadius: responsiveScale(10),
          borderBottomStartRadius: responsiveScale(10),
          paddingTop:
            Platform.OS === 'ios' ? responsiveScale(15) : responsiveScale(0),
          //   justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            height: height * 0.25,
            marginTop: responsiveScale(5),
          }}
          source={require('../shared/images/Ilustration.png')}
        />
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            height: height * 0.3,
            marginTop: responsiveScale(15),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: responsiveFont(20),
              fontWeight: 'bold',
              color: 'white',
            }}>
            Finance Score
          </Text>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: responsiveFont(22),
                fontWeight: 'bold',
                color: 'white',
              }}>
              It can be better!
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: responsiveFont(18),
                color: 'white',
              }}>
              Below are some recommendations
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: responsiveScale(10),
          paddingHorizontal: responsiveScale(10),
        }}>
        <Text
          style={{
            color: themeColor.secondaryText,
            fontSize: responsiveFont(18),
            fontWeight: 'bold',
            marginBottom: responsiveScale(10),
          }}>
          Recommendation
        </Text>
        {Recommendations.map((recommendation, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: responsiveScale(5),
              paddingVertical: responsiveScale(5),
              marginBottom: responsiveScale(5),
            }}>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    backgroundColor: themeColor.purple,
                    textAlign: 'center',
                    padding: responsiveScale(5),
                    borderRadius: responsiveScale(5),
                    color: 'white',
                    fontSize: responsiveFont(15),
                  }}>
                  +{recommendation.count}
                </Text>
              </View>
            </View>

            <View style={{width: '65%'}}>
              <Text
                style={{
                  color: themeColor.secondaryTextLight,
                  fontSize: responsiveFont(16),
                  fontWeight: 'bold',
                  marginBottom: responsiveScale(3),
                }}>
                {recommendation.title}
              </Text>
              <Text
                style={{
                  color: themeColor.secondaryText,
                  fontSize: responsiveFont(13),
                  fontWeight: 'bold',
                  marginBottom: responsiveScale(3),
                }}>
                {recommendation.body}
              </Text>
              <Text
                style={{
                  color: themeColor.purple,
                  fontSize: responsiveFont(15),
                  fontWeight: 'bold',
                  marginBottom: responsiveScale(3),
                }}>
                More details
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Layout>
  );
};

export default ScoreScreen;
