import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IMAGES from '../../assets/images';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {scale} from '../../utils/scale';

const CustomProduct = ({
  name,
  price,
  image,
  sale,
  lastPrice,
  star,
  remove,
  onGoDetail,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={IMAGES.Product1} resizeMode="cover" style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.textName} numberOfLines={2}>
        ten sgaasdgSDA ASGASDFSDF SA
      </Text>
      <View style={styles.viewStar}>
        {DATA.map(item => {
          return (
            <SvgXml
              key={item.id}
              xml={AppIcon.IconStar}
              height={scale(16)}
              width={scale(16)}
            />
          );
        })}
      </View>
      <Text style={styles.textLastPrice}>$ gia cuoi</Text>
      <View style={styles.fld}>
        <View style={styles.viewSale}>
          <Text style={styles.textFirstPrice}>$ gia dau</Text>
          <Text style={styles.textSale}>sale%</Text>
        </View>
        {remove && (
          <TouchableOpacity>
            <SvgXml
              xml={AppIcon.IconRemove}
              width={scale(24)}
              height={scale(24)}
              style={styles.iconRemove}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomProduct;

const DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
