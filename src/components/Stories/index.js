import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Story from '../Story';
const data = [
  {
    imageUri: 'https://connectingfreshers.com/photo1.jpg',
    name: 'Sri',
  },
  {
    imageUri: 'https://connectingfreshers.com/photo2.jpg',
    name: 'Purusottam',
  },
  {
    imageUri: 'https://connectingfreshers.com/photo3.jpg',
    name: 'Srinu',
  },
  {
    imageUri: 'https://connectingfreshers.com/photo4.jpg',
    name: 'Vasa',
  },
  {
    imageUri: 'https://connectingfreshers.com/photo5.jpg',
    name: 'Rao',
  },
  {
    imageUri: 'https://connectingfreshers.com/story2.jpg',
    name: 'SrinuMaripi',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
