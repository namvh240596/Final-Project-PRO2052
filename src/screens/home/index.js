import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef, useState, useEffect, useCallback} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import CustomProduct from '../../components/customProduct';
import {AppTheme} from '../../config/AppTheme';
import IMAGES from '../../assets/images';
import {scale} from '../../utils/scale';
import ItemCategories from './components/ItemCategories';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllProductsByTypeRequest,
  getAllProductsRequest,
} from '../../redux/products/action';
import {getProductsSelector} from '../../redux/products/selector';
import {formatMoney} from '../../helpers/formatMoney';
import PlaceholderProduct from '../../components/placeholderProduct';
import PlaceholderListCategories from '../../components/placeholderListCategories';
import PlaceholderProductOnHome from '../../components/placeholderProductOnHome';
import {getListCategoriesSelector} from '../../redux/categories/selector';
import {
  getListCategoriesRequest,
  getListGearRequest,
} from '../../redux/categories/action';
import {getListBannerRequest} from '../../redux/banner/action';
import {getListBannerSelector} from '../../redux/banner/selector';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image';
import {getToken} from '../../helpers/tokenHelper';
import {useNavigation} from '@react-navigation/native';
import withLoading from '../../HOC/withLoading';
import {GET_ALL_CATEGORIES_BY_TYPE_REQUEST} from '../../redux/products/actionType';
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
    return navigation.navigate('ProductDetail', {productId: id});
  };
  useEffect(() => {
    dispatch(getAllProductsRequest());
    dispatch(getListCategoriesRequest());
  }, [dispatch]);
  const listProduct = useSelector(getProductsSelector);
  const listCategories = useSelector(getListCategoriesSelector);
  const listBanner = useSelector(getListBannerSelector);
  const onListProductByCategories = useCallback(
    (_id, type) => {
      dispatch(
        getAllProductsByTypeRequest(type, () =>
          navigation.navigate('ListProduct', {type: type}),
        ),
      );
    },
    [dispatch],
  );

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
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
          <Pressable onPress={() => onMore('category')}></Pressable>
        </View>
        {listCategories.length > 0 ? (
          <ScrollView
            style={styles.containerCategories}
            horizontal={true}
            contentContainerStyle={{paddingHorizontal: scale(16)}}
            showsHorizontalScrollIndicator={false}>
            {listCategories.map(item => {
              return (
                <ItemCategories
                  onPress={onListProductByCategories}
                  key={item?._id}
                  title={item?.title}
                  icon={item?.icon}
                  type={item?.type}
                  _id={item?._id}
                />
              );
            })}
          </ScrollView>
        ) : (
          <PlaceholderListCategories />
        )}
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Flash Sale</Text>
          <Pressable onPress={() => onMore('category')}>
            <Text style={styles.textMore}>Xem Thêm</Text>
          </Pressable>
        </View>
        {listProduct.length > 0 && (
          <ScrollView
            style={styles.containerCategories}
            horizontal={true}
            contentContainerStyle={{paddingLeft: scale(16)}}
            showsHorizontalScrollIndicator={false}>
            {listProduct.map(item => {
              return (
                <CustomProduct
                  key={item?._id}
                  title={item?.title}
                  image={item?.images[0]}
                  costPrice={item?.costPrice}
                  salePrice={item?.salePrice}
                  salePercent={item?.salePercent}
                  onGoDetail={() => onDetail(item._id)}
                />
              );
            })}
          </ScrollView>
        )}
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
          {listProduct.map(item => {
            return (
              <CustomProduct
                key={item?._id}
                title={item?.title}
                image={item?.images[0]}
                costPrice={item?.costPrice}
                salePrice={item?.salePrice}
                salePercent={item?.salePercent}
                onGoDetail={() => onDetail(item?._id)}
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
          {listProduct.map(item => {
            return (
              <CustomProduct
                key={item._id}
                title={item.title}
                image={item.images[0]}
                costPrice={item.costPrice}
                salePrice={item.salePrice}
                salePercent={item.salePercent}
                onGoDetail={() => onDetail(item._id)}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
