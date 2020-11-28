import React from 'react'
import {Image} from 'react-native'

const ProfilePicture =()=>{
    return(
      <Image source={{ uri: ''}} style={styles.img} />  
    )
    
}

const styles = StyleSheet.create({
    img:{
        width:80,
        height:80
    }
})