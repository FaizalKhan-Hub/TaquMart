import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../../../utils/vectorIcons';
import {colors, pixel, font} from '../../../utils';

const HomeScreenHeader = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <VectorIcon
          name={'map-marker-outline'}
          style={{fontSize: pixel(32), color: colors.blackColor}}
          isMaterialCommunityIcon
        />
        <Text style={{...font(600, 22, colors.blackColor)}}>Pin code</Text>
        <VectorIcon
          name={'menu-down'}
          style={{fontSize: pixel(32), color: colors.blackColor}}
          isMaterialCommunityIcon
        />
      </View>
      <Text style={{...font(400, 18, 'grey')}}>C20 , Arjun Park Najafgarh</Text>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({});
