import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import Header from '../../../components/header';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {validateEmailSchema} from '../../../utils/schema';
import { forgotPasswordApi } from '../../../services/api/auth';

const ForgotPassword = () => {
  const initialValues = {email: ''};
  const navigation = useNavigation();
  //   const [email, setEmail] = useState('');
  const onResendEmail = useCallback(values => {
    console.log('aaaaaaaaaaaaaa', values.email);
    forgotPasswordApi(values.email).then((res)=>{
        console.log('res -> ',res);
        console.log('message -> ', res.message);
    }).catch((e)=>{
        console.log('message -> ', res.message);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Header iconBack title={'Quên mật khẩu'} />
      <View style={styles.body}>
        <Text style={styles.textTitle}>Nhập địa chỉ email đã đăng kí</Text>
        <Formik
          initialValues={initialValues}
          validateOnChange={true}
          onSubmit={onResendEmail}
          validationSchema={validateEmailSchema}>
          {({errors, values, setFieldValue, handleSubmit}) => {
            return (
              <>
                <CustomTextInput
                  onChangeText={(text)=>setFieldValue('email', text)}
                  textPlaceHolder={'Email'}
                  textErrors={errors.email}
                />
                <Text
                  style={styles.textBack}
                  onPress={() => navigation.navigate('Login')}>
                  Quay về đăng nhập
                </Text>
                <CustomButton title={'Gửi'} onPress={handleSubmit} />
              </>
            );
          }}
        </Formik>

        <View style={styles.viewOr}>
          <Text style={styles.textLine} />
          <Text style={styles.textOR}>OR</Text>
          <Text style={styles.textLine} />
        </View>

        <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
        <CustomButton
          title={'Đăng kí'}
          onPress={() => navigation.navigate('Register')}
          containerStyles={styles.containerRegister}
          textStyles={styles.textRegister}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
