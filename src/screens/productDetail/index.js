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
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false);
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
        </View>

        <View style={styles.viewPrice}>
          <View>
            <Text style={styles.textPrice}>{currentPrice} VND</Text>
            <View style={styles.fdl}>
              <Text style={styles.textLastPrice}>{price} VND </Text>
              <Text style={styles.textDiscount}> -15%</Text>
            </View>
          </View>

          <SvgXml
            xml={isFavorite ? AppIcon.IconHeartRed : AppIcon.IconHeart}
            width={scale(24)}
            height={scale(24)}
          />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.text}>Khuyến mãi</Text>
        </View>
        <View style={styles.viewDiscount}>
          <Text style={styles.textPromo}>
            - Trả góp 6 tháng lãi suất 0% với đơn hàng &gt; 3tr
          </Text>
          <Text style={styles.textPromo}>
            - Nhập mã PV100 giảm thêm 5% tối đa 100.000đ khi thanh toán qua
            VNPAY-QR.
          </Text>
          <Text style={styles.textPromo}>
            - Nhập mã PV1000 giảm thêm 1.000.000đ khi thanh toán qua VNPAY-QR.
          </Text>
        </View>
        <Text style={styles.textPolicy}>Chính sách bán hàng</Text>
        <View style={styles.ViewPolicy}>
          <SvgXml xml={AppIcon.IconShip} width={scale(32)} height={scale(32)} />
          <Text style={styles.textPromo}>
            Miễn phí giao hàng cho đơn hàng từ 800K
          </Text>
        </View>
        <View style={styles.ViewPolicy}>
          <SvgXml
            xml={AppIcon.IconGenuine}
            width={scale(32)}
            height={scale(32)}
          />
          <Text style={styles.textPromo}>Cam kết hàng chính hãng 100%</Text>
        </View>
        <View style={styles.ViewPolicy}>
          <SvgXml
            xml={AppIcon.IconChange}
            width={scale(32)}
            height={scale(32)}
          />
          <Text style={styles.textPromo}>Đổi trả trong vòng 10 ngày</Text>
        </View>
        <Text style={styles.textPolicy}>Chi tiết sản phẩm</Text>
        <View style={styles.viewDescription}>
          <Text>- Chip đồ họa: NVIDIA GeForce GTX 1650</Text>
          <Text>- Bộ nhớ: 4GB GDDR5 ( 128-bit )</Text>
          <Text>
            - GPU clock OC Mode - GPU Boost Clock : 1695 MHz , GPU Base Clock :
            1485 MHz Gaming Mode (Default) - GPU Boost Clock : 1665 MHz , GPU
            Base Clock : 1485 MHz
          </Text>
        </View>
        <Text style={styles.textTitle}>Sản phẩm khác</Text>
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
