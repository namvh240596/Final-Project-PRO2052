import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {AppTheme} from '../../config/AppTheme';
import IMAGES from '../../assets/images';
import {scale} from '../../utils/scale';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    let timer;
    const directionalNavigation = async () => {
      //   const check = await AsyncStorage.getItem('checkOnboardingScreen');

      timer = setTimeout(() => {
        // if (check === null) {
        //   navigation.replace('Onboarding');
        // } else {
        navigation.replace('MainNavigation');
        // }
      }, 1000);
    };
    directionalNavigation();
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={IMAGES.Logo} resizeMode="cover" style={styles.img} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  img: {
    width: scale(72),
    height: scale(72),
  },
  container: {
    backgroundColor: AppTheme.Colors.Blue,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
