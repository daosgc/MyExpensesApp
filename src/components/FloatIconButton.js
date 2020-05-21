import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const FloatIconButton = ({ onPress }) => {
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touchableOpacityStyle}>
      <Image
          source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
        }}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
})

export default FloatIconButton;
