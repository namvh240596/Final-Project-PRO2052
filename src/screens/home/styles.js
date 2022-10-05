import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';

export const styles = StyleSheet.create({
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(24),
    paddingHorizontal: scale(16),
  },
  textMore: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  textTitle: {
    fontSize: AppTheme.FontSize.Large,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
  containerCategories: {
    marginTop: 12,
    backgroundColor: AppTheme.Colors.White,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  body: {
    backgroundColor: AppTheme.Colors.White,
    flex: 1,
    paddingBottom: 0,
  },
  margins: {
    marginHorizontal: scale(16),
  },
  img: {
    width: '100%',
    paddingHorizontal: scale(16),
    height: verticalScale(236),
    borderTopWidth: 1,
    borderColor: AppTheme.Colors.Light,
    paddingTop: verticalScale(16),
  },
});
