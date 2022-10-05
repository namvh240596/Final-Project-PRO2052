import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {scale, verticalScale} from '../../utils/scale';
import {AppTheme, TextStyles} from '../../config/AppTheme';

const CustomButton = ({
  rightIcon,
  containerStyles,
  textStyles,
  title,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      disabled={disabled}>
      {rightIcon && (
        <SvgXml
          xml={rightIcon}
          width={scale(24)}
          height={scale(24)}
          style={{marginLeft: scale(20)}}
        />
      )}
      <Text style={[TextStyles.textButton, styles.textTitle, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: verticalScale(57),
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: AppTheme.Colors.Blue,
    alignItems: 'center',
  },
  textTitle: {
    width: '100%',
    position: 'absolute',
    flex: 1,
    textAlign: 'center',
  },
});
