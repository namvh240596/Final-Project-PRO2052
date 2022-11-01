import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../../../components/header';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import IMAGES from '../../../assets/images';
import ItemProfile from './components/ItemProfile';
import AppIcon from '../../../assets/icons';

const Profile = () => {
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
          <Text style={styles.textName}>{'Lam Trường'}</Text>
        </View>
        <View style={styles.viewItem}>
          <ItemProfile
            title={'Email'}
            icon={AppIcon.IconMailBlue}
            description={'lamtruong@gmail.com'}
          />
          <ItemProfile
            title={'Phone'}
            icon={AppIcon.IconPhone}
            description={'0328 37 48 10'}
          />
          <ItemProfile
            title={'Đổi mật khẩu'}
            icon={AppIcon.IconLockBlue}
            description={'*****'}
          />
          <ItemProfile title={'Đăng xuất'} disabled={false} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
