import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const Footer = ({likesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
        <View style={styles.iconsStyle}>
            <View style={styles.iconStyle}>
                <ADIcon name="hearto" size={25} color={"#545454"} />
                <FontistoIcon name="comment" size={23} color={"#545454"} />
                <IoniconsIcon name="paper-plane-outline" size={27} color={"#545454"} />
            </View>
           <View style={styles.right}>
            <FAIcon name="bookmark-o" size={25} /> 
           </View>
            
        </View>
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
  iconStyle: {
    flexDirection: 'row',
    width:120,
    justifyContent:'space-between'
  },
  iconsStyle: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  right: {
    marginRight:8
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
