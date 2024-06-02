import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {noInternet} from '../../assets';
import {hp, wp} from './dimension';
import font from './font';

export const CheckNetInfo = ({children}) => {
  const netInfo = useNetInfo();

  return netInfo.isConnected ? (
    <>{children}</>
  ) : (
    <View style={styles.container}>
      <Image source={noInternet} resizeMode="contain" style={styles.image} />
      <Text style={styles.text}>No Internet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: hp(300),
    width: wp(250),
  },
  text: {
    ...font(600, 30),
  },
});
