import {View, Text, Image, FlatList, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {scale} from '../../utils/scale';
import CustomButton from '../../components/customButton';
import ItemReview from '../../components/itemReview';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductRequest} from '../../redux/products/action';
import {getProductSelector} from '../../redux/products/selector';
import {formatMoney} from '../../helpers/formatMoney';

const ProductDetail = props => {
  const id = props.route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductRequest(id));
  }, []);
  const product = useSelector(getProductSelector);
  const navigation = useNavigation();
  const onDetail = id => {
    return navigation.navigate('ProductDetail', {id: id});
  };
  return (
    <View style={styles.container}>
      <Header title={product?.title} iconBack />
      <ScrollView style={styles.body}>
        <Image
          source={{uri: product?.images[0].toString()}}
          style={styles.img}
          resizeMode="contain"
        />
        <View style={styles.viewName}>
          <Text numberOfLines={3} style={styles.textName}>
            {product?.title}
          </Text>
        </View>
        {product?.description.map((item, index) => {
          return (
            <Text key={index} style={styles.text}>
              {item}
            </Text>
          );
        })}
        <View style={styles.viewPrice}>
          <View>
            <Text style={styles.textPrice}>
              {formatMoney(product?.salePrice)}
            </Text>
            <View style={styles.fdl}>
              <Text style={styles.textLastPrice}>
                {formatMoney(product?.costPrice)}
              </Text>
              <Text style={styles.textDiscount}> {product?.salePercent}%</Text>
            </View>
          </View>

          <SvgXml
            xml={product?.__v === 1 ? AppIcon.IconHeartRed : AppIcon.IconHeart}
            width={scale(24)}
            height={scale(24)}
          />
        </View>

        <View style={styles.viewAlso}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <CustomProduct
              title={product?.title}
              image={product?.images[0]}
              costPrice={product?.costPrice}
              salePrice={product?.salePrice}
              sale={product?.salePercent}
            />
            <CustomProduct
              title={product?.title}
              image={product?.images[0]}
              costPrice={product?.costPrice}
              salePrice={product?.salePrice}
              salePercent={product?.salePercent}
              onGoDetail={() => onDetail(product?._id)}
            />
            <CustomProduct
              title={product?.title}
              image={product?.images[0]}
              costPrice={product?.costPrice}
              salePrice={product?.salePrice}
              sale={product?.salePercent}
            />
            <CustomProduct
              title={product?.title}
              image={product?.images[0]}
              costPrice={product?.costPrice}
              salePrice={product?.salePrice}
              sale={product?.salePercent}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
const product = {
  id: 1,
  images: [
    'https://product.hstatic.net/1000026716/product/asus_tuf_gaming_geforce_gtx_1660_super_oc_edition_6gb_gddr6_-_thumb_74f252ffec834364a83d0dada79c568c.jpg',
    'https://product.hstatic.net/1000026716/product/gearvn-asus-tuf-gaming-geforce-gtx-1660-super-oc-edition-6gb-gddr6-12_0ece8cc24de14255a4091cce3f5a8917.png',
  ],
  isFavorite: false,
  name: 'ASUS TUF Gaming GeForce GTX 1660 SUPER OC edition 6GB GDDR6',
  rating: 5,
  price: 999,
  currentPrice: 888,
  description: [{}],
  review: [{}],
};
