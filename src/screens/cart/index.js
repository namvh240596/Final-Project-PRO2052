import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import ProducOnCart from '../../components/customProductOnCart';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Header title={'Giỏ hàng'} />
      <View style={styles.body}>
        <ProducOnCart />
      </View>
    </View>
  );
};

export default Cart;
