import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/header';
import {DATA_PRODUCTS} from '../../services/fakeApi/fakeAPI';
import CustomProduct from '../../components/customProduct';

const Favorites = () => {
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
  return (
    <View style={styles.container}>
      <Header iconBack title={'Sản phẩm yêu thích'} />
      <View style={styles.body}>
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

export default Favorites;
