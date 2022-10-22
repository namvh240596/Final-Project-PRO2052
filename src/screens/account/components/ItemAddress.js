import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../../utils/scale';
import {AppTheme} from '../../../config/AppTheme';
import CustomButton from '../../../components/customButton';

const ItemAddress = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textName}>Nguyễn Lam Trường</Text>
      <Text>115A Tô Ký Phường Đông Hưng Thuận Quận 12 HCM</Text>
      <Text>0329374810</Text>
    </TouchableOpacity>
  );
};

export default ItemAddress;

const styles = StyleSheet.create({
  textName: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
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
