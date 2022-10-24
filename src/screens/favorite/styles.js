import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale} from '../../utils/scale';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
  },
  container: {flex: 1, backgroundColor: AppTheme.Colors.White},
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
export default styles;