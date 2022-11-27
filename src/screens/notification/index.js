import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {AppTheme} from '../../config/AppTheme';
import {scale} from '../../utils/scale';
import ItemNotifi from './components/ItemNotifi';

const renderItem = ({item}) => {
  return (
    <ItemNotifi
      title={item.title}
      description={item.description}
      date_created={item.createdAt}
    />
  );
};
const Notification = () => {
  return (
    <View style={styles.container}>
      <Header title="Thông báo" iconBack />
      <View style={styles.body}>
       {a && <FlatList
          renderItem={renderItem}
          data={a}
          keyExtractor={item => item._id}
        />}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
  },
  body: {
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: AppTheme.Colors.White,
    borderTopWidth: 0.5,
    borderColor : AppTheme.Colors.Dark
  },
});

const a = [
  {
    _id: '637b3415e52b7f233bddd050',
    user: '634d06bb7f673beaa60e0de3',
    title: 'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật',
    description:
      'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật thành trạng thái Processing',
    information: {
      order: '6356401fad4d7ce3c8dbcfdc',
    },
    type: 1,
    status: false,
    createdAt: '2022-11-21T08:17:25.580Z',
    updatedAt: '2022-11-21T08:17:25.580Z',
    __v: 0,
  },
  {
    _id: '637b3415e152b7f2331bddd050',
    user: '634d06bb7f673beaa60e0de3',
    title: 'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật',
    description:
      'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật thành trạng thái Processing',
    information: {
      order: '6356401fad4d7ce3c8dbcfdc',
    },
    type: 1,
    status: false,
    createdAt: '2022-11-21T08:17:25.580Z',
    updatedAt: '2022-11-21T08:17:25.580Z',
    __v: 0,
  },
  {
    _id: '637b13415e52b7f233bddd050',
    user: '634d06bb7f673beaa60e0de3',
    title: 'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật',
    description:
      'Đơn hàng #6356401fad4d7ce3c8dbcfdc đã được cập nhật thành trạng thái Processing',
    information: {
      order: '6356401fad4d7ce3c8dbcfdc',
    },
    type: 1,
    status: false,
    createdAt: '2022-11-21T08:17:25.580Z',
    updatedAt: '2022-11-21T08:17:25.580Z',
    __v: 0,
  },
];
