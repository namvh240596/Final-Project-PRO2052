import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';

export const styles = StyleSheet.create({
  body: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: AppTheme.Colors.SecondBackround,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  footer: {
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(14),
  },
  viewCode: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: AppTheme.Colors.Light,
    borderRadius: 5,
  },
  touch: {
    backgroundColor: AppTheme.Colors.Blue,
    width: scale(87),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textTouch: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Medium,
    letterSpacing: 0.5,
    color: AppTheme.Colors.White,
  },
  viewTotalPrice: {
    borderColor: AppTheme.Colors.Light,
    borderWidth: 1,
    marginVertical: verticalScale(20),
    borderRadius: 5,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    backgroundColor: AppTheme.Colors.White,
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
  },
  viewFdl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  text: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Regular,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Black,
  },
  textInput: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(5),
  },
  textPriceTotal: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  textTotal: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
});
