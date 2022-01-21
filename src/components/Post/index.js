import React from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post}) => {
  console.log(post, 'details');
  return (
    <View>
      <Header imageUri={post.userImageUri} name={post.userName} />
      <Body imageUri={post.postImageUri} />
      <Footer
        caption={post.caption}
        postedAt={post.postedAt}
        likesCount={post.likesCount}
      />
    </View>
  );
};

export default Post;
