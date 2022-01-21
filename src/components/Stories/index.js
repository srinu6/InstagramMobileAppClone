import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Story from '../Story';
// const data = [
//   {
//     imageUri: 'https://connectingfreshers.com/photo1.jpg',
//     name: 'Sri',
//   },
//   {
//     imageUri: 'https://connectingfreshers.com/photo2.jpg',
//     name: 'Purusottam',
//   },
//   {
//     imageUri: 'https://connectingfreshers.com/photo3.jpg',
//     name: 'Srinu',
//   },
//   {
//     imageUri: 'https://connectingfreshers.com/photo4.jpg',
//     name: 'Vasa',
//   },
//   {
//     imageUri: 'https://connectingfreshers.com/photo5.jpg',
//     name: 'Rao',
//   },
//   {
//     imageUri: 'https://connectingfreshers.com/story2.jpg',
//     name: 'SrinuMaripi',
//   },
// ];

const Stories = () => {
  const [totalData, setTotalData] = useState([{}]);
  useEffect(() => {
    fetch('http://localhost:3000/api/userData/')
      .then((userData) => userData.json())
      .then((d) => setTotalData(d))
      .catch((e) => {
        console.log(e, 'error');
      });
  }, []);
  return (
    <FlatList
      data={totalData}
      keyExtractor={({name}) => name}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.userImageUri} name={item.userName} />
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
