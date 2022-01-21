import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
// const data = [
//   {
//     user: {
//       imageUri: 'https://connectingfreshers.com/photo3.jpg',
//       name: 'Srinu',
//     },
//     imageUri: 'https://connectingfreshers.com/photo2.jpg',
//     caption: 'Trying Instagram Clone!',
//     likesCount: 1000001,
//     postedAt: '6 minutes ago',
//   },
//   {
//     user: {
//       imageUri: 'https://connectingfreshers.com/photo2.jpg',
//       name: 'Purusottam',
//     },
//     imageUri: 'https://connectingfreshers.com/photo4.jpg',
//     caption: 'Trying Instagram Clone!',
//     likesCount: 1000001,
//     postedAt: '6 minutes ago',
//   },
//   {
//     user: {
//       imageUri: 'https://connectingfreshers.com/photo5.jpg',
//       name: 'SrinuMaripi',
//     },
//     imageUri: 'https://connectingfreshers.com/photo3.jpg',
//     caption: 'Trying Instagram Clone!',
//     likesCount: 1000001,
//     postedAt: '6 minutes ago',
//   },
//   {
//     user: {
//       imageUri: 'https://connectingfreshers.com/photo1.jpg',
//       name: 'Sri',
//     },
//     imageUri: 'https://connectingfreshers.com/photo1.jpg',
//     caption: 'Trying Instagram Clone!',
//     likesCount: 1000001,
//     postedAt: '6 minutes ago',
//   },
//   {
//     user: {
//       imageUri: 'https://connectingfreshers.com/photo4.jpg',
//       name: 'Vasa',
//     },
//     imageUri: 'https://connectingfreshers.com/photo5.jpg',
//     caption: 'Trying Instagram Clone!',
//     likesCount: 1000001,
//     postedAt: '6 minutes ago',
//   },
// ];

const Feed = () => {
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
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
