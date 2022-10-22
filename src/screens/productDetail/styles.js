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
    backgroundColor: AppTheme.Colors.White,
  },
  img: {
    width: '100%',
    height: verticalScale(238),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: AppTheme.Colors.Black,
    marginVertical: 12,
  },
  textName: {
    fontSize: scale(18),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
    width: '90%',
  },
  viewName: {
    width: '100%',
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewStar: {
    flexDirection: 'row',
    width: scale(100),
    marginLeft: scale(16),
    marginTop: scale(9),
  },
  iconStar: {
    marginRight: scale(3),
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: verticalScale(14),
    paddingHorizontal: scale(16),
  },
  textLastPrice: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Medium,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Grey,
    textDecorationLine: 'line-through',
  },
  textDiscount: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Medium,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Red,
    marginLeft: scale(10),
  },
  textTitle: {
    fontSize: scale(18),
    fontFamily: AppTheme.Fonts.Medium,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Black,
    marginLeft: scale(16),
    marginTop: verticalScale(20),
  },
  textPrice: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  viewDescription: {
    paddingHorizontal: scale(16),
    marginTop: verticalScale(20),
  },
  viewSelectMore: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(100),
    paddingHorizontal: scale(16),
    marginTop: verticalScale(20),
  },
  imgChooseMore: {
    width: scale(90),
    height: scale(90),
    borderRadius: 3,
    marginRight: scale(4),
  },
  viewTitle: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(16),
    marginTop: verticalScale(20),
    justifyContent: 'space-between',
  },
  viewDiscount: {
    width: '100%',
    paddingHorizontal: scale(16),
    marginTop: verticalScale(14),
  },
  textMore: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Blue,
  },

  textPolicy: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Blue,
    paddingLeft: scale(16),
    marginTop: verticalScale(20),
    fontWeight: '700',
  },
  textPromo: {
    fontSize: scale(15),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Black,
    lineHeight: 21.5,
    marginLeft: scale(16),
  },
  text: {
    fontSize: scale(16),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Black,
    fontWeight: '700',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: scale(16),
  },
  button: {
    flex: 1,
    marginLeft: scale(20),
    borderRadius: 40,
    marginVertical: verticalScale(10),
  },
  textButton: {
    fontSize: AppTheme.FontSize.Medium,
  },
  viewReview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(5),
    alignItems: 'center',
  },
  boxMiniStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSeeMore: {
    fontSize: scale(14),
    fontFamily: AppTheme.Fonts.Bold,
    letterSpacing: 0.5,
    color: AppTheme.Colors.Red,
    fontWeight: '700',
  },
  viewComment: {
    paddingHorizontal: scale(16),
    marginTop: verticalScale(10),
  },
  viewAlso: {
    width: '100%',
    paddingHorizontal: scale(16),
    marginTop: verticalScale(20),
    flexDirection: 'row',
  },
  fdl: {
    flexDirection: 'row',
  },
  ViewPolicy: {
    flexDirection: 'row',
    paddingHorizontal: scale(16),
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
});
