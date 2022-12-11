import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  NativeModules,
  NativeEventEmitter,
  KeyboardAvoidingView,
  Button,
  LogBox,
  AppState,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import Header from '../../components/header';
import ProducOnCart from '../../components/customProductOnCart';
import CustomButton from '../../components/customButton';
import {scale, verticalScale} from '../../utils/scale';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCartRequest} from '../../redux/cart/action';
import {
  getListCartSelector,
  getStatusCartSelector,
} from '../../redux/cart/selector';
import Lottie from 'lottie-react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {formatMoney} from '../../helpers/formatMoney';
import {updateQuantityProductApi} from '../../services/api/cart';
import {createOrderApi} from '../../services/api/order';
import IMAGES from '../../assets/images';
import {SvgXml} from 'react-native-svg';
import AppIcon from '../../assets/icons';
import {getChangeLoading} from '../../redux/loading/selector';
import MyLoading from '../../components/loading';
import {
  getChangeLoadingRequest,
  getChangeLoadingSuccess,
} from '../../redux/loading/action';
import {showModal} from '../../components/customNotiModal';
import ItemAddress from '../account/components/ItemAddress';
import {getUserSelector} from '../../redux/auth/selector';
import ReactNativeModal from 'react-native-modal';
import PlaceholderCart from '../../components/placholderCart';
import {AppTheme} from '../../config/AppTheme';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import axiosClient from '../../utils/axiosClient';
const {PayZaloBridge} = NativeModules;
const payZaloBridgeEmitter = new NativeEventEmitter(PayZaloBridge);

