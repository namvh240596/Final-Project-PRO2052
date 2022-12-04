import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {AppTheme} from '../../../config/AppTheme';
import {scale, verticalScale} from '../../../utils/scale';
import ItemAddress from '../components/ItemAddress';
import CustomButton from '../../../components/customButton';
import Header from '../../../components/header';
import {useNavigation} from '@react-navigation/native';
import {DATA_ADDRESS} from '../../../services/fakeApi/fakeAPI';
import {useDispatch, useSelector} from 'react-redux';
import {getUserSelector} from '../../../redux/auth/selector';
import {getUserInfoRequest} from '../../../redux/auth/action';
import {updateProfileApi} from '../../../services/api/auth';
import {
  getChangeLoadingRequest,
  getChangeLoadingSuccess,
} from '../../../redux/loading/action';

const MyAddress = props => {
  const navigation = useNavigation();
  const isDelete = props.route.params?.isDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, []);
  const userInfo = useSelector(getUserSelector);
  const renderItem = ({item, index}) => {
    return (
      <ItemAddress
        isDefault={item.isDefault}
        address={item.address}
        name={item.name}
        phone={item.phone}
        onDelete={onDeleteAddress}
        index={index}
        isDelete={isDelete ? true : false}
        onPress={() => {
          navigation.navigate('Cart', {itemChooseAddress: item});
        }}
       
      />
    );
  };

  const onDeleteAddress = index => {
    dispatch(getChangeLoadingRequest());
    console.log(userInfo.information);
    let arr = userInfo.information;
    arr.splice(index, 1);
    updateProfileApi({
      information: arr,
    })
      .then(res => {
        dispatch(getUserInfoRequest());
        dispatch(getChangeLoadingSuccess());
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <Header title={'Địa chỉ'} iconBack />
      <View style={styles.body}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={userInfo.information}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={styles.viewEmpty}>
              <Text style={styles.textEmpty}>Chưa có địa chỉ nào!</Text>
              <Text style={styles.textEmpty}>Vui lòng thêm địa chỉ mới!</Text>
            </View>
          }
        />
      </View>
      <View style={styles.footer}>
        <CustomButton
          title={'Thêm địa chỉ'}
          onPress={() => navigation.navigate('Location')}
          containerStyles={styles.containerStyles}
          textStyles={styles.textStyles}
        />
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  textEmpty: {
    fontSize: AppTheme.FontSize.Large,
    fontFamily: AppTheme.Fonts.Medium,
    color: AppTheme.Colors.Dark,
    lineHeight: 20,
    letterSpacing: 0.4,
    textAlign: 'auto',
    fontWeight: '700',
    marginTop: verticalScale(30),
  },
  viewEmpty: {
    paddingTop: verticalScale(120),
    paddingBottom: verticalScale(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: AppTheme.Colors.White,
  },
  containerStyles: {
    backgroundColor: AppTheme.Colors.Dark,
    elevation: 2,
    shadowColor: AppTheme.Colors.Grey,
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  footer: {
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(36),
  },
  body: {
    backgroundColor: AppTheme.Colors.White,
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(20),
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
});
