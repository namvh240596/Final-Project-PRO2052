import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {scale, verticalScale} from '../../utils/scale';

const PlaceholderListCategories = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          width: '95%',
          height: verticalScale(140),
          borderRadius: scale(10),
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />
    </SkeletonPlaceholder>
  );
};

export default PlaceholderListCategories;
