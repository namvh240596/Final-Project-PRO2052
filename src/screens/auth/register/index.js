import {View, Text, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import AppIcon from '../../../assets/icons';
import {scale, verticalScale} from '../../../utils/scale';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {signUpRequest} from '../../../redux/auth/action';
import {SvgXml} from 'react-native-svg';
import {validateRegisterSchema} from '../../../utils/schema';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/customButton';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
    fullname: '',
    phone: '',
    confirmPassword: '',
  };
  const onSignUp = useCallback(
    values => {
      dispatch(
        signUpRequest(
          {
            email: values.email,
            password: values.password,
            fullname: values.fullname,
            phone: values.phone,
          },
          () => navigation.navigate('Login'),
        ),
      );
    },
    [dispatch],
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <SvgXml
          xml={AppIcon.IconLogo}
          width={scale(104)}
          height={verticalScale(104)}
          style={styles.logo}
        />
        <Text style={styles.textWelcome}>Let's Get Started</Text>
        <Text style={styles.text}>Tạo tài khoản mới</Text>
        <Formik
          initialValues={initialValues}
          validateOnChange={true}
          onSubmit={onSignUp}
          validationSchema={validateRegisterSchema}>
          {({errors, values, setFieldValue, handleSubmit}) => {
            return (
              <>
                <CustomTextInput
                  value={values.fullname}
                  leftIcon={AppIcon.IconAccountGrey}
                  textPlaceHolder={'Họ tên'}
                  containerTextInputStyle={{marginTop: verticalScale(12)}}
                  textErrors={errors.fullname}
                  onChangeText={text => setFieldValue('fullname', text)}
                />
                <CustomTextInput
                  value={values.phone}
                  leftIcon={AppIcon.IconPhone}
                  textPlaceHolder={'Số điện thoại'}
                  containerTextInputStyle={{marginTop: verticalScale(12)}}
                  textErrors={errors.phone}
                  onChangeText={text => setFieldValue('phone', text)}
                />
                <CustomTextInput
                  value={values.email}
                  leftIcon={AppIcon.IconMailGrey}
                  textPlaceHolder={'Email'}
                  containerTextInputStyle={{marginTop: verticalScale(12)}}
                  textErrors={errors.email}
                  onChangeText={text => setFieldValue('email', text)}
                />
                <CustomTextInput
                  value={values.password}
                  leftIcon={AppIcon.IconLockGrey}
                  textPlaceHolder={'Mật khẩu'}
                  containerTextInputStyle={{marginTop: verticalScale(12)}}
                  secureTextEntry
                  textErrors={errors.password}
                  onChangeText={text => setFieldValue('password', text)}
                />
                <CustomTextInput
                  value={values.confirmPassword}
                  leftIcon={AppIcon.IconLockGrey}
                  textPlaceHolder={'Xác nhận Mật khẩu'}
                  containerTextInputStyle={{marginTop: verticalScale(12)}}
                  secureTextEntry
                  textErrors={errors.confirmPassword}
                  onChangeText={text => setFieldValue('confirmPassword', text)}
                />
                <CustomButton
                  title={'Đăng kí'}
                  containerStyles={styles.containerBtn}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
        <Text style={styles.text}>
          Bạn đã có tài khoản?
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.textBlue}>
            Đăng Nhập
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
