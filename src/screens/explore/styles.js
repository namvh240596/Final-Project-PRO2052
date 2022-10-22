import {StyleSheet} from 'react-native';
import {AppTheme} from '../../config/AppTheme';
import {scale, verticalScale} from '../../utils/scale';

export const styles = StyleSheet.create({
  textName: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.Bold,
    color: AppTheme.Colors.Blue,
    fontWeight: '700',
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
    backgroundColor: AppTheme.Colors.White,
    shadowRadius: 10,
    borderRadius: 2,
    padding: scale(5),
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
