import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {scale, verticalScale} from '../../utils/scale';
import CustomButton from '../../components/customButton';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductRequest} from '../../redux/products/action';
import {getProductSelector} from '../../redux/products/selector';
import {formatMoney} from '../../helpers/formatMoney';
import PlaceholderProduct from '../../components/placeholderProduct';
import {addOneProductToCartRequest} from '../../redux/cart/action';
import {
  changeFavoriteApi,
  getCheckFavoriteApi,
} from '../../services/api/products';

const ProductDetail = props => {
  const productId = props.route.params.productId;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const product = useSelector(getProductSelector);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getProductRequest(productId));
  }, [loading]);
  const onDetail = id => {
    dispatch(getProductRequest(id));
  };

  const onChangeFavorite = useCallback(() => {
    changeFavoriteApi({productId: productId, favorite: !product.favorite})
      .then(res => {
        setLoading(true);
        dispatch(getProductRequest(productId));
        res && setLoading(false);
      })
      .catch(error => console.log('onChangeFavorite -> ', error));
  }, [loading]);

  const addToCart = useCallback(productId => {
    dispatch(
      addOneProductToCartRequest({productId: productId, quantity: 1}, () =>
        navigation.navigate('Cart'),
      ),
    );
  }, []);
  return (
    <View style={styles.container}>
      <Header title={product?.title} iconBack />
      {product._id !== undefined ? (
        <ScrollView style={styles.body}>
          <Image
            source={{
              uri: product?.images[0].toString(),
            }}
            style={styles.img}
            resizeMode="contain"
          />
          <View style={styles.viewName}>
            <Text numberOfLines={3} style={styles.textName}>
              {product?.title}
            </Text>
            <TouchableOpacity onPress={onChangeFavorite}>
              <SvgXml
                xml={
                  product?.favorite ? AppIcon.IconHeartRed : AppIcon.IconHeart
                }
                width={scale(24)}
                height={scale(24)}
                style={{marginTop: verticalScale(5)}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewDescription}>
            {product?.description.map((item, index) => {
              return (
                <Text key={index} style={styles.text}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View style={styles.viewPrice}>
            <CustomButton
              title={'Thêm vào giỏ hàng'}
              containerStyles={styles.btnAddToCart}
              onPress={() => addToCart(product._id)}
            />
            <View style={{left: -scale(20)}}>
              <Text style={styles.textPrice}>
                {formatMoney(product?.salePrice)}
              </Text>
              <View style={styles.fdl}>
                <Text style={styles.textLastPrice}>
                  {formatMoney(product?.costPrice)}
                </Text>
                <Text style={styles.textDiscount}>{product?.salePercent}%</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewSpecifications}>
            <Text style={styles.textTitle}>Thông số kĩ thuật</Text>
            <View style={styles.viewContent}>
              {product?.specifications.map((item, index) => {
                return (
                  <View
                    style={{flexDirection: 'row', borderWidth: 0.5, flex: 1}}
                    key={index}>
                    <Text style={styles.textTitleSpecifications}>
                      {item?.title}
                    </Text>
                    <Text style={styles.textContentSpecifications}>
                      {item?.content}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={styles.textTitleSame}>Sản phẩm tương tự</Text>
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
                salePercent={product?.salePercent}
                onGoDetail={() => onDetail(product?._id)}
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
                onGoDetail={() => onDetail(product?._id)}
              />
              <CustomProduct
                title={product?.title}
                image={product?.images[0]}
                costPrice={product?.costPrice}
                salePrice={product?.salePrice}
                sale={product?.salePercent}
                onGoDetail={() => onDetail(product?._id)}
              />
            </ScrollView>
          </View>
        </ScrollView>
      ) : (
        <PlaceholderProduct />
      )}
    </View>
  );
};

export default ProductDetail;
