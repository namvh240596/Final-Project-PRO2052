import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import {styles} from './styles';

const Explore = () => {
  return (
    <View>
      <CustomTextInput
        leftIcon={AppIcon.IconSearch}
        textPlaceHolder={'Tim kiem san pham'}
        containerTextInputStyle={styles.margins}
      />
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;
