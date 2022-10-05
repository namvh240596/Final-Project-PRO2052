import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../../utils/scale';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../../assets/icons';
import {AppTheme} from '../../../config/AppTheme';

const ItemCategories = ({title, iconCategory}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewIcon}>
        <SvgXml
          xml={iconCategory || AppIcon.IconCartBlue}
          width={scale(24)}
          height={scale(24)}
        />
      </View>
      <Text numberOfLines={2} style={styles.textTitle}>
        {title}
      </Text>
    </View>
  );
};

export default ItemCategories;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: AppTheme.FontSize.Medium,
    color: AppTheme.Colors.Black,
    fontFamily: AppTheme.Fonts.Medium,
    textAlign: 'center',
  },
  viewIcon: {
    width: scale(80),
    height: scale(80),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: AppTheme.Colors.Light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: scale(90),
    height: verticalScale(128),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
