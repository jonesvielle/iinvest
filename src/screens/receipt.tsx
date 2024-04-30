import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {themeColor} from '../shared/theme';
import {height, responsiveFont, responsiveScale} from '../utilities/helper';
import {useRoute} from '@react-navigation/native';
import {ContactType} from './transfer';

interface ReceiptProps {}

const Receipt = (props: ReceiptProps) => {
  const {item}: {item: ContactType} = useRoute().params;
  console.log('params: ' + JSON.stringify(item));
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColor.purple,
        alignItems: 'center',
        paddingTop:
          Platform.OS === 'ios' ? responsiveScale(10) : responsiveScale(0),
      }}>
      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: height * 0.1,
          marginTop: responsiveScale(5),
        }}
        source={require('../shared/images/Shapes.png')}
      />
      <Text
        style={{
          fontSize: responsiveFont(20),
          fontWeight: 'bold',
          color: 'white',
          marginTop: responsiveScale(-10),
        }}>
        My Receipt
      </Text>
      <View style={{padding: responsiveScale(10), width: '100%'}}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: responsiveScale(10),
            paddingVertical: responsiveScale(20),
            borderRadius: responsiveScale(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: themeColor.yellow,
              padding: responsiveScale(5),
              borderRadius: responsiveScale(7),
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: responsiveScale(12),
                height: responsiveScale(12),
              }}
              source={item.categoryImage}
            />
          </View>
          <Text
            style={{
              marginTop: responsiveScale(5),
              fontSize: responsiveFont(20),
              fontWeight: 'bold',
              color: themeColor.secondaryText,
            }}>
            Transfer complete.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                padding: responsiveScale(5),
                backgroundColor: themeColor.purple,
                borderRadius: responsiveScale(500),
              }}
            />
            <View
              style={{
                borderWidth: responsiveScale(0.2),
                marginVertical: responsiveScale(3),
                borderColor: themeColor.darkGrey,
                width: '110%',
                backgroundColor: themeColor.darkGrey,
                height: height * 0.001,
              }}
            />
            <View
              style={{
                padding: responsiveScale(5),
                backgroundColor: themeColor.purple,
                borderRadius: responsiveScale(500),
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: responsiveScale(0),
              paddingHorizontal: responsiveScale(0),
              backgroundColor: 'white',
              flexDirection: 'row',
              marginTop: responsiveScale(0),
              alignItems: 'center',
              borderRadius: responsiveScale(5),
            }}>
            <View
              style={{
                // alignItems: 'center',
                //   justifyContent: 'center',
                width: '20%',
              }}>
              <Image
                resizeMode="cover"
                style={{
                  width: responsiveScale(15),
                  height: responsiveScale(15),
                  borderRadius: responsiveScale(5),
                }}
                source={item.image}
              />
            </View>
            <View style={{width: '80%'}}>
              <Text
                style={{
                  fontSize: responsiveFont(12),
                  color: themeColor.bluishGrey,
                  fontWeight: 'bold',
                  //   marginTop: responsiveScale(5),
                }}>
                Recipient
              </Text>
              <Text
                style={{
                  fontSize: responsiveFont(15),
                  color: themeColor.secondaryText,
                  marginTop: responsiveScale(2),
                  fontWeight: 'bold',
                }}>
                {item.fullName}
              </Text>
            </View>
          </View>
          <View style={{width: '100%', marginTop: responsiveScale(10)}}>
            <Text
              style={{
                fontSize: responsiveFont(12),
                color: themeColor.bluishGrey,
                fontWeight: 'bold',
                //   marginTop: responsiveScale(5),
              }}>
              Reference number
            </Text>
            <Text
              style={{
                fontSize: responsiveFont(15),
                color: themeColor.secondaryText,
                marginTop: responsiveScale(2),
                fontWeight: 'bold',
              }}>
              {item.referenceNumber}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: responsiveScale(10),
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  fontSize: responsiveFont(12),
                  color: themeColor.bluishGrey,
                  fontWeight: 'bold',
                  //   marginTop: responsiveScale(5),
                }}>
                Amount sent
              </Text>
              <Text
                style={{
                  fontSize: responsiveFont(15),
                  color: themeColor.secondaryText,
                  marginTop: responsiveScale(2),
                  fontWeight: 'bold',
                }}>
                ${item.amount}
              </Text>
            </View>
            <View style={{marginLeft: responsiveScale(30)}}>
              <Text
                style={{
                  fontSize: responsiveFont(12),
                  color: themeColor.bluishGrey,
                  fontWeight: 'bold',
                  //   marginTop: responsiveScale(5),
                }}>
                Transfer fee
              </Text>
              <Text
                style={{
                  fontSize: responsiveFont(15),
                  color: themeColor.secondaryText,
                  marginTop: responsiveScale(2),
                  fontWeight: 'bold',
                }}>
                ${item.fee}
              </Text>
            </View>
          </View>
          <View style={{marginTop: responsiveScale(20), width: '100%'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: themeColor.purple,
                paddingVertical: responsiveScale(5),
                alignItems: 'center',
                borderRadius: responsiveScale(3),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: responsiveScale(10),
            marginHorizontal: responsiveScale(5),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: responsiveFont(16),
              fontWeight: 'bold',
              color: 'white',
            }}>
            Your transfer will arrive to the recipient within 48 hours
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Receipt;
