import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/header';
import ProducOnCart from '../../../components/customProductOnCart';

const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Order" iconBack />

      <ScrollView style={styles.body} showsHorizontalScrollIndicator={false}>
        <Text style={styles.textTitle}>Sản phẩm</Text>
        <ProducOnCart noCount noDeleted />
        <ProducOnCart noCount noDeleted />
        <Text style={styles.textTitle}>Thông tin hoá đơn và liên hệ</Text>
        <View style={styles.viewInfomation}>
          <View style={styles.fdl}>
            <Text style={styles.text2}>Mã khuyến mãi</Text>
            <Text style={styles.text}>HAPPY NEW YEAR</Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}></Text>
            <Text style={styles.text}>-20.000đ</Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}>Tạm tính</Text>
            <Text style={styles.textTitle}>200.000đ</Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}>Tổng cộng</Text>
            <Text style={styles.textTitle}>180.000đ</Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}>Nhận vào</Text>
            <Text style={styles.text}>14-10-2022</Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}>Địa chỉ</Text>
            <Text style={styles.text} numberOfLines={4}>
              115A Tô Ký Phường Đông Hưng Thuận Quận 12 HCM
            </Text>
          </View>
          <View style={styles.fdl}>
            <Text style={styles.text2}>SĐT</Text>
            <Text style={styles.text} numberOfLines={4}>
              32874810
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  fdl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewInfomation: {
    backgroundColor: AppTheme.Colors.White,
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(5),
    borderRadius: 2,
  },
  text2: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Grey,
    marginBottom: verticalScale(16),
    width: '40%',
    textAlign: 'left',
  },
  text: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Grey,
    marginBottom: verticalScale(16),
    width: '40%',
    textAlign: 'right',
  },
  textTitle: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
    marginBottom: verticalScale(16),
  },
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
