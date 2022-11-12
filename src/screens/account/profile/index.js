import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../../components/header';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import IMAGES from '../../../assets/images';
import ItemProfile from './components/ItemProfile';
import AppIcon from '../../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequest} from '../../../redux/auth/action';
import {useNavigation} from '@react-navigation/native';
import {getUserSelector} from '../../../redux/auth/selector';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(getUserSelector);
  const onLogout = useCallback(() => {
    dispatch(logoutRequest(() => navigation.navigate('SplashScreen')));
  }, []);
  const onChangeEmail = useCallback(() => {}, []);
  const onChangePhone = useCallback(() => {}, []);
  const onChangePassword = useCallback(() => {}, []);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Header title={'Tài khoản'} iconBack />
      <View style={styles.body}>
        <ImageBackground
          source={IMAGES.BACKGROUND}
          style={{width: '100%', height: 150}}
        />
        <View style={styles.viewAvatar}>
          <Image source={{uri: avatar}} style={styles.img} />
          <Text style={styles.textName}>{user.fullname}</Text>
        </View>
        <View style={styles.viewItem}>
          <ItemProfile
            title={'Email'}
            icon={AppIcon.IconMailBlue}
            description={user.email}
            onPress={onChangeEmail}
          />
          <ItemProfile
            title={'Phone'}
            icon={AppIcon.IconPhone}
            description={user.phone}
            onPress={onChangePhone}
          />
          <ItemProfile
            title={'Đổi mật khẩu'}
            icon={AppIcon.IconLockBlue}
            description={'*****'}
            onPress={onChangePassword}
          />
          <ItemProfile title={'Đăng xuất'} onPress={onLogout} />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.touch}>
            <TouchableOpacity>
              <Text>asd</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bodyModal}>
            <Text>aa</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bodyModal: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
    elevation: 2,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    borderTopWidth: 2,
  },
  touch: {
    flex: 1,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0,0.5)',
    paddingHorizontal: scale(10),
  },
  viewItem: {
    width: '100%',
  },
  textName: {
    fontFamily: AppTheme.Fonts.Bold,
    fontWeight: '700',
    color: AppTheme.Colors.Dark,
    fontSize: AppTheme.FontSize.Large,
  },
  viewAvatar: {
    width: '100%',
    alignItems: 'center',
    top: verticalScale(-50),
  },
  img: {
    width: scale(90),
    height: scale(90),
    borderRadius: 50,
    marginBottom: verticalScale(20),
  },
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
});

const avatar =
  'https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/84471330_1093626190969633_1500260461931659264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JXaCbpU1aF0AX-MmTzS&tn=qnNxUkFn7Fat7Deh&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDs54mIlT5FDYT4IulE2IZZkGoMhXEJWCw5lOItiLywfw&oe=6385AC81';
