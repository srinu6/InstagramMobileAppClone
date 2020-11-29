import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({likesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.captionStyle}>{caption}</Text>
      <Text style={styles.postedStyle}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  captionStyle: {
    margin: 3,
  },
  postedStyle: {
    color: '#8c8c8c',
  },
});
