import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import ProducOnCart from '../../components/customProductOnCart';
import CustomButton from '../../components/customButton';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Header title={'Giỏ hàng'} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <ProducOnCart />
        <ProducOnCart />
        <ProducOnCart />
        <ProducOnCart />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.viewCode}>
          <TextInput placeholder="Nhập mã code" style={styles.textInput} />
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textTouch}>OK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTotalPrice}>
          <View style={styles.viewFdl}>
            <Text style={styles.text}>Tiền sản phẩm ({2})</Text>
            <Text style={styles.text}>200.000đ</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.text}>Phí vận chuyển</Text>
            <Text style={styles.text}>20.000đ</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.text}>Giảm giá</Text>
            <Text style={styles.text}>-2000đ</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.textTotal}>Tổng cộng</Text>
            <Text style={styles.textPriceTotal}>200.000đ</Text>
          </View>
        </View>
        <CustomButton title={'Tiếp theo'} />
      </View>
    </View>
  );
};

export default Cart;
