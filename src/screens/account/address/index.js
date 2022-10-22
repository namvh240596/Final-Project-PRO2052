import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import ItemAddress from '../components/ItemAddress';
import CustomButton from '../../../components/customButton';
import Header from '../../../components/header';

const MyAddress = () => {
  return (
    <View style={styles.container}>
      <Header title={'Địa chỉ'} iconBack />
      <View style={styles.body}>
        <ItemAddress />
        <ItemAddress />
        <ItemAddress />
        <CustomButton title={'Thêm địa chỉ'} />
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  body: {
    backgroundColor: AppTheme.Colors.SecondBackround,
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(20),
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
});
