import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import {formatMoney} from '../../../helpers/formatMoney';

const ItemOrder = ({onPress, order}) => {
  // let day = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
  console.log(order);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textTitle}>LKJJHLKJHL</Text>
      <Text style={styles.textDate}>
        <Text style={styles.textDate}>Đặt hàng ngày: </Text>
        {/* {day} */}
      </Text>
      <View style={styles.fdl}>
        <Text style={styles.textDate}>Trạng thái</Text>
        <Text style={styles.textDate}>Đang giao hàng</Text>
      </View>
      <View style={styles.fdl}>
        <Text style={styles.textDate}>Sản phẩm</Text>
        <Text style={styles.textDate}>{order.items.length} sản phẩm</Text>
      </View>
      <View style={styles.fdl}>
        <Text style={styles.textDate}>Tổng cộng</Text>
        <Text style={styles.textDate}>{formatMoney(order.totalPrice)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({
  fdl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  textDate: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Medium,
    color: AppTheme.Colors.Grey,
  },
  container: {
    paddingVertical: verticalScale(12),
    borderWidth: 1,
    borderColor: AppTheme.Colors.Light,
    borderRadius: 5,
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    shadowOpacity: 0.5,
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(14),
    shadowRadius: 15,
  },
  textTitle: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
});
