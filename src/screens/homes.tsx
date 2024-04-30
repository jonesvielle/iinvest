import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {themeColor} from '../shared/theme';
import {
  fontScale,
  height,
  homeActivity,
  responsiveFont,
  responsiveScale,
  width,
} from '../utilities/helper';
import ActivityCardComponent from '../shared/components/activityCardComponent';
import * as Progress from 'react-native-progress';
import Layout from '../shared/components/layout';
import {RootStackParamList, RootStackScreenProps} from '../navigation/type';
import {useNavigation} from '@react-navigation/native';
import EarnAndSpentCard from '../shared/components/EarnAndSpentCard';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigation = useNavigation<RootStackScreenProps>();
  return (
    <Layout>
      <View
        style={{
          backgroundColor: themeColor.purple,
          padding: responsiveScale(10),
          paddingBottom: responsiveScale(50),
          paddingTop:
            Platform.OS === 'ios' ? responsiveScale(25) : responsiveScale(10),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                color: 'white',
                fontFamily: 'DM Sans',
                fontSize: responsiveFont(15),
              }}>
              Hi Phillip 👋🏾
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'DM Sans',
                fontSize: responsiveFont(35),
                fontWeight: 'bold',
                marginTop: responsiveScale(10),
              }}>
              $7,425
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'DM Sans',
                fontSize: responsiveFont(15),
                marginTop: responsiveScale(4),
              }}>
              Available balance
            </Text>
          </View>

          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'flex-end', zIndex: 2}}>
                <View
                  style={{
                    borderWidth: responsiveScale(1),
                    borderColor: 'white',
                    borderRadius: responsiveScale(500),
                    marginRight: responsiveScale(-5),
                    zIndex: 2,
                    backgroundColor: themeColor.purple,
                    padding: responsiveScale(2),
                  }}
                />
              </View>
              <Image
                borderRadius={responsiveScale(2)}
                style={{
                  width: responsiveScale(25),
                  height: responsiveScale(25),
                  marginLeft: responsiveScale(2),
                }}
                source={require('../shared/images/user.png')}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: responsiveScale(10),
          padding: responsiveScale(8),
          backgroundColor: 'white',
          marginTop: responsiveScale(-40),
          borderRadius: responsiveScale(5),
          borderWidth: responsiveScale(0.2),
          borderColor: themeColor.lightGrey,
        }}>
        {/* Spent and Earned Card */}
        <EarnAndSpentCard spentAmount="$1,460" earnedAmount="$2,730" />

        {/* start body */}
        <Text
          style={{
            marginTop: responsiveScale(10),
            fontSize: responsiveFont(13),
          }}>
          You spent $2,732 on dining out this month. This is 25% more than last
          month.
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('DetailScreen');
          }}>
          <Text
            style={{
              marginTop: responsiveScale(5),
              fontSize: responsiveFont(13),
              color: themeColor.purple,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Tell me more
          </Text>
        </Pressable>
      </View>

      {/* Activity */}

      <View
        style={{
          marginHorizontal: responsiveScale(10),
          marginTop: responsiveScale(15),
        }}>
        <Text
          style={{
            fontSize: responsiveFont(18),
            fontWeight: 'bold',
            color: themeColor.secondaryText,
          }}>
          Activity
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveScale(5),
            justifyContent: 'space-between',
          }}>
          {homeActivity.map((activity, index) => (
            <ActivityCardComponent key={index} title={activity.name}>
              <Pressable
                onPress={() => {
                  if (activity.name === 'Insight') {
                    navigation.navigate('ScoreScreen');
                  }
                  if (activity.name === 'Transfer') {
                    navigation.navigate('transfer');
                  }
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: responsiveScale(6),
                    height: responsiveScale(6),
                  }}
                  source={activity.icon}
                />
              </Pressable>
            </ActivityCardComponent>
          ))}
        </View>
      </View>

      <View
        style={{
          marginHorizontal: responsiveScale(10),
          marginTop: responsiveScale(15),
          borderRadius: responsiveScale(5),
          borderWidth: responsiveScale(0.2),
          borderColor: themeColor.lightGrey,
        }}>
        <Text
          style={{
            fontSize: responsiveFont(18),
            fontWeight: 'bold',
            color: themeColor.secondaryText,
          }}>
          Complete Verification
        </Text>
        <View
          style={{
            padding: responsiveScale(8),
            backgroundColor: 'white',
            marginTop: responsiveScale(5),
            borderRadius: responsiveScale(5),
            borderWidth: responsiveScale(0.2),
            borderColor: themeColor.lightGrey,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: responsiveFont(25),
                fontWeight: 'bold',
                color: themeColor.secondaryText,
              }}>
              75%
            </Text>
            <Text
              style={{
                fontSize: responsiveFont(12),
                color: themeColor.secondaryText,
              }}>
              7 of 10 completed
            </Text>
          </View>
          <View style={{marginTop: responsiveScale(5)}}>
            <Progress.Bar
              useNativeDriver={false}
              animationConfig={{duration: 3000, delay: 500}}
              width={width * 0.75}
              color={themeColor.purple}
              borderWidth={0}
              style={{
                top: 0,
                //   width:"100%",
                // flex: 1,
                backgroundColor: themeColor.darkGrey,
              }}
              progress={0.75}
            />
          </View>
          <View
            style={{
              borderWidth: responsiveScale(0.4),
              marginVertical: responsiveScale(7),
              borderColor: themeColor.darkGrey,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                borderRadius={responsiveScale(2)}
                style={{
                  width: responsiveScale(6),
                  height: responsiveScale(6),
                }}
                source={require(`../shared/images/user-icon.png`)}
              />
            </View>
            <View style={{marginLeft: responsiveScale(4)}}>
              <Text
                style={{
                  fontSize: responsiveFont(14),
                  fontWeight: 'bold',
                  color: themeColor.secondaryText,
                }}>
                Personal Information
              </Text>
              <Text
                style={{
                  fontSize: responsiveFont(13),
                  color: themeColor.secondaryText,
                  marginTop: responsiveScale(4),
                }}>
                Please provide documents to verify your source of income
                personal informmation.
              </Text>
              <Text
                style={{
                  fontSize: responsiveFont(13),
                  color: themeColor.purple,
                  marginTop: responsiveScale(5),
                  fontWeight: 'bold',
                }}>
                Continue
              </Text>
              <View
                style={{
                  borderWidth: responsiveScale(0.4),
                  marginVertical: responsiveScale(7),
                  borderColor: themeColor.darkGrey,
                }}
              />
            </View>
          </View>

          {/* Verification */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                resizeMode="contain"
                style={{
                  width: responsiveScale(6),
                  height: responsiveScale(6),
                }}
                source={require(`../shared/images/identity-card.png`)}
              />
            </View>
            <View style={{marginLeft: responsiveScale(4), width: '95%'}}>
              <Text
                style={{
                  fontSize: responsiveFont(14),
                  fontWeight: 'bold',
                  color: themeColor.secondaryText,
                }}>
                Personal Information
              </Text>

              <View
                style={{
                  borderWidth: responsiveScale(0.4),
                  marginVertical: responsiveScale(7),
                  borderColor: themeColor.darkGrey,
                  width: '100%',
                }}
              />
            </View>
          </View>

          {/* Confirm mail */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                resizeMode="contain"
                style={{
                  width: responsiveScale(6),
                  height: responsiveScale(6),
                }}
                source={require(`../shared/images/identity-card.png`)}
              />
            </View>
            <View style={{marginLeft: responsiveScale(4), width: '95%'}}>
              <Text
                style={{
                  fontSize: responsiveFont(14),
                  fontWeight: 'bold',
                  color: themeColor.secondaryText,
                }}>
                Confirm email
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* News and promo */}
      <View
        style={{
          marginHorizontal: responsiveScale(10),
          paddingBottom: responsiveScale(5),
          marginTop: responsiveScale(15),
          marginBottom: responsiveScale(10),
          borderRadius: responsiveScale(30),
          borderWidth: responsiveScale(0.2),
          borderColor: themeColor.lightGrey,
        }}>
        <Text
          style={{
            fontSize: responsiveFont(18),
            fontWeight: 'bold',
            color: themeColor.secondaryText,
          }}>
          News and promo
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: responsiveScale(5),
            borderRadius: responsiveScale(5),
          }}>
          <View>
            <Image
              resizeMode="cover"
              style={{
                width: '100%',
                height: responsiveScale(60),
                borderTopRightRadius: responsiveScale(5),
                borderTopLeftRadius: responsiveScale(5),
              }}
              source={require('../shared/images/news-promo.png')}
            />
            <Text
              style={{
                position: 'absolute',
                marginTop: responsiveScale(25),
                marginLeft: responsiveScale(70),
                fontWeight: 'bold',
                fontSize: responsiveFont(22),
                color: 'white',
              }}>
              Get $12 free!
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: responsiveScale(8),
            }}>
            <Text
              style={{
                color: themeColor.secondaryText,
                fontWeight: 'bold',
                fontSize: responsiveFont(16),
                marginBottom: responsiveScale(5),
                marginTop: responsiveScale(5),
              }}>
              Invite your friends!
            </Text>
            <Text
              style={{
                color: themeColor.secondaryText,
                fontSize: responsiveFont(13),
                marginBottom: responsiveScale(7),
              }}>
              For every user you invite and signs up, you can earn up $5.
            </Text>
            <Text
              style={{
                color: themeColor.purple,
                fontWeight: 'bold',
                fontSize: responsiveFont(15),
                marginBottom: responsiveScale(10),
              }}>
              Invite now
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
