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
import {
  getListCategoriesSelector,
  getListGearToCategoriesSelector,
} from '../../redux/categories/selector';
import {
  getChooseGearRequest,
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

const Explore = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const [listGear, setListGear] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();
  const listCategories = useSelector(getListCategoriesSelector);
  useEffect(() => {
    // dispatch(getListCategoriesRequest());
    setListGear(listCategories);
  }, []);

  const OpenModalChooseGear = useCallback(
    index => {
      let type;
      if (type) {
        type = listCategories[index].type;
      } else {
        type = listGear[index].category.type;
      }
      getAllProductsByTypeApi(type)
        .then(res => {
          setListProduct(res.data);
        })
        .catch(e => console.log('errors ', e));
      setModalVisible(true);
    },
    [modalVisible, listIndex, listProduct, listGear],
  );

  const ChooseGear = useCallback(
    item => {
      setModalVisible(false);
      let newList = listGear;
      newList[listIndex] = item;
      setMoney(totalMoney());
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
    let itemInArr = listCategories[index];
    let newList = listGear;
    newList[index] = itemInArr;
    setListGear(newList);
    setMoney(totalMoney());
  };
  console.log('list gear ', listGear);
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
              onDelete={() => DeleteGear(index)}
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
        />
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View style={styles.iconClose}>
              <SvgXml
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setListProduct([]);
                }}
                xml={AppIcon.IconClose}
                width={scale(24)}
                height={scale(24)}
              />
            </View>

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
        </View>
      </Modal>
    </View>
  );
};

export default Explore;
