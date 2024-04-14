import { Text, View } from "react-native";
import React from "react";

// Components
import Input from "./Input";
import font from "../../utils/font";

// input for forms
function FormInput(props) {
  let { containerBoxStyle = {} } = props;

  const { error } = props;
  const { errorMessage } = props;

  return (
    <View style={containerBoxStyle}>
      <Input {...props} />

      {error ? <Text style={{ ...font(400, 14, "red") }}>{errorMessage}</Text> : null}
    </View>
  );
}

export default FormInput;
