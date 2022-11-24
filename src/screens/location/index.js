import {
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Platform,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import CustomTextInput from '../../components/customTextInput';
import AppIcon from '../../assets/icons';
import useDebounce from '../../helpers/debounce';
import {scale} from '../../utils/scale';
import Header from '../../components/header';
import CustomButton from '../../components/customButton';
import axios, {Axios} from 'axios';

const API_KEY = 'H5CAX9nvSie1tiNgXBXcxBdHifB62bDDzFGziglw';

const Location = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 16.0799812,
    longitude: 108.2193428,
  });
  const [makerPosition, setMakerPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [value, setValue] = useState('');
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState('');
  const debouncedValue = useDebounce(place, 300);
  const [disabledButton, setDisabledButton] = useState(true);
  const [selectionTextInput, setSelectionTextInput] = useState({});
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const opacityStyle = disabledButton ? scale(0.3) : scale(1);
  const [isFocus, setIsFocus] = useState(false);
  const getPlacess = text => {
    setPlace(text);
    setValue(text);
    setDisabledButton(true);
  };

  useEffect(() => {
    axios
      .get(
        `https://rsapi.goong.io/Place/AutoComplete?api_key=${API_KEY}&input=${debouncedValue}`,
      )
      .then(res => {
        setPlaces(res.data.predictions);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, [debouncedValue, place]);

  const findPlace = useCallback(id => {
    getPlaceDetailApi(id)
      .then(res => {
        setRegion({
          latitude: res?.result?.geometry?.location?.lat,
          longitude: res?.result?.geometry?.location?.lng,
        });
        setMakerPosition({
          latitude: res?.result?.geometry?.location?.lat,
          longitude: res?.result?.geometry?.location?.lng,
        });
        if (Platform.OS === 'android') {
          setSelectionTextInput({start: 0});
        }
        setPlaces([]);
        Keyboard.dismiss();
      })
      .catch(e => {
        console.log('Error', e);
      });
  }, []);

  const onAddAddressToProfile = () => {};

  const onBackCurrentPosition = () => {
    Geolocation.getCurrentPosition(pos => {
      setRegion({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });

      axios
        .get(
          `https://rsapi.goong.io/Geocode?latlng=${pos.coords.latitude},${pos.coords.longitude}&api_key=${API_KEY}`,
        )
        .then(res => {
          console.log('res ',res);
          setValue(res.results[0].formatted_address);
          setRegion({
            latitude: res.results[0].geometry.location.lat,
            longitude: res.results[0].geometry.location.lng,
          });
          setMakerPosition({
            latitude: res.results[0].geometry.location.lat,
            longitude: res.results[0].geometry.location.lng,
          });
         
          // Keyboard.dismiss();
        })
        .catch(e => {
          console.log('Error', e);
        });
    });
    setDisabledButton(false);
  };

  const onFocus = useCallback(() => {
    setIsFocus(true);
    if (Platform.OS === 'android') {
      // setSelectionTextInput({selection: null});
    }
  }, []);

  const onBlur = useCallback(() => {
    if (Platform.OS === 'android') {
      // setSelectionTextInput({selection: {start: 0, end: 0}});
    }
  }, []);
  const onChooseAddress = useCallback(item => {}, []);

  return (
    <View style={styles.container}>
      <Header
        title="Chon vi tri"
        iconBack={true}
        //   containerStyle={styles.headerStyle}
      />

      <View>
        <CustomTextInput
          value={value}
          onChangeText={text => getPlacess(text)}
          placeholder={location.address ? location.address : 'Chọn địa điểm'}
          containerStyle={styles.textInputContainer}
          inputStyle={styles.inputStyle}
          leftInputComponent={
            <SvgXml
              xml={AppIcon.IconSearch}
              width={scale(24)}
              height={scale(24)}
              style={styles.iconSearch}
            />
          }
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          onEndEditing={() => setIsFocus(false)}
          selection={Platform.OS === 'android' ? selectionTextInput : null}
        />
        {places && (
          <View style={styles.listPlaces}>
            {places?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemPlaces}
                onPress={() => {
                  setValue(item.description);
                  findPlace(item.place_id);
                  setDisabledButton(false);
                }}>
                <SvgXml
                  xml={AppIcon.IconAddress}
                  width={scale(20)}
                  height={scale(20)}
                />
                <Text key={index} style={styles.textPlaces}>
                  {/* {item.description} */}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <MapView
          style={styles.mapViewContainer}
          showsUserLocation={true}
          userInterfaceStyle={'light'}
          showsMyLocationButton={true}
          region={{
            latitude: region.latitude,
            longitude: region.latitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.latitude,
            }}>
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>

      <View style={styles.viewFooter}>
        <TouchableOpacity
          style={styles.viewCurrentPosition}
          onPress={() => onBackCurrentPosition()}>
          <SvgXml
            xml={AppIcon.IconCustom}
            width={scale(30)}
            height={scale(30)}
          />
        </TouchableOpacity>
        <CustomButton
          // title={LABEL.SAVE_ADDRESS[lang]}
          // containerStyle={[
          //   styles.buttonContainerStyle,
          //   {opacity: opacityStyle},
          // ]}
          // onPress={onAddAddressToProfile}
          // disabled={disabledButton}
          // textStyle={styles.textBtnStyle}
          title="Chon"
        />
      </View>
    </View>
  );
};

export default Location;
