import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import {AppTheme} from '../../config/AppTheme';
import {scale} from '../../utils/scale';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Header title="Thông báo" iconBack />
      <View style={styles.body}>
        <Text>Notification</Text>
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
  },
});
