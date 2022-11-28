import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../../utils/scale';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {AppTheme, TextStyles} from '../../config/AppTheme';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, iconBack}) => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {iconBack && (
        <TouchableOpacity onPress={onGoBack}>
          <SvgXml
            xml={AppIcon.IconBack}
            width={scale(20)}
            height={scale(20)}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <View style={styles.viewTitle}>
        <Text
          numberOfLines={1}
          style={[TextStyles.headingText3, styles.textTitle]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewTitle: {
    minHeight: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: scale(40)
  },
  icon: {
    marginLeft: scale(20),
  },
  textTitle: {
   
  },
  container: {
    width: '100%',
    minHeight: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: AppTheme.Colors.Light,
  },
});
