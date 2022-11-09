import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/header';
import ItemOrder from '../components/ItemOrder';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getMyOrderApi} from '../../../services/api/order';

const MyOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [listOrder, setListOrder] = useState([]);
  useEffect(() => {
    getMyOrderApi()
      .then(res => {
        res && setListOrder(res.data);
      })
      .catch(e => {
        console.log('errors ', e);
      });
  }, [dispatch]);
  const onGoDetail = () => {
    navigation.navigate('OrderDetail');
  };
  return (
    <View style={styles.container}>
      <Header title="Đơn hàng" iconBack />
      <View style={styles.body}>
        {listOrder.map(item => {
          return <ItemOrder key={item._id} order={item} onPress={onGoDetail} />;
        })}
      </View>
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  body: {
    backgroundColor: AppTheme.Colors.SecondBackround,
    flex: 1,
    paddingHorizontal: scale(5),
    paddingTop: verticalScale(20),
  },
  container: {
    backgroundColor: AppTheme.Colors.White,
    flex: 1,
  },
});
