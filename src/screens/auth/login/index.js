import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../../assets/icons';
import {scale, verticalScale} from '../../../utils/scale';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/customButton';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/auth/action';
import {Formik} from 'formik';
import {validateLoginSchema} from '../../../utils/schema';
import {loginRequestApi} from '../../../services/api/auth';
import Lottie from 'lottie-react-native';
import withLoading from '../../../HOC/withLoading';
import { LOGIN_REQUEST } from '../../../redux/auth/actionType';
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialValues = {email: '', password: ''};
  const [isLoading, setIsLoading] = useState(false);
  const onLogin = useCallback(
    values => {
      dispatch(loginRequest({email: values.email, password: values.password}));
    },
    [dispatch],
  );
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
        <Text style={styles.text}>Đăng nhập để tiếp tục sử dụng</Text>
        <Formik
          initialValues={initialValues}
          validateOnChange={true}
          onSubmit={onLogin}
          validationSchema={validateLoginSchema}>
          {({errors, values, setFieldValue, handleSubmit}) => {
            return (
              <>
                <CustomTextInput
                  value={values.email}
                  leftIcon={AppIcon.IconMailGrey}
                  textPlaceHolder={'Email'}
                  containerTextInputStyle={{marginTop: verticalScale(28)}}
                  textErrors={errors.email}
                  onChangeText={text => setFieldValue('email', text)}
                />
                <CustomTextInput
                  value={values.password}
                  leftIcon={AppIcon.IconLockGrey}
                  textPlaceHolder={'Mật khẩu'}
                  containerTextInputStyle={{marginTop: verticalScale(18)}}
                  secureTextEntry
                  textErrors={errors.password}
                  onChangeText={text => setFieldValue('password', text)}
                />
                <CustomButton
                  title={'Đăng nhập'}
                  containerStyles={styles.containerBtn}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>

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
        <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.touch}>
          <Text style={styles.textForgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login
