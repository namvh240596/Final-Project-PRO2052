import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';
import IMAGES from '../../assets/images';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';

const ProducOnCart = ({heart}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={IMAGES.Product1} resizeMode="cover" />
        <View style={styles.main}>
          <View style={styles.viewName}>
            <Text numberOfLines={3} style={styles.textName}>
              nam asdasdas enam asdasdas e nam asdasdas e nam asdasdas e
            </Text>
            <View style={styles.viewIcon}>
              <SvgXml
                xml={heart ? AppIcon.IconExploreBlue : AppIcon.IconExploreBlue}
                width={scale(18)}
                height={scale(18)}
                onPress={() => {}}
              />
              <SvgXml
                xml={AppIcon.IconExploreBlue}
                width={scale(18)}
                style={{marginLeft: scale(16)}}
                height={scale(18)}
              />
            </View>
          </View>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>8999</Text>
            <View style={[styles.viewPlus]}>
              <Pressable style={styles.button}>
                <Text>-</Text>
              </Pressable>
              <Text style={styles.textPlus}>9</Text>
              <Pressable style={styles.button}>
                <Text>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProducOnCart;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPlus: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: AppTheme.Colors.Light,
  },
  viewPlus: {
    width: scale(104),
    height: verticalScale(24),
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-around',
    borderColor: AppTheme.Colors.Light,
    borderRadius: 4,
  },
  viewIcon: {
    flexDirection: 'row',
  },
  textPrice: {
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  textName: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
    maxWidth: '70%',
  },
  viewPrice: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  viewName: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  main: {
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: scale(12),
  },
  body: {
    flexDirection: 'row',
  },
  img: {
    width: scale(72),
    height: scale(72),
    borderRadius: 5,
  },
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: AppTheme.Colors.Light,
    padding: scale(12),
    borderRadius: 5,
  },
});
