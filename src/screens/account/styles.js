import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.SecondBackround,
    paddingTop: verticalScale(24),
  },
});
