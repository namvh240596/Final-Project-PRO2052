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
import {DATA_CATEGORIES} from '../../services/fakeApi/fakeAPI';

const Home = () => {
  const onMore = useCallback(title => {
    switch (title) {
      case 'category':
        console.log('onpress category');
        break;

      default:
        break;
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header title="Home" />
      <View style={styles.body}>
        <CustomTextInput
          leftIcon={AppIcon.IconSearch}
          textPlaceHolder={'Tim kiem san pham'}
          containerTextInputStyle={styles.margins}
        />
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
            return <ItemCategories key={item.id} title={item.title} />;
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
