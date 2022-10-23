import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Header from '../../components/header';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import {styles} from './styles';
import CustomButton from '../../components/customButton';
import ItemChooseGear from './components/ItemChooseGear';
import {scale, verticalScale} from '../../utils/scale';
import {DATA_PRODUCTS_CHOOSE} from '../../services/fakeApi/fakeAPI';
import {SvgXml} from 'react-native-svg';
const Explore = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const [type, setType] = useState('');
  const [data, setData] = useState(initialValue);
  const OpenModalChooseGear = useCallback(
    types => {
      setType(types);
      setModalVisible(!modalVisible);
    },
    [type],
  );
  const ChooseGear = useCallback(item => {}, [data, modalVisible]);
  const DeleteGear = useCallback(index => {}, [data, modalVisible]);
  return (
    <View style={styles.container}>
      <Header title={'Build PC'} />
      <ScrollView
        contentContainerStyle={{
          paddingVertical: verticalScale(5),
        }}
        style={styles.body}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemChooseGear
              key={item.id}
              item={item}
              onOpen={OpenModalChooseGear}
              onDelete={DeleteGear}
              index={index}
            />
          );
        })}
      </ScrollView>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View style={styles.iconClose}>
              <SvgXml
                onPress={() => setModalVisible(!modalVisible)}
                xml={AppIcon.IconClose}
                width={scale(24)}
                height={scale(24)}
              />
            </View>

            <ScrollView
              style={styles.scvProducts}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {DATA_PRODUCTS_CHOOSE.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => ChooseGear(item)}
                    style={styles.items}
                    key={item.id}>
                    <Image
                      source={{uri: item.images}}
                      resizeMode="cover"
                      style={styles.img}
                    />
                    <View style={styles.viewInfo}>
                      <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.textName}>{item.price}</Text>
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

const initialValue = [
  {
    id: 1,
    type: 'cpu',
    name: 'Vi xử lý',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
  {
    id: 2,
    type: 'ram',
    name: 'Bộ nhớ trong (RAM)',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
  {
    id: 3,
    type: 'main',
    name: 'Bộ mạch chủ (Main)',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
  {
    id: 4,
    type: 'Bộ nguồn',
    name: 'Vi xử lý',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
  {
    id: 5,
    type: 'Card đ',
    name: 'Card đồ hoạ',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
  {
    id: 6,
    type: 'main',
    name: 'Bộ mạch chủ (Main)',
    images: [
      'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
    ],
    count: -1,
    price: '',
    currentPrice: '',
    discount: '',
  },
];
