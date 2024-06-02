import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, font, hp, pixel, wp} from '../../utils';
import {FormInput, PrimaryButon} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {CheckNetInfo} from '../../utils/netInfo';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Get Your daily needs {'\n'} within 30 minutes
        </Text>
        <CheckNetInfo />
        <View style={styles.subtitleContainer}>
          <View style={styles.line} />
          <Text style={styles.subtitle}>Login or Registration</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.icon} />
          <View style={styles.inputWrapper}>
            <FormInput
              placeholder="+91"
              color={colors.blackColor}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <PrimaryButon
          title={'Login with phone'}
          textStyles={styles.buttonText}
          onPress={() => {
            navigation.navigate('Verification');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(16),
    marginBottom: hp(20),
  },
  content: {
    width: '100%',
  },
  title: {
    ...font(600, 16),
    textAlign: 'center',
  },
  subtitleContainer: {
    marginVertical: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subtitle: {
    ...font(400, 14, 'grey'),
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp(10),
  },
  icon: {
    height: hp(40),
    width: wp(40),
    borderRadius: pixel(12),
    backgroundColor: 'red',
  },
  inputWrapper: {
    width: '80%',
  },
  buttonText: {
    ...font(400, 14, colors.whiteColor),
  },
  line: {borderWidth: 0.2, borderColor: 'grey', width: '25%', height: 0},
});

export default Welcome;
