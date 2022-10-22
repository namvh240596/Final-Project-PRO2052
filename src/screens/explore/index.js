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
import {verticalScale} from '../../utils/scale';
import {DATA_PRODUCTS_CHOOSE} from '../../services/fakeApi/fakeAPI';
const Explore = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const [data, setData] = useState(initialValue);
  const OpenModalChooseGear = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);
  const ChooseGear = useCallback(
    index => {
      let arr = data;
      arr[index] = {
        id: 3,
        type: 'main',
        name: 'Bộ mạch chủ AZA',

        images: [
          'https://lh3.googleusercontent.com/QH2o8bOLn9ue8BgKtTGdQN-cYIpuY9wdQ8busetwVO4H3NwEnqXiV11jSyowRoKuDjkSr0sr4mzAa1o6CLE=w150-rw',
        ],
        count: 1,
        price: '123',
        currentPrice: '111',
        discount: '12',
      };
      setData(arr);
      setModalVisible(!modalVisible);
    },
    [data, modalVisible],
  );
  console.log(data);
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
            <ScrollView>
              {DATA_PRODUCTS_CHOOSE.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.items} key={item.id}>
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
];
