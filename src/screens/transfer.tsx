import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  TextInput,
  Platform,
} from 'react-native';
import Layout from '../shared/components/layout';
import {
  height,
  responsiveFont,
  responsiveScale,
  width,
} from '../utilities/helper';
import {themeColor} from '../shared/theme';
import ActivityCardComponent from '../shared/components/activityCardComponent';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../navigation/type';

interface TransferProps {}

const TransferActivity = [
  {
    title: 'Mobile',
    icon: require('../shared/images/active-white-user.png'),
  },
  {
    title: 'Bank',
    icon: require('../shared/images/bank.png'),
  },
  {
    title: 'Online',
    icon: require('../shared/images/wireless-symbol.png'),
  },
  {
    title: 'QR code',
    icon: require('../shared/images/qr-code.png'),
  },
];

export type ContactType = {
  name: string;
  fullName?: string;
  image: NodeRequire;
  phone: string;
  referenceNumber?: string;
  amount?: string;
  fee?: string;
  categoryImage?: NodeRequire;
};

const RecentTransactions: ContactType[] = [
  {
    name: 'Hailey',
    fullName: 'Hailey Sanders',
    phone: '+090078601',
    image: require('../shared/images/black-guy2.jpeg'),
    referenceNumber: '#D79004321786',
    amount: '46.09',
    fee: '0.00',
    categoryImage: require('../shared/images/burger.png'),
  },
  {
    name: 'Zayn',
    fullName: 'Zayn Michael',
    phone: '+090078601',
    image: require('../shared/images/black-girl.jpeg'),
    referenceNumber: '#F79004381786',
    amount: '34.65',
    fee: '0.05',
    categoryImage: require('../shared/images/drug.png'),
  },
  {
    name: 'Thomas',
    fullName: 'Thomas Nikolas',
    phone: '+090078601',
    image: require('../shared/images/black-guy.jpeg'),
    referenceNumber: '#T79002451786',
    amount: '78.56',
    fee: '0.00',
    categoryImage: require('../shared/images/burger.png'),
  },
];

const Transfer = (props: TransferProps) => {
  const navigation = useNavigation<RootStackScreenProps>();
  const [filteredContacts, setFilteredContacts] =
    React.useState<ContactType[]>();
  const handleSearchContacts = (value: string) => {
    console.log(value);
    const filteredContact = RecentTransactions.filter(contact => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log('filtered contact', filteredContact);
    setFilteredContacts(filteredContact);
  };

  return (
    <Layout>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            padding: responsiveScale(10),
            justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: themeColor.purple,
            borderBottomStartRadius: responsiveScale(10),
            borderBottomEndRadius: responsiveScale(10),
            paddingTop:
              Platform.OS === 'ios' ? responsiveScale(25) : responsiveScale(10),
          }}>
          <Text
            style={{
              fontSize: responsiveFont(20),
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Transfer
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            {TransferActivity.map((item, index) => (
              <View
                key={index}
                style={{
                  //   flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: responsiveScale(10),
                  //   width: width * 0.2,
                  //   height: height * 0.1,
                }}>
                <View
                  style={{
                    backgroundColor: themeColor.lightPurple,
                    padding: responsiveScale(5),
                    borderRadius: responsiveScale(5),
                    alignItems: 'center',
                  }}>
                  <Pressable
                    onPress={() => {
                      //   if (activity.name === 'Insight') {
                      //     navigation.navigate('ScoreScreen');
                      //   }
                      //   if (activity.name === 'Transfer') {
                      //     navigation.navigate('transfer');
                      //   }
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        width: responsiveScale(8),
                        height: responsiveScale(8),
                      }}
                      source={item.icon}
                    />
                  </Pressable>
                </View>
                <Text
                  style={{
                    marginTop: responsiveScale(5),
                    fontSize: responsiveFont(12),
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{padding: responsiveScale(10)}}>
          <Text
            style={{
              color: themeColor.secondaryText,
              fontSize: responsiveFont(18),
              fontWeight: 'bold',
            }}>
            Recent
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={RecentTransactions}
            renderItem={({item, index}) => (
              <View
                style={{
                  paddingVertical: responsiveScale(10),
                  paddingHorizontal: responsiveScale(0),
                  backgroundColor: 'white',
                  marginTop: responsiveScale(10),
                  alignItems: 'center',
                  marginLeft: width * 0.02,
                  width: width * 0.31,
                  borderRadius: responsiveScale(5),
                }}>
                <View style={{alignItems: 'center'}}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('receipt', {item});
                    }}
                    style={{width: '20%'}}>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: responsiveScale(20),
                        height: responsiveScale(20),
                        borderRadius: responsiveScale(5),
                      }}
                      source={item.image}
                    />
                  </Pressable>
                </View>
                <Text
                  style={{
                    fontSize: responsiveFont(13),
                    color: themeColor.secondaryText,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: responsiveScale(5),
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFont(12),
                    color: themeColor.bluishGrey,
                  }}>
                  {item.phone}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{padding: responsiveScale(10), backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: responsiveFont(18),
              color: themeColor.secondaryText,
              fontWeight: 'bold',
            }}>
            All contacts
          </Text>
          <View
            style={{
              backgroundColor: themeColor.backgroundColor,
              marginVertical: responsiveScale(5),
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: responsiveScale(5),
              paddingVertical:
                Platform.OS === 'ios' ? responsiveScale(5) : responsiveScale(0),
              borderRadius: responsiveScale(5),
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: responsiveScale(7),
                height: responsiveScale(7),
                marginRight: responsiveScale(3),
              }}
              source={require('../shared/images/loupe.png')}
            />
            <TextInput
              style={{color: themeColor.secondaryTextLight}}
              onChangeText={handleSearchContacts}
              placeholder="Search name or number."
              placeholderTextColor={themeColor.secondaryTextLight}
            />
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={
              filteredContacts === undefined
                ? RecentTransactions
                : filteredContacts
            }
            renderItem={({item, index}) => (
              <>
                <View
                  style={{
                    paddingVertical: responsiveScale(0),
                    paddingHorizontal: responsiveScale(0),
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    marginTop: responsiveScale(8),
                    alignItems: 'center',
                    borderRadius: responsiveScale(5),
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
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
                  <View style={{width: '60%'}}>
                    <Text
                      style={{
                        fontSize: responsiveFont(13),
                        color: themeColor.secondaryText,
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFont(12),
                        color: themeColor.bluishGrey,
                        marginTop: responsiveScale(2),
                      }}>
                      {item.phone}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: themeColor.bluishGrey,
                      borderRadius: responsiveScale(2),
                      width: '20%',
                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFont(12),
                        textAlign: 'center',
                        paddingVertical: responsiveScale(2),
                        color: 'white',
                      }}>
                      Invite
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: responsiveScale(0.2),
                    marginTop: responsiveScale(8),
                    borderColor: themeColor.darkGrey,
                    width: '100%',
                  }}
                />
              </>
            )}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {},
});
