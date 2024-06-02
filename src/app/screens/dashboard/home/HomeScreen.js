import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import {colors, pixel} from '../../../utils';

const HomeScreen = () => {
  return (
    <View
      style={{flex: 1, backgroundColor: colors.whiteColor, padding: pixel(10)}}>
      <HomeScreenHeader />
      {/* <Text>HomeScreen</Text */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
