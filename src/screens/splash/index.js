import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {AppTheme} from '../../config/AppTheme';
import IMAGES from '../../assets/images';
import {scale} from '../../utils/scale';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProductsRequest} from '../../redux/products/action';
import {
  getListCategoriesRequest,
  getListGearRequest,
} from '../../redux/categories/action';
import {getListCategoriesSelector} from '../../redux/categories/selector';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const listCategories = useSelector(getListCategoriesSelector);
  useEffect(() => {
    dispatch(getAllProductsRequest());
    dispatch(getListCategoriesRequest());
  }, []);
  useEffect(() => {
    let timer;
    const directionalNavigation = async () => {
      timer = setTimeout(() => {
        navigation.replace('MainNavigation');
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
