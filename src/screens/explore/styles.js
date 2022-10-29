import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';

export const styles = StyleSheet.create({
  containerButton: {
    marginBottom: verticalScale(15),
  },
  viewTotalPrice: {
    width: '100%',
    borderColor: AppTheme.Colors.Grey,
    backgroundColor: AppTheme.Colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(10),
    marginBottom: verticalScale(10),
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 30,
  },
  textTotalPrice: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
  scvProducts: {
    paddingTop: verticalScale(30),
  },
  iconClose: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    alignItems: 'flex-end',
    right: scale(-1),
  },
  viewInfo: {
    marginLeft: scale(10),
    width: scale(265),
  },
  textName: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Dark,
    fontWeight: '700',
  },
  textSalePrice: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
  },
  textCostPrice: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Grey,
    textDecorationLine: 'line-through',
  },
  textSale: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Red,
    fontWeight: '700',
    marginLeft: scale(7),
  },
  viewCostPrice: {
    flexDirection: 'row',
  },
  img: {
    width: scale(60),
    height: scale(60),
    borderWidth: 1,
  },
  items: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
    elevation: 2,
    shadowColor: AppTheme.Colors.Black,
    backgroundColor: AppTheme.Colors.SecondBackround,
    shadowRadius: 10,
    borderRadius: 7,
    padding: scale(5),
    alignItems: 'center',
    paddingLeft: scale(12),
  },
  modalBody: {
    elevation: 5,
    shadowColor: AppTheme.Colors.Black,
    backgroundColor: AppTheme.Colors.White,
    flex: 1,
    borderRadius: 2,
    paddingHorizontal: scale(15),
  },

  modalContainer: {
    flex: 1,
    backgroundColor: AppTheme.Colors.SecondBackround,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(25),
  },
  body: {
    flex: 1,
    backgroundColor: AppTheme.Colors.SecondBackround,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(5),
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
});
