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

const ProductDetail = props => {
  // const id = props.route.params;
  const {
    id,
    images,
    isFavorite,
    name,
    rating,
    price,
    currentPrice,
    description,
    review,
  } = product;
  const [star, setStar] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let index = 0; index < rating; index++) {
      arr.push({id: index});
    }
    setStar(arr);
  }, [rating]);
  const RenderItem = ({item}) => {
    return <CustomProduct image={item.images} name={item.name} />;
  };
  return (
    <View style={styles.container}>
      <Header title={name} iconBack />
      <ScrollView style={styles.body}>
        <Image
          source={{uri: images[0]}}
          style={styles.img}
          resizeMode="contain"
        />
        <View style={styles.viewName}>
          <Text numberOfLines={3} style={styles.textName}>
            {name}
          </Text>
          <SvgXml
            xml={isFavorite ? AppIcon.IconHeartRed : AppIcon.IconHeart}
            width={scale(24)}
            height={scale(24)}
          />
        </View>
        <View style={styles.viewStar}>
          {star.map(item => {
            return (
              <SvgXml
                key={item.id}
                xml={AppIcon.IconStar}
                width={scale(14)}
                height={scale(14)}
                style={styles.iconStar}
              />
            );
          })}
        </View>
        <View style={styles.viewPrice}>
          <Text style={styles.textPrice}>$ {currentPrice}</Text>
          <Text style={styles.textLastPrice}>$ {price}</Text>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.text}>Lựa chọn</Text>
          <Text style={styles.textMore}>{`Xem thêm >`} </Text>
        </View>
        <View style={styles.viewSelectMore}>
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={styles.imgChooseMore}
                resizeMode="cover"
                fadeDuration={300}
              />
            );
          })}
        </View>
        <View style={styles.viewDescription}>
          <Text>- Chip đồ họa: NVIDIA GeForce GTX 1650</Text>
          <Text>- Bộ nhớ: 4GB GDDR5 ( 128-bit )</Text>
          <Text>
            - GPU clock OC Mode - GPU Boost Clock : 1695 MHz , GPU Base Clock :
            1485 MHz Gaming Mode (Default) - GPU Boost Clock : 1665 MHz , GPU
            Base Clock : 1485 MHz
          </Text>
        </View>
        <View style={styles.viewReview}>
          <View style={styles.boxStar}>
            <Text style={styles.text}>Đánh giá sản phẩm</Text>
            <View style={styles.boxMiniStar}>
              {star.map(item => {
                return (
                  <SvgXml
                    key={item.id}
                    xml={AppIcon.IconStar}
                    width={scale(14)}
                    height={scale(14)}
                    style={styles.iconStar}
                  />
                );
              })}
              <Text>
                4.9/5 <Text>`(1k đánh giá)`</Text>
              </Text>
            </View>
          </View>
          <Pressable onPress={() => console.log('xem tat ca')}>
            <Text style={styles.textSeeMore}>Xem tất cả &gt;</Text>
          </Pressable>
        </View>
        <View style={styles.viewComment}>
          <ItemReview />
        </View>
        <View style={styles.viewAlso}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <CustomProduct
              name={name}
              firstPrice={price}
              lastPrice={currentPrice}
              sale={12}
            />
            <CustomProduct
              name={name}
              firstPrice={price}
              lastPrice={currentPrice}
              sale={12}
            />
            <CustomProduct
              name={name}
              firstPrice={price}
              lastPrice={currentPrice}
              sale={12}
            />
            <CustomProduct
              name={name}
              firstPrice={price}
              lastPrice={currentPrice}
              sale={12}
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <CustomButton
          title={'Mua ngay'}
          containerStyles={styles.button}
          textStyles={styles.textButton}
        />
        <CustomButton
          title={'Thêm vào giỏ hàng'}
          containerStyles={styles.button}
          textStyles={styles.textButton}
        />
      </View>
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
