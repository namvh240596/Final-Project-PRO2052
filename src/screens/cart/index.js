import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import ProducOnCart from '../../components/customProductOnCart';
import CustomButton from '../../components/customButton';
import {scale, verticalScale} from '../../utils/scale';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCartRequest} from '../../redux/cart/action';
import {
  getListCartSelector,
  getStatusCartSelector,
} from '../../redux/cart/selector';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {formatMoney} from '../../helpers/formatMoney';
import {updateQuantityProductApi} from '../../services/api/cart';

const Cart = props => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const listCart = useSelector(getListCartSelector);
  const [totalItem, setTotalItem] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);
  const [feeShip, setFeeShip] = useState(30000);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    isFocused && dispatch(getAllCartRequest());
  }, [dispatch, isFocused]);
  useEffect(() => {
    let _totalItem = 0;
    let _initialPrice = 0;
    let _discount = 0;
    let _finalPrice = 0;
    for (let index = 0; index < listCart.length; index++) {
      _totalItem += listCart[index].quantity;
      _initialPrice += listCart[index].product.costPrice;
      _discount +=
        listCart[index].product.costPrice - listCart[index].product.salePrice;
      _finalPrice += listCart[index].product.salePrice;
    }
    setDiscount(_discount);
    setFinalPrice(_finalPrice + feeShip);
    setTotalItem(_totalItem);
    setInitialPrice(_initialPrice);
  }, [navigation, listCart, dispatch]);

  const onUpdateQuantity = useCallback((_id, quantity) => {
    setIsLoading(true);
    updateQuantityProductApi({productId: _id, quantity: quantity})
      .then(res => {
        isFocused && dispatch(getAllCartRequest());
        res && setIsLoading(false);
      })
      .catch(e => console.log('cart update quantity -> ', e));
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'Giỏ hàng'} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: verticalScale(20),
        }}
        showsVerticalScrollIndicator={false}
        style={styles.body}>
        {listCart &&
          listCart.map((item, index) => {
            return (
              <ProducOnCart
                key={index}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
              />
            );
          })}
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
            <Text style={styles.text}>Tạm tính ({totalItem})</Text>
            <Text style={styles.text}>{formatMoney(initialPrice)}</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.text}>Phí vận chuyển</Text>
            <Text style={styles.text}>{formatMoney(feeShip)}</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.text}>Giảm giá</Text>
            <Text style={styles.text}>{formatMoney(discount)}</Text>
          </View>
          <View style={styles.viewFdl}>
            <Text style={styles.textTotal}>Tổng cộng</Text>
            <Text style={styles.textPriceTotal}>{formatMoney(finalPrice)}</Text>
          </View>
        </View>
        <CustomButton
          title={'Tiếp theo'}
          onPress={() => navigation.navigate('MyAddress')}
        />
      </View>
    </View>
  );
};

export default Cart;
