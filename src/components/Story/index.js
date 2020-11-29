import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfilePicture from '../ProfilePicture';

const Story = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.textCenter}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
});
