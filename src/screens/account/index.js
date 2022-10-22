import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {styles} from './styles';
import {DATA_ACCOUNT} from '../../services/fakeApi/fakeAPI';
import ItemAccount from './components/ItemAccount';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  const onGo = value => {
    switch (value) {
      case 'Tài khoản':
        navigation.navigate('Profile');
        break;
      case 'Đơn hàng':
        navigation.navigate('MyOrder');
        break;
      case 'Địa chỉ':
        navigation.navigate('MyAddress');
        break;
      case 'Liên kết':
        navigation.navigate('Payment');
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Account" />
      <View style={styles.body}>
        {DATA_ACCOUNT.map(item => {
          return (
            <ItemAccount
              onPress={() => onGo(item.title)}
              icon={item.icon}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Account;
