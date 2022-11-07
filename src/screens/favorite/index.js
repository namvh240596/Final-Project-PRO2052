import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Header from '../../components/header';
import {DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import CustomProduct from '../../components/customProduct';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getListFavoriteSelector} from '../../redux/products/selector';
import {getAllFavoriteProductRequest} from '../../redux/products/action';

const Favorites = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listFavorite = useSelector(getListFavoriteSelector);
  useEffect(() => {
    dispatch(getAllFavoriteProductRequest());
  }, []);

  const renderItem = ({item}) => {
    return (
      <CustomProduct
        onGoDetail={() =>
          navigation.navigate('ProductDetail', {productId: item._id})
        }
        costPrice={item.costPrice}
        image={item.images[0]}
        salePercent={item.salePercent}
        salePrice={item.salePrice}
        title={item.title}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header iconBack title={'Sản phẩm yêu thích'} />
      <View style={styles.body}>
        {listFavorite && (
          <FlatList
            data={listFavorite}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
          />
        )}
      </View>
    </View>
  );
};

export default Favorites;
