import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image source={{uri}} style={[styles.img, {width: size, height: size}]} />
    </View>
  );
};
export default ProfilePicture;
const styles = StyleSheet.create({
  container: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 45,
    borderColor: '#ae22e0',
  },
  img: {
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
});
