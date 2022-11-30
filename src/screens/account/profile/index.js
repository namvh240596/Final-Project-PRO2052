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
import {getUserInfoRequest, logoutRequest} from '../../../redux/auth/action';
import {useNavigation} from '@react-navigation/native';
import {getUserSelector} from '../../../redux/auth/selector';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {defaultImg} from '..';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/customButton';
import {updateProfileApi} from '../../../services/api/auth';
import MyLoading from '../../../components/loading';
import {Formik} from 'formik';
import {validateUpdateSchema} from '../../../utils/schema';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(getUserSelector);
  const [loading, setLoading] = useState(false);
  const onUpdate = _value => {
    setLoading(true);
    updateProfileApi({
      fullname: _value.fullname,
      email: _value.email,
      phone: _value.phone,
    })
      .then(res => {
        setLoading(false);
        console.log('aa ', res);
        dispatch(getUserInfoRequest());
      })
      .catch(error => {
        setLoading(false);
        console.log('error ', error);
      });
  };
  const initialValue = {
    fullname: user.fullname,
    email: user.email,
    phone: user.phone,
  };
  return (
    <View style={styles.container}>
      <Header title={'Tài khoản'} iconBack />
      <View style={styles.body}>
        <ImageBackground
          source={IMAGES.BACKGROUND}
          style={{width: '100%', height: verticalScale(150)}}
        />
        <View style={{top: verticalScale(-100)}}>
          <View style={styles.viewAvatar}>
            <Image source={{uri: defaultImg}} style={styles.img} />
            <TouchableOpacity style={styles.touchChange}>
              <Text style={styles.textChange}>Đổi avatar</Text>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={initialValue}
            onSubmit={onUpdate}
            validateOnChange={true}
            validationSchema={validateUpdateSchema}>
            {({errors, setFieldValue, handleSubmit, values}) => {
              return (
                <>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewItem}>
                      <Text style={styles.textName}>Họ và tên</Text>
                      <CustomTextInput
                        value={values.fullname}
                        containerTextInputStyle={styles.containerTextInputStyle}
                        onChangeText={text => setFieldValue('fullname', text)}
                        textErrors={errors.fullname}
                      />
                    </View>
                  </View>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewItem}>
                      <Text style={styles.textName}>Email</Text>
                      <CustomTextInput
                        value={values.email}
                        containerTextInputStyle={styles.containerTextInputStyle}
                        onChangeText={text => setFieldValue('email', text)}
                        textErrors={errors.email}
                      />
                    </View>
                  </View>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewItem}>
                      <Text style={styles.textName}>Số điện thoại</Text>
                      <CustomTextInput
                        value={values.phone}
                        containerTextInputStyle={styles.containerTextInputStyle}
                        onChangeText={text => setFieldValue('phone', text)}
                        textErrors={errors.phone}
                      />
                    </View>
                  </View>
                  <CustomButton
                    title={'Cập nhật'}
                    containerStyles={styles.containerButtonStyle}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </View>
      {loading && <MyLoading />}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerButtonStyle: {
    width: scale(320),
    backgroundColor: AppTheme.Colors.Dark,
    borderRadius: scale(20),
    height: verticalScale(45),
    alignSelf: 'center',
    marginTop: verticalScale(30),
  },
  viewItem: {
    marginTop: verticalScale(10),
  },
  containerTextInputStyle: {
    borderRadius: scale(1),
    borderColor: '#caf',
  },
  viewInfo: {
    // marginTop: verticalScale(20),
    paddingHorizontal: scale(16),
  },
  touchChange: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
  },
  textChange: {
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Black,
    fontSize: AppTheme.FontSize.SmallX,
  },

  textName: {
    fontFamily: AppTheme.Fonts.Bold,
    fontWeight: '700',
    color: AppTheme.Colors.Dark,
    fontSize: AppTheme.FontSize.Large,
    marginLeft: scale(6),
    marginBottom: verticalScale(10),
  },
  viewAvatar: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    width: scale(150),
    height: scale(150),
    borderRadius: 80,
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
