import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/header';
import ItemOrder from '../components/ItemOrder';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import {useNavigation} from '@react-navigation/native';

const MyOrder = () => {
  const navigation = useNavigation();
  const onGoDetail = () => {
    navigation.navigate('OrderDetail');
  };
  return (
    <View style={styles.container}>
      <Header title="Đơn hàng" iconBack />
      <View style={styles.body}>
        <ItemOrder onPress={onGoDetail} />
        <ItemOrder onPress={onGoDetail} />
        <ItemOrder onPress={onGoDetail} />
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
