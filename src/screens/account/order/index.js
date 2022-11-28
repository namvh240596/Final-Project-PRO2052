import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/header';
import ItemOrder from '../components/ItemOrder';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getMyOrderApi} from '../../../services/api/order';
import Lottie from 'lottie-react-native';
import IMAGES from '../../../assets/images';

const MyOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [listOrder, setListOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getMyOrderApi()
      .then(res => {
        res && setListOrder(res.data);
        res && setIsLoading(false);
      })
      .catch(e => {
        console.log('errors ', e);
        setIsLoading(false);
      });
  }, [dispatch]);
  const onGoDetail = () => {
    // navigation.navigate('OrderDetail');
  };
  return (
    <View style={styles.container}>
      <Header title="Đơn hàng" iconBack />
      <ScrollView
        style={styles.body}
        contentContainerStyle={{paddingBottom: verticalScale(20)}}>
        {listOrder.map(item => {
          return <ItemOrder key={item._id} order={item} onPress={onGoDetail} />;
        })}
      </ScrollView>
      {isLoading && (
        <View style={styles.viewLoading}>
          <Lottie
            source={IMAGES.ANIMATION}
            autoPlay
            loop
            style={styles.loading}
          />
        </View>
      )}
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    zIndex: 11,
    backgroundColor: 'rgba(255, 255, 255,0.6)',
  },
  viewLoading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: AppTheme.Colors.White,
    flex: 1,
    paddingHorizontal: scale(5),
    paddingTop: verticalScale(20),
  },
  container: {
    backgroundColor: AppTheme.Colors.White,
    flex: 1,
  },
});
