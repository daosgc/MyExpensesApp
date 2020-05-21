import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const DrawerHeaderButton = ({ navigation }) => {
  return(
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon type="Entypo" name='dots-three-vertical' style={{color: '#ffff'}}/>
    </TouchableOpacity>
  )
};

export default DrawerHeaderButton;
