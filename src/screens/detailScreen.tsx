import * as React from 'react';
import {Text, View, StyleSheet, Image, Pressable, Platform} from 'react-native';
import Layout from '../shared/components/layout';
import {responsiveFont, responsiveScale, width} from '../utilities/helper';
import {themeColor} from '../shared/theme';
import EarnAndSpentCard from '../shared/components/EarnAndSpentCard';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../navigation/type';

interface DetailScreenProps {}

const TopTransactions = [
  {
    title: 'Pizza Hut',
    numberOfTransactions: '4',
    amount: '$200',
    logo: require('../shared/images/pizza-hut-logo.png'),
  },
  {
    title: 'Amazon',
    numberOfTransactions: '3',
    amount: '$180',
    logo: require('../shared/images/amazon-logo.png'),
  },
  {
    title: 'Subway',
    numberOfTransactions: '2',
    amount: '$125',
    logo: require('../shared/images/subway-logo.png'),
  },
];

const TopCategories = [
  {
    image: require('../shared/images/burger.png'),
    title: 'Launch & Dinner',
    amount: '$450',
  },
  {
    image: require('../shared/images/drug.png'),
    title: 'Medical Allowances',
    amount: '$330',
  },
];

const DetailScreen = (props: DetailScreenProps) => {
  const navigation = useNavigation<RootStackScreenProps>();
  return (
    <Layout>
      <View
        style={{
          flex: 1,

          //   height: 800,
        }}>
        <View
          style={{
            padding: responsiveScale(8),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop:
              Platform.OS === 'ios' ? responsiveScale(23) : responsiveScale(8),
          }}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: responsiveScale(8),
                height: responsiveScale(8),
              }}
              source={require('../shared/images/Path.png')}
            />
          </Pressable>
          <Text
            style={{
              fontSize: responsiveFont(16),
              fontWeight: 'bold',
              color: themeColor.purple,
            }}>
            Set budget
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: responsiveScale(10),
          }}>
          <Text
            style={{
              fontSize: responsiveFont(22),
              color: themeColor.secondaryText,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Your balance is $2,639
          </Text>
          <Text
            style={{
              fontSize: responsiveFont(15),
              color: themeColor.secondaryText,
              textAlign: 'center',
              marginTop: responsiveScale(5),
            }}>
            Last month, you spent $2,719
          </Text>
        </View>
        <View style={{marginTop: responsiveScale(10)}}>
          <Image
            style={{
              width: '100%',
              height: responsiveScale(60),
            }}
            source={require('../shared/images/Graph.png')}
          />
          <View
            style={{
              marginHorizontal: responsiveScale(10),
              paddingVertical: responsiveScale(7),
              paddingHorizontal: responsiveScale(7),
              marginTop: responsiveScale(-10),
              backgroundColor: 'white',
              borderRadius: responsiveScale(5),
              borderWidth: responsiveScale(0.2),
              borderColor: themeColor.lightGrey,
            }}>
            <EarnAndSpentCard spentAmount="$1,460" earnedAmount="$2,730" />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: responsiveScale(10),
            marginTop: responsiveScale(10),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFont(18),
              color: themeColor.secondaryText,
              marginBottom: responsiveScale(10),
            }}>
            Top Transaction
          </Text>

          <View style={{marginTop: responsiveScale(0)}}>
            {TopTransactions.map((transaction, index) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '25%',
                      paddingHorizontal: responsiveScale(5),
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        padding: responsiveScale(6),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: responsiveScale(5),
                        shadowColor: '#00000014',
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          width: responsiveScale(10),
                          height: responsiveScale(10),
                        }}
                        source={transaction.logo}
                      />
                    </View>
                  </View>

                  <View style={{width: '55%'}}>
                    <Text
                      style={{
                        fontSize: responsiveFont(16),
                        fontWeight: 'bold',
                        color: themeColor.secondaryText,
                      }}>
                      Pizza Hut
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFont(15),
                        color: themeColor.secondaryText,
                      }}>
                      {transaction.numberOfTransactions} transactions
                    </Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'flex-end'}}>
                    <Text
                      style={{
                        fontSize: responsiveFont(18),
                        fontWeight: 'bold',
                        color: themeColor.secondaryText,
                      }}>
                      {transaction.amount}
                    </Text>
                  </View>
                </View>
                {index === TopTransactions.length - 1 ? null : (
                  <View
                    style={{
                      borderWidth: responsiveScale(0.4),
                      marginVertical: responsiveScale(7),
                      borderColor: themeColor.darkGrey,
                    }}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            marginHorizontal: responsiveScale(10),
            marginTop: responsiveScale(10),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: responsiveFont(18),
              color: themeColor.secondaryText,
            }}>
            Top Category
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: responsiveScale(5),
              marginBottom: responsiveScale(15),

              flexWrap: 'wrap',
            }}>
            {TopCategories.map((category, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: responsiveScale(5),
                  paddingHorizontal: responsiveScale(5),
                  backgroundColor: 'white',
                  marginTop: responsiveScale(10),
                  alignItems: 'center',
                  marginLeft: width * 0.02,
                  width: width * 0.4,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: responsiveScale(35),
                      height: responsiveScale(35),
                    }}
                    source={require('../shared/images/circle-progress.png')}
                  />
                  <Image
                    resizeMode="contain"
                    style={{
                      width: responsiveScale(12),
                      height: responsiveScale(12),
                      marginTop: responsiveScale(-25),
                    }}
                    source={category.image}
                  />
                </View>
                <Text
                  style={{
                    marginTop: responsiveScale(10),
                    fontSize: responsiveFont(16),
                    color: themeColor.secondaryText,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {category.title}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFont(15),
                    color: themeColor.secondaryText,
                  }}>
                  {category.amount}
                </Text>
                <View
                  style={{
                    marginTop: responsiveScale(5),
                    backgroundColor: themeColor.backgroundColor,
                    paddingHorizontal: responsiveScale(5),
                    paddingVertical: responsiveScale(2),
                    borderRadius: responsiveScale(5),
                  }}>
                  <Text style={{color: themeColor.bluishGrey}}>on track</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default DetailScreen;
