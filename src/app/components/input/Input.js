import React from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { hp, wp, colors, font } from "../../utils";

function Input(props) {
  let {
    placeholder = "Enter the Placeholder",
    keyboardType = Platform.OS === "android" ? "ascii-capable" : "ascii-capable",
    LeftIcon = null,
    IconRight = null,
    IconFront = false,
    label = null,
    RightIconPress,
    secureEntry = null,
    autoCapitalize = "none",
    edit = true,
    color = colors.primaryColor1,
    containerStyle = {},
    multiline = false,
    minHeight = hp(40),
    errorBorder = {},
    maxLength,
    secureTextEntry = false,
    labelText = { ...font(400, 14, colors.discriptionColor), marginBottom: 4 },
  } = props;
  const { onChangeText, onBlur, onChange, onFocus, autoFocus, value, error, onInputPress } = props;

  // Styles
  const styles = getThemedStyles(colors, error, color, edit);

  //Conditions
  if (error) {
    // color = colors.primaryColor1;
  }

  return (
    <>
      {label && <Text style={labelText}>{label}</Text>}
      <TouchableOpacity
        onPress={onInputPress}
        style={[styles.container, { minHeight: minHeight }, errorBorder]}
      >
        <TextInput
          onChangeText={onChangeText}
          onBlur={onBlur}
          style={[styles.input, containerStyle]}
          placeholder={placeholder}
          placeholderTextColor={color}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize || "none"}
          value={value}
          editable={edit}
          onChange={onChange}
          autoFocus={autoFocus}
          onFocus={onFocus}
          multiline={multiline}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
        />
        {IconRight && (
          <TouchableOpacity style={styles.iconStyle} onPress={RightIconPress}>
            <IconRight
              style={{
                marginRight: IconFront ? 10 : 0,
                justifyContent: "flex-end",
              }}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </>
  );
}

// set the styles of the input component
function getThemedStyles(colors, error, color, edit) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 5,
      borderWidth: 0.5,
      borderRadius: 10,
      marginVertical: hp(2),
      backgroundColor: colors.textInputColor,
      borderColor: colors.textInputColor,
    },
    iconColor: { stroke: error ? colors.primaryColor1 : color },
    input: [
      {
        color: colors.primaryColor1,
        flex: 1,
        height: "100%",
        padding: 0,
        paddingLeft: wp(14),
        paddingRight: wp(14),
        ...font(400, 15, "#003970"),
      },
    ],
    iconStyle: {
      paddingHorizontal: 10,
    },
    // labelText: { marginBottom: hp(8) },
  });
}

export default Input;
