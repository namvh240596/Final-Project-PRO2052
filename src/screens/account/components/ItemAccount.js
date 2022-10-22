import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {scale, verticalScale} from '../../../utils/scale';
import {AppTheme} from '../../../config/AppTheme';

const ItemAccount = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgXml xml={icon} width={scale(24)} height={scale(24)} />
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemAccount;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
    marginLeft: scale(16),
  },
  container: {
    flexDirection: 'row',
    paddingVertical: verticalScale(12),
    alignItems: 'center',
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
