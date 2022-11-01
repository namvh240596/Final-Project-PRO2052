import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('token error ', error);
  }
};

export const setToken = async token => {
  await AsyncStorage.setItem('token', JSON.stringify(token));
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log('token error ', error);
  }
};
