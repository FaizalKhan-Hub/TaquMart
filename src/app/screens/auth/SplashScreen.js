import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../utils';
import {mart} from '../../../assets';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={mart} resizeMode="contain" style={styles.image} />
    </View>
  );
};

export default SplashScreen;

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
});
