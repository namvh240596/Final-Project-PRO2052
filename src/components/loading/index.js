import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {getChangeLoading} from '../../redux/loading/selector';
import {scale, verticalScale} from '../../utils/scale';
import {AppTheme} from '../../config/AppTheme';
import IMAGES from '../../assets/images';

const MyLoading = () => {

  return (
    <View style={styles.containerLoading}>
      <View style={styles.loadingIndicator}>
        <Lottie
          source={IMAGES.ANIMATION}
          autoPlay
          loop
          style={styles.loadingStyle}
        />
      </View>
    </View>
  );
};

export default MyLoading;

const styles = StyleSheet.create({
  containerLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 10,
    marginTop: verticalScale(40),
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: AppTheme.Colors.White,
  },

  loadingStyle: {
    width: scale(200),
    height: verticalScale(200),
    alignSelf: 'center',
    marginBottom: verticalScale(40),
  },
});
