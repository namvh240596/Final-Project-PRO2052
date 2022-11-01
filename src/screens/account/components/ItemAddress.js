import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../../utils/scale';
import {AppTheme} from '../../../config/AppTheme';
import CustomButton from '../../../components/customButton';

const ItemAddress = ({onPress, name, address, phone}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textName}>Nguyễn Lam Trường</Text>
      <Text style={styles.text}>
        115A Tô Ký Phường Đông Hưng Thuận Quận 12 HCM
      </Text>
      <Text style={styles.textPhone}>0329374810</Text>
    </TouchableOpacity>
  );
};

export default ItemAddress;

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Regular,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Grey,
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
    borderWidth: 1,
    borderColor: AppTheme.Colors.Light,
    borderRadius: 5,
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    shadowOpacity: 0.5,
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(14),
    shadowRadius: 15,
  },
});
