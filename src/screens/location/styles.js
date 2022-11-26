import {Dimensions, Platform, StyleSheet} from 'react-native';
import { AppTheme } from '../../config/AppTheme';
import { scale, verticalScale } from '../../utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  mapViewContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 10,
    position: 'absolute',
  },
  buttonContainerStyle: {
    alignSelf: 'center',
    flexDirection: 'column',
    width: scale(371),
    height: verticalScale(55),
    backgroundColor: AppTheme.Colors.Orange,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: scale(10),
    padding: scale(10),
  },
  loadingStyle: {
    width: scale(300),
    height: verticalScale(300),
    alignSelf: 'center',
  },
  loadingView: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  indicatorBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  headerStyle: {
    zIndex: 100,
    backgroundColor: AppTheme.Colors.White,
    borderBottomWidth: 0.3,
    borderBottomColor: AppTheme.Colors.TextPlace,
  },
  textInputContainer: {
    marginHorizontal: scale(20),
    height: verticalScale(60),
    borderRadius: scale(10),
    backgroundColor: AppTheme.Colors.White,
    zIndex: 100,
    marginTop: verticalScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputStyle: {
    flex: 1,
    height: verticalScale(60),
    borderRadius: scale(10),
  },
  iconSearch: {
    marginLeft: scale(15),
    marginRight: scale(5),
  },
  listPlaces: {
    marginHorizontal: scale(20),
    bottom: verticalScale(10),
    zIndex: 100,
    backgroundColor: AppTheme.Colors.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  itemPlaces: {
    paddingVertical: verticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
    marginHorizontal: scale(15),
  },
  textPlaces: {
    fontSize: AppTheme.FontSize.Small,
    fontFamily: AppTheme.Fonts.Regular,
    color: AppTheme.Colors.Black,
    flex: 1,
    marginLeft: scale(5),
  },
  textBtnStyle: {
    fontSize: scale(18),
    color: AppTheme.Colors.White,
    marginTop: Platform.OS === 'ios' ? verticalScale(5) : 0,
  },
  viewCurrentPosition: {
    backgroundColor: AppTheme.Colors.White,
    zIndex: 100,
    width: scale(40),
    height: scale(40),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    bottom: verticalScale(40),
    left: scale(-20),
  },
  viewFooter: {
    zIndex: 100,
    position: 'absolute',
    alignSelf: 'center',
    bottom: verticalScale(0),
    alignItems: 'flex-end',
  },
  address: {
    marginLeft: scale(15),
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderBottomWidth: 0.5,
    borderColor: AppTheme.Colors.Gray,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  fld: {
    flexDirection: 'row',
  },
  iconAddress: {
    top: verticalScale(7),
  },
  textTitle: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Black,
  },
  text: {
    fontSize: AppTheme.FontSize.SmallX,
    fontFamily: AppTheme.Fonts.Medium,
    color: AppTheme.Colors.Gray,
    width: scale(300),
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    flex: 1,
  },
  touchLocation: {
    marginBottom: verticalScale(20),
  },
  textHeaderModal: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Black,
    textAlign: 'center',
  },
  viewEmpty: {
    flex: 1,
  },
  textEmpty: {
    fontSize: AppTheme.FontSize.Medium,
    fontFamily: AppTheme.Fonts.SemiBold,
    color: AppTheme.Colors.Black,
    textAlignVertical: 'center',
    textAlign: 'center',
    height: verticalScale(400),
  },
  flatLits: {
    backgroundColor: AppTheme.Colors.White,
    maxHeight: verticalScale(250),
    marginBottom: verticalScale(2),
    marginTop: verticalScale(10),
  },
});