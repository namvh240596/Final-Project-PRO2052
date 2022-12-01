import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../../utils/scale';
import {AppTheme} from '../../../config/AppTheme';
import CustomButton from '../../../components/customButton';

const ItemAddress = ({onPress, name, address, phone, isDefault}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isDefault
            ? AppTheme.Colors.Blue
            : AppTheme.Colors.White,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.textName}> {name}</Text>
      <Text style={styles.text}>Địa chỉ: {address}</Text>
      <Text style={styles.textPhone}>Số điện thoại: {phone}</Text>
    </TouchableOpacity>
  );
};

export default ItemAddress;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Regular,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Black,
    marginBottom: verticalScale(7),
  },
  textPhone: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
  textName: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
    marginBottom: verticalScale(16),
  },
  container: {
    paddingVertical: verticalScale(12),
    borderWidth: 0.5,
    borderColor: AppTheme.Colors.Dark,
    borderRadius: 5,
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(16),
    shadowRadius: 15,
  },
});