const subscription = payZaloBridgeEmitter.addListener('EventPayZalo', data => {
  if (data.returnCode == 1) {
    console.log('success');
  } else {
    console.log('data error ', data);
  }
});
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Cart = props => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const itemChooseAddress = props.route.params?.itemChooseAddress;
  const listCart = useSelector(getListCartSelector);
  const userInfor = useSelector(getUserSelector);
  const [totalItem, setTotalItem] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);
  const [feeShip, setFeeShip] = useState(30000);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [modalPaymentMethod, setModalPaymentMethod] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [myAddress, setMyAddress] = useState({
    address: '',
    name: '',
    phone: '',
  });
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    if (itemChooseAddress) {
      setMyAddress(itemChooseAddress);
      return;
    }
    if (userInfor?.information.length === 0) {
      console.log('vcccccccccccccccc');
      setMyAddress({
        address: '',
        name: '',
        phone: '',
      });
      return;
    }
    userInfor?.information.map((item, index) => {
      if (item.isDefault === true) {
        setMyAddress(item);
      }
    });
  }, [isFocused]);

  useEffect(() => {
    isFocused && dispatch(getChangeLoadingRequest());
    isFocused && dispatch(getAllCartRequest());
    isFocused && setTimeout(() => setIsLoading(false), 2000);
  }, [isFocused]);
  useEffect(() => {
    let _totalItem = 0;
    let _initialPrice = 0;
    let _discount = 0;
    let _finalPrice = 0;
    for (let index = 0; index < listCart.length; index++) {
      _totalItem += listCart[index].quantity;
      _initialPrice += listCart[index].product.costPrice;
      _discount +=
        listCart[index].product.costPrice - listCart[index].product.salePrice;
      _finalPrice += listCart[index].product.salePrice;
    }
    setDiscount(_discount);
    setFinalPrice(_finalPrice + feeShip);
    setTotalItem(_totalItem);
    setInitialPrice(_initialPrice);
  }, [navigation, listCart, dispatch]);
  const onUpdateQuantity = useCallback((_id, quantity) => {
    dispatch(getChangeLoadingRequest());
    updateQuantityProductApi({productId: _id, quantity: quantity})
      .then(res => {
        isFocused && dispatch(getAllCartRequest());
        dispatch(getChangeLoadingSuccess());
      })
      .catch(e => {
        dispatch(getChangeLoadingSuccess());
        showModal({
          title: e.response.data.message,
        });
        console.log('cart update quantity -> ', e);
      });
  }, []);
  const createOrder = () => {
    let data;
    let arrItem = [];
    dispatch(getChangeLoadingRequest());
    for (let index = 0; index < listCart.length; index++) {
      let item = {
        product: listCart[index].product._id,
        quantity: listCart[index].quantity,
      };
      arrItem.push(item);
    }
    data = {
      items: arrItem,
      paymentMethod: paymentMethod,
      shippingAddress: {
        address: myAddress.address,
        city: 'hcm',
        postalCode: '12',
        country: 'VN',
      },
      phone: myAddress.phone,
      totalPrice: finalPrice,
      isPaid: false,
    };
    if (paymentMethod === 'ZALOPAY') {
      data = {...data, isPaid: true};
      dispatch(getChangeLoadingSuccess());
      console.log('zalopay data ', data);
    } else {
      createOrderApi(data)
        .then(res => {
          console.log('->>> ', res);
          showModal({
            title: 'Yeah!!!',
            message: 'Đặt hàng thành công!',
          });
          dispatch(getChangeLoadingSuccess());
          dispatch(getAllCartRequest());
        })
        .catch(e => {
          console.log('errors ', e);
          dispatch(getChangeLoadingSuccess());
          showModal({
            title: e.response.data.message,
          });
        });
    }
  };
  const onChoosePaymentMethod = title => {
    setPaymentMethod(title);
    setModalPaymentMethod(false);
  };
  const onChooseAddress = () => {
    navigation.navigate('MyAddress');
  };

  const [token, setToken] = React.useState('');
  const [returncode, setReturnCode] = React.useState('');

  function getCurrentDateYYMMDD() {
    var todayDate = new Date().toISOString().slice(2, 10);
    return todayDate.split('-').join('');
  }
  const renderStringItem = () => {
    let arrItem = [];
    for (let index = 0; index < listCart.length; index++) {
      let item = {
        product: listCart[index].product._id,
        quantity: listCart[index].quantity,
      };
      arrItem.push(item);
    }
    return JSON.stringify(arrItem);
  };
  async function onCreateOrder() {
    dispatch(getChangeLoadingRequest());
    let apptransid = getCurrentDateYYMMDD() + '_' + new Date().getTime();
    let appid = 2553;
    let amount = parseInt(10000);
    let appuser = userInfor.email;
    let apptime = new Date().getTime();
    let embeddata = '{}';
    let item = renderStringItem();
    let description = 'Thanh toán High Tech ' + apptransid;
    let title = 'Thanh toán High Tech';
    let hmacInput =
      appid +
      '|' +
      apptransid +
      '|' +
      appuser +
      '|' +
      amount +
      '|' +
      apptime +
      '|' +
      embeddata +
      '|' +
      item;
    let mac = CryptoJS.HmacSHA256(
      hmacInput,
      'PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL',
    );
    console.log('====================================');
    console.log('hmacInput: ' + hmacInput);
    console.log('mac: ' + mac);
    console.log('====================================');
    var order = {
      app_id: appid,
      app_user: appuser,
      app_time: apptime,
      amount: 10000,
      app_trans_id: apptransid,
      embed_data: embeddata,
      item: item,
      description: description,
      mac: mac,
    };

    console.log('order ', order);

    let formBody = [];
    for (let i in order) {
      var encodedKey = encodeURIComponent(i);
      var encodedValue = encodeURIComponent(order[i]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    await fetch('https://sb-openapi.zalopay.vn/v2/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(resJson => {
        console.log('res json ', resJson);
        // setToken(resJson.zp_trans_token);
        // setReturnCode(resJson.return_code);
        payOrder(resJson.zp_trans_token);
        dispatch(getChangeLoadingSuccess());
        if (resJson.return_message != 'Giao dịch thành công') {
          showModal({
            title: resJson.sub_return_message,
          });
        }
      })
      .catch(error => {
        dispatch(getChangeLoadingSuccess());
        showModal({
          title: 'Lỗi chưa xác định',
          message: 'Vui lòng thử lại sau!!!',
        });
        console.log('error ', error);
      });
  }

  function payOrder(_token) {
    var payZP = NativeModules.PayZaloBridge;
    payZP.payOrder(_token);
  }

  return (
    <View style={styles.container}>
      <Header title={'Giỏ hàng'} />
      {!isLoading ? (
        <>
          {listCart.length > 0 ? (
            <ScrollView
              contentContainerStyle={{
                paddingBottom: verticalScale(20),
              }}
              showsVerticalScrollIndicator={false}
              style={styles.body}>
              <View style={styles.viewList}>
                {listCart &&
                  listCart.map((item, index) => {
                    return (
                      <ProducOnCart
                        key={index}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                      />
                    );
                  })}
              </View>

              <View style={styles.footer}>
                {myAddress.address === '' ? (
                  <View style={styles.viewAddress}>
                    <TouchableOpacity onPress={onChooseAddress}>
                      <Text style={styles.textChooseAddress}>Chọn địa chỉ</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <ItemAddress
                    address={myAddress.address}
                    name={myAddress.name}
                    phone={myAddress.phone}
                    onPress={() =>
                      navigation.navigate('MyAddress', {isDelete: false})
                    }
                  />
                )}
                <TouchableOpacity
                  onPress={() => setModalPaymentMethod(true)}
                  style={styles.touchPaymentMethod}>
                  <Text style={styles.textMethod}>Phương thức thanh toán </Text>
                  <Text style={styles.textPaymentMethod}>
                    {paymentMethod === 'COD' ? 'Tiền mặt' : 'ZaloPay'}
                  </Text>
                </TouchableOpacity>

                <View style={styles.viewCode}>
                  <TextInput
                    placeholder="Nhập mã code"
                    style={styles.textInput}
                  />
                  <TouchableOpacity style={styles.touch}>
                    <Text style={styles.textTouch}>OK</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewTotalPrice}>
                  <View style={styles.viewFdl}>
                    <Text style={styles.text}>Tạm tính ({totalItem})</Text>
                    <Text style={styles.text}>{formatMoney(initialPrice)}</Text>
                  </View>
                  <View style={styles.viewFdl}>
                    <Text style={styles.text}>Phí vận chuyển</Text>
                    <Text style={styles.text}>{formatMoney(feeShip)}</Text>
                  </View>
                  <View style={styles.viewFdl}>
                    <Text style={styles.text}>Giảm giá</Text>
                    <Text style={styles.text}>{formatMoney(discount)}</Text>
                  </View>
                  <View style={styles.viewFdl}>
                    <Text style={styles.textTotal}>Tổng cộng</Text>
                    <Text style={styles.textPriceTotal}>
                      {formatMoney(finalPrice)}
                    </Text>
                  </View>
                </View>
                <CustomButton title={'Mua'} onPress={onCreateOrder} />
              </View>
            </ScrollView>
          ) : (
            <View style={styles.container}>
              <View style={styles.noProduct}>
                <SvgXml
                  xml={AppIcon.IconNotFound}
                  width={scale(144)}
                  height={scale(144)}
                />
                <Text style={styles.textNoProduct}>Giỏ hàng trống</Text>
                <CustomButton
                  title={'Đi mua sắm nào!'}
                  onPress={() => navigation.navigate('Home')}
                />
              </View>
            </View>
          )}
        </>
      ) : (
        <PlaceholderCart />
      )}

      <ReactNativeModal
        isVisible={modalPaymentMethod}
        animationIn={'slideInUp'}
        style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => setModalPaymentMethod(false)}
          style={styles.touchModal}
        />
        <View style={styles.centerView}>
          <View style={styles.modalHeader}>
            <Text style={styles.textHeader}>Chọn phương thức thanh toán</Text>
          </View>
          <TouchableOpacity
            onPress={() => onChoosePaymentMethod('COD')}
            style={[
              styles.touchPayment,
              {
                backgroundColor:
                  paymentMethod === 'COD'
                    ? AppTheme.Colors.Yellow
                    : AppTheme.Colors.White,
              },
            ]}>
            <SvgXml
              xml={AppIcon.IconCash}
              height={scale(24)}
              width={scale(24)}
            />
            <Text style={styles.textChooseMethod}>Tiền mặt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChoosePaymentMethod('ZALOPAY')}
            style={[
              styles.touchPayment,
              {
                backgroundColor:
                  paymentMethod === 'ZALOPAY'
                    ? AppTheme.Colors.Yellow
                    : AppTheme.Colors.White,
              },
            ]}>
            <SvgXml
              xml={AppIcon.IconZaloPay}
              height={scale(26)}
              width={scale(26)}
            />
            <Text style={styles.textChooseMethod}>ZaloPay</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
      {/* <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.welcomeHead}>ZaloPay App To App Demo</Text>
          <Text style={styles.welcome}>Amount:</Text>
          <TextInput
            onChangeText={value => setMoney(value)}
            value={money}
            keyboardType="numeric"
            placeholder="Input amount"
            style={styles.inputText}
          />
          <Button
            title="Create order"
            type="outline"
            onPress={() => {
              onCreateOrder(money);
            }}
          />
          <Text style={styles.welcome}>ZpTranstoken: {token}</Text>
          <Text style={styles.welcome}>returncode: {returncode}</Text>
          {returncode == 1 ? (
            <Button
              title="Pay order"
              type="outline"
              onPress={() => {
                payOrder();
              }}
            />
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView> */}
    </View>
  );
};

export default Cart;
