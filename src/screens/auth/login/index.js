import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../../assets/icons';
import {scale, verticalScale} from '../../../utils/scale';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/customButton';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <SvgXml
          xml={AppIcon.IconLogo}
          width={scale(104)}
          height={verticalScale(104)}
          style={styles.logo}
        />
        <Text style={styles.textWelcome}>Welcome to High Tech</Text>
        <Text style={styles.text}>Đăng nhập để tiếp</Text>
        <CustomTextInput
          leftIcon={AppIcon.IconMailGrey}
          textPlaceHolder={'Số điện thoại'}
          containerTextInputStyle={{marginTop: verticalScale(28)}}
        />
        <CustomTextInput
          leftIcon={AppIcon.IconLockGrey}
          textPlaceHolder={'Mật khẩu'}
          containerTextInputStyle={{marginTop: verticalScale(18)}}
          secureTextEntry
        />
        <CustomButton
          title={'Đăng nhập'}
          containerStyles={styles.containerBtn}
        />
        <View style={styles.containerOr}>
          <View style={styles.viewOr}></View>
          <Text style={styles.textOR}>OR</Text>
          <View style={styles.viewOr}></View>
        </View>
        <CustomButton
          title={'Đăng nhập với Google'}
          containerStyles={styles.containerBtnGG}
          leftIcon={AppIcon.IconGG}
          textStyles={styles.textBtn}
        />
        <CustomButton
          title={'Đăng nhập với Facebook'}
          containerStyles={styles.containerBtnFB}
          leftIcon={AppIcon.IconFB}
          textStyles={styles.textBtn}
        />
        <Text style={styles.text}>
          Bạn chưa có tài khoản?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.textBlue}>
            Đăng kí
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
