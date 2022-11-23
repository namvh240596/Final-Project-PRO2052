import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Header from '../../components/header';
import {styles} from './styles';
import {DATA_ACCOUNT} from '../../services/fakeApi/fakeAPI';
import ItemAccount from './components/ItemAccount';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getUserSelector} from '../../redux/auth/selector';
import CustomButton from '../../components/customButton';
import ItemProfile from './profile/components/ItemProfile';
import AppIcon from '../../assets/icons';
import {logoutRequest} from '../../redux/auth/action';

const Account = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(getUserSelector);
  const [visibled, setVisibled] = useState(false);
  const [email, setEmail] = useState(userInfo.email);
  const [fullname, setFullname] = useState(userInfo.fullname);
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
  const onUpdate = useCallback(() => {
    setVisibled(false);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(logoutRequest(() => navigation.navigate('SplashScreen')));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          defaultSource={{uri: defaultImg}}
          source={{uri: defaultImg}}
          style={styles.img}
        />
        <Text style={styles.textName}>{userInfo.fullname}</Text>
        <Text style={styles.textEmail}>{userInfo.email}</Text>
        <CustomButton
          title={'Chỉnh sửa thông tin'}
          onPress={() => setVisibled(true)}
          containerStyles={styles.buttonStyle}
        />
      </View>
      <View style={styles.body}>
        <ItemAccount
          icon={AppIcon.IconOrder}
          title="Đơn hàng"
          onPress={() => onGo('Đơn hàng')}
        />
        <ItemAccount icon={AppIcon.IconAddress} title="Địa chỉ" />
        <ItemAccount icon={AppIcon.IconNotification} title="Thông báo" />
        <ItemAccount icon={AppIcon.IconPayment} title="Liên kết thẻ" />
        <ItemAccount icon={AppIcon.IconHelp} title="Trợ giúp" />
        <ItemAccount
          icon={AppIcon.IconLogout}
          textStyle={{color: '#FF3D00'}}
          title="Đăng xuất"
          onPress={onLogout}
        />
      </View>
      <Modal transparent={true} animationType={'slide'} visible={visibled}>
        <View style={styles.containerModal}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => setVisibled(false)}
          />
          <View style={styles.centerView}>
            <View style={styles.viewTextInput}>
              <View style={styles.viewTop} />
              <Text style={[styles.textName, styles.textTitle]}>
                Thông tin cá nhân
              </Text>
              <TextInput
                defaultValue={userInfo.email}
                style={[styles.textInput, styles.textEmail]}
                onChangeText={text => setEmail(text)}
                textContentType="emailAddress"
              />
              <TextInput
                defaultValue={userInfo.fullname}
                style={[styles.textInput, styles.textEmail]}
                onChangeText={text => setEmail(text)}
                textContentType="name"
              />
            </View>
            <View style={styles.viewButton}>
              <CustomButton
                containerStyles={styles.buttonStyle}
                title={'Chỉnh sửa'}
                onPress={onUpdate}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;

const defaultImg =
  'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/Anh-avatar-dep-anh-dai-dien-FB-Tiktok-Zalo.jpg?ssl=1';
