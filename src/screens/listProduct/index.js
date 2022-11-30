import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/header';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';
import {DATA_CATEGORIES, DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import ItemCategories from '../home/components/ItemCategories';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';

import RangeSlider from 'rn-range-slider';
import {getListCategoriesSelector} from '../../redux/categories/selector';
import {
  getProductByTypeSelector,
  getProductsSelector,
} from '../../redux/products/selector';
import IMAGES from '../../assets/images';
import {getAllProductsByTypeRequest} from '../../redux/products/action';
import {
  getChangeLoadingFailed,
  getChangeLoadingRequest,
} from '../../redux/loading/action';
import {getChangeLoading} from '../../redux/loading/selector';
import MyLoading from '../../components/loading';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import {SvgXml} from 'react-native-svg';
import ReactNativeModal from 'react-native-modal';
import {getListBrandRequest} from '../../redux/brand/action';
import {getListBrandSelector} from '../../redux/brand/selector';
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import RnRangeSlider from 'rn-range-slider';

const ListProduct = props => {
  const listCategories = useSelector(getListCategoriesSelector);
  const listProduct = useSelector(getProductsSelector);
  const listProductByType = useSelector(getProductByTypeSelector);
  const [typeCategory, setTypeCategory] = useState(props?.route.params.type);
  const dispatch = useDispatch();
  const loading = useSelector(getChangeLoading);
  const listBrand = useSelector(getListBrandSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataPrice, setDataPrice] = useState([]);
  useEffect(() => {
    console.log(typeCategory);
    dispatch(getListBrandRequest());
    if (typeCategory === -1) {
      dispatch(getAllProductsByTypeRequest(''));
      dispatch(getChangeLoadingRequest());
    } else {
      dispatch(getAllProductsByTypeRequest(typeCategory));
      dispatch(getChangeLoadingRequest());

    }
  }, []);

  const renderItem = ({item}) => {
    return (
      <CustomProduct
        key={item?._id}
        title={item?.title}
        image={item?.images[0]}
        costPrice={item?.costPrice}
        salePrice={item?.salePrice}
        salePercent={item?.salePercent}
        onGoDetail={() => onDetail(item._id)}
        containerStyle={styles.itemStyle}
      />
    );
  };
  const navigation = useNavigation();
  const onDetail = id => {
    return navigation.navigate('ProductDetail', {productId: id});
  };
  const changeCategory = useCallback(
    (_id, type) => {
      if (type !== -1) {
        dispatch(getChangeLoadingRequest());
        dispatch(getAllProductsByTypeRequest(type));
        setTypeCategory(type);
      } else {
        dispatch(getChangeLoadingRequest());
        dispatch(getAllProductsByTypeRequest(''));
        setTypeCategory(type);
      }
    },
    [dispatch],
  );
  return (
    <View style={styles.container}>
      <Header title={'Danh mục sản phẩm'} iconBack />

      <View style={styles.viewFillter}>
        <CustomTextInput
          leftIcon={AppIcon.IconSearch}
          textPlaceHolder={'Tìm kiếm'}
          containerTextInputStyle={styles.containerTextInputStyle}
        />
        <SvgXml
          xml={AppIcon.IconFilter}
          width={scale(24)}
          height={scale(24)}
          style={styles.icon}
          onPress={() => {
            console.log('aaa');
            setIsModalVisible(true);
          }}
        />
        <SvgXml
          xml={AppIcon.IconSortTopToBottom}
          width={scale(24)}
          height={scale(24)}
          style={styles.icon}
          onPress={() => {
            console.log('bbbb');
          }}
        />
      </View>
      <View style={styles.body}>
        <ScrollView
          style={styles.containerCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: scale(16),
          }}>
          <ItemCategories
            key={21}
            title={'Tất cả'}
            type={-1}
            onPress={changeCategory}
            _id={-1}
            containerStyle={typeCategory === -1 && styles.choosedCategory}
          />
          {listCategories.map(item => {
            return (
              <ItemCategories
                key={item?._id}
                title={item?.title}
                icon={item?.icon}
                type={item?.type}
                onPress={changeCategory}
                containerStyle={
                  typeCategory === item?.type && styles.choosedCategory
                }
              />
            );
          })}
        </ScrollView>

        <FlatList
          data={listProductByType}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
      {loading && <MyLoading />}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.textTitle}>Tìm kiếm theo: </Text>
          <View style={styles.viewFillterPrice}>
            <View style={styles.itemPrice}>
              <Text style={styles.textItem}>100,000đ</Text>
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.textItem}>100,000đ</Text>
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.textItem}>100,000đ</Text>
            </View>
          </View>
          <View style={styles.viewFillterBrand}>
            {listBrand.length > 0 && (
              <FlatList
                data={listBrand}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity style={styles.touchBrand} key={item._id}>
                      <Text style={styles.textItem}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={item => item._id}
                numColumns={3}
                columnWrapperStyle={styles.wrapperStyle}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  itemPrice: {
    borderWidth: 1,
    width: scale(100),
    height: verticalScale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  viewFillterPrice: {},
  textItem: {
    fontSize: AppTheme.FontSize.SmallX,
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Black,
  },
  wrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
  viewFillterBrand: {
    flex: 1,
  },
  touchBrand: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(100),
    height: verticalScale(35),
    borderRadius: 6,
    marginTop: verticalScale(10),
  },
  textTitle: {
    fontSize: AppTheme.FontSize.Medium,
    fontWeight: '700',
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Dark,
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  icon: {
    marginLeft: scale(15),
  },
  containerTextInputStyle: {
    flex: 1,
  },
  viewFillter: {
    flexDirection: 'row',
    paddingHorizontal: scale(16),
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosedCategory: {
    backgroundColor: AppTheme.Colors.Blue,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
    paddingTop: verticalScale(15),
  },
  containerCategories: {
    backgroundColor: AppTheme.Colors.White,
    borderRadius: scale(5),
    minHeight: verticalScale(150),
    elevation: 3,
    shadowColor: AppTheme.Colors.SecondBackround,
    shadowOpacity: 0.5,
    shadowRadius: 50,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingBottom: verticalScale(15),
    paddingHorizontal: scale(8),
  },
  flatList: {
    paddingHorizontal: scale(16),
  },
  itemStyle: {
    marginBottom: verticalScale(0),
  },
});
