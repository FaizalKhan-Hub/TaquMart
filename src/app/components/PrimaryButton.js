import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

// Components
import Ripple from 'react-native-material-ripple';
import {IS_ANDROID, colors, hp, dimens, pixel} from '../utils';

function PrimaryButton({
  onPress,
  title,
  Icon,
  image = null,
  loading = false,
  disabled = false,
  buttonStyles = {},
  textStyles = {},
  loadingColor = colors.primaryColor1,
  checkout = null,
}) {
  const disabledBackground = disabled
    ? {backgroundColor: colors.textInputColor, opacity: 1}
    : {};

  return (
    <Ripple
      style={[styles.button, buttonStyles, disabledBackground]}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.buttonBoxStyle}>
        {Icon && <Icon style={{marginRight: 10}} />}
        {image && (
          <Image
            source={image}
            resizeMode="contain"
            style={styles.imageStyleBox}
          />
        )}
        {loading ? (
          <ActivityIndicator
            color={loadingColor}
            size={dimens.width > 800 ? 'large' : 'small'}
          />
        ) : (
          <Text style={[styles.buttonText, textStyles]}>
            {title} {checkout ? <Text> {checkout}</Text> : null}
          </Text>
        )}
      </View>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  imageStyleBox: {marginRight: 4, width: 20, height: 20},
  buttonBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: IS_ANDROID ? 2 : 0,
    alignItems: 'center',
    height: hp(48),
    justifyContent: 'center',
    backgroundColor: colors.mainColor,
  },
  buttonText: {
    // ...font(600, 12, colors.primaryColor1),
    fontWeight: '600',
    fontSize: pixel(12),
    color: colors.primaryColor,
    textAlign: 'center',
  },
});

PrimaryButton.defaultProps = {
  onPress: () => {},
};

export default PrimaryButton;
