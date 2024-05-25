import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const VectorIcon = ({
  name,
  isMaterialCommunityIcon = false,
  onPress,
  style,
}) => {
  return isMaterialCommunityIcon ? (
    <MaterialIcon name={name} style={style} onPress={onPress} />
  ) : (
    <Icon name={name} style={style} onPress={onPress} />
  );
};

export default VectorIcon;
