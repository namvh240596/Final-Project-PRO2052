import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/header';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';
import {DATA_CATEGORIES, DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import ItemCategories from '../home/components/ItemCategories';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
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

const ListProduct = props => {
  const listCategories = useSelector(getListCategoriesSelector);
  const listProduct = useSelector(getProductsSelector);
  const listProductByType = useSelector(getProductByTypeSelector);
  const [typeCategory, setTypeCategory] = useState(props?.route.params.type);
  const dispatch = useDispatch();
  const loading = useSelector(getChangeLoading);
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
          rightIcon={AppIcon.IconSearch}
          textPlaceHolder={'Tìm kiếm'}
          containerTextInputStyle={styles.containerTextInputStyle}
        />
        <SvgXml
          xml={AppIcon.IconAccountBlue}
          width={scale(24)}
          height={scale(24)}
          style={styles.icon}
          onPress={() => {
            console.log('aaa');
          }}
        />
        <SvgXml
          xml={AppIcon.IconAccountBlue}
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
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
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
