import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import {styles} from './styles';
import CustomButton from '../../components/customButton';
import ItemChooseGear from './components/ItemChooseGear';
import {scale, verticalScale} from '../../utils/scale';
import {DATA_PRODUCTS_CHOOSE} from '../../services/fakeApi/fakeAPI';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';
import {
  getListCategoriesSelector,
  getListGearToCategoriesSelector,
} from '../../redux/categories/selector';
import {
  getListCategoriesRequest,
  getListGearRequest,
} from '../../redux/categories/action';
import {
  getProductByTypeSelector,
  getProductsSelector,
} from '../../redux/products/selector';
import {formatMoney} from '../../helpers/formatMoney';
import {getAllProductsByTypeRequest} from '../../redux/products/action';
import {getAllProductsByTypeApi} from '../../services/api/products';
import IMAGES from '../../assets/images';
import {addProductsToCartApi} from '../../services/api/cart';
import {getChooseGearRequest} from '../../redux/gear/action';
import {useIsFocused} from '@react-navigation/native';
import {getListGearSelector} from '../../redux/gear/selector';
import {AppTheme} from '../../config/AppTheme';

const Explore = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  const [listProduct, setListProduct] = useState([]);
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();
  const listCategories = useSelector(getListCategoriesSelector);
  const [listGear, setListGear] = useState(listCategories);
  const [isLoading, setIsLoading] = useState(false);
  const myListGear = useSelector(getListGearSelector);
  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(getListCategoriesRequest());
    myListGear.length > 0 && fillProductFromRedux();
    setMoney(totalMoney());
  }, [dispatch]);

  const OpenModalChooseGear = useCallback(
    index => {
      let type;
      if (listCategories[index].type) {
        type = listCategories[index].type;
      } else {
        type = listGear[index].category.type;
      }
      setIsLoading(true);
      getAllProductsByTypeApi(type)
        .then(res => {
          setListProduct(res.data);
          res && setIsLoading(false);
        })
        .catch(e => console.log('errors ', e));
      setModalVisible(true);
    },
    [modalVisible, listIndex, listProduct, listGear],
  );
  const fillProductFromRedux = () => {
    let arr = listCategories;
    arr.map((item, index) => {
      let type = item.type;
      myListGear.map(i => {
        if (i.category.type === type) {
          arr[index] = i;
        }
      });
    });
    setListGear(arr);
  };
  const ChooseGear = useCallback(
    item => {
      let arrGear = [];
      setModalVisible(false);
      let newList = listGear;
      newList[listIndex] = item;
      setMoney(totalMoney());
      listGear.map(item => {
        if (!item.icon) {
          arrGear.push(item);
        }
      });
      dispatch(getChooseGearRequest(arrGear));
    },
    [modalVisible, listGear],
  );
  const totalMoney = () => {
    let total = 0;
    for (let index = 0; index < listGear.length; index++) {
      if (listGear[index]?.costPrice) {
        if (listGear[index]?.salePrice) {
          total += listGear[index]?.salePrice;
        } else {
          total += listGear[index]?.costPrice;
        }
      }
    }
    return total;
  };
  const DeleteGear = index => {
    let arrGear = [];
    let itemInArr = listCategories[index];
    let newList = listGear;
    newList[index] = itemInArr;
    setMoney(totalMoney());
    listGear.map(item => {
      if (!item.icon) {
        arrGear.push(item);
      }
    });
    dispatch(getChooseGearRequest(arrGear));
  };
  const addProductsToCart = () => {
    setIsLoading(true);
    let data = [];
    for (let index = 0; index < listGear.length; index++) {
      let item;
      if (!listGear[index].type) {
        item = listGear[index]._id;
        data.push(item);
      }
    }
    addProductsToCartApi({productIds: data})
      .then(res => {
        res && setIsLoading(false);
        setListGear(listCategories);
        setMoney(0);
        dispatch(getChooseGearRequest([]));
      })
      .catch(e => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Header title={'Build PC'} />
      <ScrollView
        contentContainerStyle={{
          paddingVertical: verticalScale(5),
        }}
        style={styles.body}
        showsVerticalScrollIndicator={false}>
        {listGear.map((item, index) => {
          return (
            <ItemChooseGear
              key={Math.random() * 10000}
              item={item}
              onOpenModal={() => {
                setListIndex(index);
                OpenModalChooseGear(index);
              }}
              onDelete={DeleteGear}
              index={index}
            />
          );
        })}
        <View style={styles.viewTotalPrice}>
          <Text style={styles.textTotalPrice}>Chi phí dự tính</Text>
          <Text style={styles.textSalePrice}>{formatMoney(money)}</Text>
        </View>
        <CustomButton
          containerStyles={styles.containerButton}
          title={'Thêm vào giỏ hàng'}
          onPress={addProductsToCart}
        />
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{flex: 1}}
          />
          <View style={styles.modalBody}>
            <Text style={styles.textTitle}>Chọn Gear yêu thích</Text>
            <ScrollView
              style={styles.scvProducts}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {listProduct.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => ChooseGear(item)}
                    style={styles.items}
                    key={item._id}>
                    <Image
                      source={{uri: item?.images[0]}}
                      resizeMode="cover"
                      style={styles.img}
                    />
                    <View style={styles.viewInfo}>
                      <Text style={styles.textName}>{item?.title}</Text>
                      {item?.salePercent && (
                        <View style={styles.viewCostPrice}>
                          <Text style={styles.textCostPrice}>
                            {formatMoney(item?.costPrice)}
                          </Text>
                          <Text style={styles.textSale}>
                            {item?.salePercent}%
                          </Text>
                        </View>
                      )}
                      <Text style={styles.textSalePrice}>
                        {formatMoney(item?.salePrice)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          {isLoading && (
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Lottie
                source={IMAGES.ANIMATION}
                autoPlay
                loop
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 11,
                  backgroundColor: 'rgba(64, 191, 255,0.2)',
                }}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Explore;
