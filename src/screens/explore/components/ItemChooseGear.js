import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../../utils/scale';
import {AppTheme} from '../../../config/AppTheme';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../../assets/icons';
import IMAGES from '../../../assets/images';

const ItemChooseGear = ({item, onDelete, onOpen, index}) => {
  return (
    <TouchableOpacity
      onPress={() => onOpen(item.type)}
      style={styles.container}>
      <Image source={IMAGES.CPU} resizeMode="cover" style={styles.img} />
      <View style={styles.viewDescription}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.text}>Nhấn để chọn linh kiện</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(index)}>
        <Text style={styles.text}>Delete Gear</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default React.memo(ItemChooseGear);

const styles = StyleSheet.create({
  text: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Medium,
    color: AppTheme.Colors.Grey,
  },
  textName: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  viewDescription: {
    marginLeft: scale(10),
    justifyContent: 'space-between',
  },
  img: {
    width: scale(60),
    height: scale(60),
    borderWidth: 1,
  },
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.SecondBackround,
    paddingHorizontal: scale(16),
  },
  container: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: AppTheme.Colors.White,
    marginBottom: verticalScale(16),
    borderRadius: 5,
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
  },
});
