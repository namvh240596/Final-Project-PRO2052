import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {AppTheme, TextStyles} from '../../config/AppTheme';
import {SvgXml} from 'react-native-svg';
import {scale} from '../../utils/scale';

const CustomTextInput = ({
  textPlaceHolder,
  textInputStyle,
  value,
  secureTextEntry,
  leftIcon,
  rightIcon,
  containerTextInputStyle,
  placeholderTextColor,
  isError,
  textErrors,
  textStyleError,
  onClear,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={containerTextInputStyle}>
      <View
        style={[
          styles.containerTextInput,

          (isFocused && {borderColor: AppTheme.Colors.Blue}) ||
            (isError && {borderColor: AppTheme.Colors.Red}),
        ]}>
        {leftIcon && (
          <SvgXml xml={leftIcon} width={scale(24)} height={scale(24)} />
        )}

        <TextInput
          placeholder={textPlaceHolder || 'Enter your text'}
          placeholderTextColor={placeholderTextColor || AppTheme.Colors.Grey}
          secureTextEntry={secureTextEntry}
          keyboardType="default"
          value={value}
          selectionColor={AppTheme.Colors.Blue}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          style={[styles.textInput, TextStyles.textStyleInput, textInputStyle]}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onClear}>
            <SvgXml xml={rightIcon} width={scale(24)} height={scale(24)} />
          </TouchableOpacity>
        )}
      </View>
      {textErrors && (
        <Text
          style={[
            styles.textError,
            TextStyles.textStyleErrors,
            textStyleError,
          ]}>
          {textErrors}
        </Text>
      )}
    </View>
  );
};

export default React.memo(CustomTextInput);
