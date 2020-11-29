import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.testDesign}>{name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  testDesign: {
    fontWeight: 'bold',
  },
});
