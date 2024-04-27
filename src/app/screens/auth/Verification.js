import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {PrimaryButon} from '../../components';
import {colors, font, hp, wp} from '../../utils';

const Verification = () => {
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleTextChange = (index, txt) => {
    if (txt.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (txt.length !== 1 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{...font(600, 16)}}>Phone Verification</Text>
      <Text style={{...font(400, 12, 'grey'), marginVertical: hp(20)}}>
        We've sent OTP in 876467XXXX via sms, please enter received code
      </Text>
      <View style={styles.inputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.input}
            placeholder=""
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={txt => handleTextChange(index, txt)}
          />
        ))}
      </View>
      <Text style={{...font(400, 14), marginBottom: hp(10)}}>
        Resend again in {timer} seconds
      </Text>
      <PrimaryButon title={'Verify code'} />
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(16),
    marginBottom: hp(20),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '89%',
    marginVertical: hp(20),
    height: 50,
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 12,
    width: wp(40),
    color: colors.blackColor,
    textAlign: 'center',
  },
});
