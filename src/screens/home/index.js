import {View, Text, FlatList, Image, ScrollView, Pressable} from 'react-native';
import React, {useRef, useState, useEffect, useCallback} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import CustomButton from '../../components/customButton';
import CustomProduct from '../../components/customProduct';
import {AppTheme} from '../../config/AppTheme';
import IMAGES from '../../assets/images';
import {scale} from '../../utils/scale';
import ItemCategories from './components/ItemCategories';
import {DATA_CATEGORIES, DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import {SvgXml} from 'react-native-svg';
const Home = ({navigation}) => {
  const onMore = useCallback(title => {
    switch (title) {
      case 'category':
        console.log('onpress category');
        break;

      default:
        break;
    }
  }, []);
  const onDetail = id => {
    return navigation.navigate('ProductDetail', {id: id});
  };
  return (
    <ScrollView style={styles.container}>
      <Header title="Home" />
      <View style={styles.body}>
        <View style={styles.viewTextInput}>
          <CustomTextInput
            leftIcon={AppIcon.IconSearch}
            textPlaceHolder={'Tim kiem san pham'}
            containerTextInputStyle={styles.margins}
          />
          <SvgXml
            xml={AppIcon.IconHeartRed}
            width={scale(24)}
            height={scale(24)}
            style={styles.icon}
            onPress={() => navigation.navigate('Favorites')}
          />
          <SvgXml
            style={styles.icon}
            xml={AppIcon.IconBell}
            width={scale(24)}
            height={scale(24)}
            onPress={() => navigation.navigate('Notification')}
          />
        </View>

        <View style={styles.img}>
          <Image
            source={IMAGES.ProductMotion}
            resizeMode="cover"
            style={{
              width: '100%',
              height: scale(206),
              borderRadius: 5,
            }}
          />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Danh mục</Text>
          <Pressable onPress={() => onMore('category')}>
            <Text style={styles.textMore}>Xem Thêm</Text>
          </Pressable>
        </View>
        <ScrollView
          style={styles.containerCategories}
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: scale(16)}}
          showsHorizontalScrollIndicator={false}>
          {DATA_CATEGORIES.map(item => {
            return (
              <ItemCategories
                onPress={() => navigation.navigate('ListProduct')}
                key={item.id}
                title={item.title}
              />
            );
          })}
        </ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Flash Sale</Text>
          <Pressable onPress={() => onMore('category')}>
            <Text style={styles.textMore}>Xem Thêm</Text>
          </Pressable>
        </View>
        <ScrollView
          style={styles.containerCategories}
          horizontal={true}
          contentContainerStyle={{paddingLeft: scale(16)}}
          showsHorizontalScrollIndicator={false}>
          {DATA_PRODUCTS.map(item => {
            return (
              <CustomProduct
                key={item.id}
                name={item.name}
                image={item.image[1]}
                firstPrice={1000}
                lastPrice={899}
                sale={12}
                onGoDetail={() => onDetail(item.id)}
              />
            );
          })}
        </ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Mega Sale</Text>
          <Pressable onPress={() => onMore('category')}>
            <Text style={styles.textMore}>Xem Thêm</Text>
          </Pressable>
        </View>
        <ScrollView
          style={styles.containerCategories}
          horizontal={true}
          contentContainerStyle={{paddingLeft: scale(16)}}
          showsHorizontalScrollIndicator={false}>
          {DATA_PRODUCTS.map(item => {
            return (
              <CustomProduct
                key={item.id}
                name={item.name}
                image={item.image[1]}
                firstPrice={1000}
                lastPrice={899}
                sale={12}
                onGoDetail={() => onDetail(item.id)}
              />
            );
          })}
        </ScrollView>
        <View style={styles.viewTitle}>
          <Text style={[styles.textTitle, {color: AppTheme.Colors.Red}]}>
            Sản phẩm hot
          </Text>
        </View>
        <ScrollView
          style={styles.scrollContainerHotProduct}
          contentContainerStyle={styles.scrollViewHotProduct}>
          {DATA_PRODUCTS.map(item => {
            return (
              <CustomProduct
                key={item.id}
                name={item.name}
                image={item.image[1]}
                firstPrice={1000}
                lastPrice={899}
                sale={12}
                onGoDetail={() => onDetail(item.id)}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
