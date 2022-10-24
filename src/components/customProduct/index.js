import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IMAGES from '../../assets/images';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {scale} from '../../utils/scale';
import {string} from 'yup';

const CustomProduct = ({
  title,
  costPrice,
  image,
  salePercent,
  salePrice,
  star,
  remove,
  onGoDetail,
  onRemove,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onGoDetail}>
      <View>
        {image && (
          <Image
            source={{uri: image.toString()}}
            resizeMode="cover"
            style={styles.img}
          />
        )}
      </View>
      <Text style={styles.textName} numberOfLines={2}>
        {title}
      </Text>
      {star && (
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
      )}
      {salePrice && <Text style={styles.textLastPrice}>{salePrice}đ</Text>}
      <View style={styles.fld}>
        <View style={styles.viewSale}>
          <Text style={styles.textFirstPrice}>{costPrice}đ</Text>
          <Text style={styles.textSale}> {salePercent} % off</Text>
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
    </TouchableOpacity>
  );
};

export default CustomProduct;

const DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
