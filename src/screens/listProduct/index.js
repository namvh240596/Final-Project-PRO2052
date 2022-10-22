import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';
import {DATA_CATEGORIES, DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import ItemCategories from '../home/components/ItemCategories';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';

const ListProduct = () => {
  const renderItem = ({item}) => {
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
  };
  const navigation = useNavigation();
  const onDetail = id => {
    return navigation.navigate('ProductDetail', {id: id});
  };
  return (
    <View style={styles.container}>
      <Header title={'Danh mục sản phẩm'} iconBack />
      <View style={styles.body}>
        <ScrollView
          style={styles.containerCategories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {DATA_CATEGORIES.map(item => {
            return <ItemCategories key={item.id} title={item.title} />;
          })}
        </ScrollView>

        <FlatList
          data={DATA_PRODUCTS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  body: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(16),
    flex: 1,
  },
  containerCategories: {
    backgroundColor: AppTheme.Colors.White,
    height: verticalScale(150),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  flatList: {
    marginTop: verticalScale(20),
  },
});
