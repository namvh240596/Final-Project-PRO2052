import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/header';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Header iconBack title={'Sản phẩm yêu thích'} />
      <View style={styles.body}></View>
    </View>
  );
};

export default Favorites;
