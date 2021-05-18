import React, { useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import palette from 'res/palette';
import images from 'res/images';
import colors from 'res/colors';
import PostImage from './PostImage';

export default function PostHeader({post}) {

  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.nameContainer}>
        <Image
          source={{uri: post.imgUrl}}
          style={Styles.personImage}
        />  
        <View>
        {/* {data.articles[0].title} */}
        
          <Text style={Styles.personName}> {post.username}  </Text>
          <Text style={Styles.placeName}> {post.placeName} </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={images.more} style={Styles.iconMore} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  personName: {
    color: colors.text,
    marginStart: 10,
    fontWeight: 'bold',
  },
  placeName: {
    color: colors.text,
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 15,
  },
});
