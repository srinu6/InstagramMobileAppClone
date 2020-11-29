import React from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        caption={post.caption}
        postedAt={post.postedAt}
        likesCount={post.likesCount}
      />
    </View>
  );
};

export default Post;
