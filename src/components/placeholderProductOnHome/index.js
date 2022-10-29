import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {scale, verticalScale} from '../../utils/scale';

const PlaceholderProductOnHome = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          width: scale(133),
          height: scale(133),
          borderRadius: scale(10),
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />
    </SkeletonPlaceholder>
  );
};

export default PlaceholderProductOnHome;
