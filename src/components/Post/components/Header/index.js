import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';


const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
    <View style={styles.left}>
       <ProfilePicture uri={imageUri} size={40} />
       <Text style={styles.testDesign}>{name}</Text>   
    </View> 
    <View style={styles.right} >
       <Icon name="dots-three-vertical" size={16} />
    </View>
     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent:'space-between'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginRight: 15
  },
  testDesign: {
    fontWeight: 'bold',
  },
});
