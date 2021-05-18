import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Post from './post/Post';
import colors from '../../../res/colors';
import { Text } from 'react-native';
import { Image } from 'react-native';
import images from 'res/images';
import StoryContainer from './story/StoryContainer';
import realm, {
  AddComment,
  getAllInfo,
  AddLikes,
  AddPost,
  deleteAllPost,
  deleteDataAboveOne,
  deleteAPost
} from '../home/post/database'

export default function homeScreen({ navigation }) {
  // const data = [
  //   {key: '1'},
  //   {key: '2'},
  //   {key: '3'},
  //   {key: '4'},
  //   {key: '5'},  Working code 
  //   {key: '6'},
  //   {key: '7'},
  //   {key: '8'},
  //   {key: '9'},
  //   {key: '10'},
  // ];
  var string = "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz testthis is a testthis is a testthis is a test";
  const post = {
    userName: 'John Daytona',
    placeName: 'Istanbul, Turkey',
    imgUrl: 'https://picsum.photos/422',
    likeCount: 101,
    commentCount: 20,
    text: 'Jackooowaahwaah',
    publishDate: new Date().toDateString(),
  };
  const storyOnPress = () => navigation.navigate('StoryScreen');
  const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState([]);
  //AddPost(post.userName, string , post.imgUrl);
  const [data, setData] = useState(getAllInfo());
  //deleteDataAboveOne();
  //AddComment("Big bubba rollin", 2);
  console.log(data);
  //deleteAPost(2);
  //AddLikes(1);
  //AddComment(post.text, 1);


  //  useEffect(() => {
  //    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
  //      .then((response) => response.json())
  //      .then((json) => setData(json))
  //      .catch((error) => console.error(error))
  //      .finally(() => setLoading(false));
  //  }, []);
  //test code end
  var strlen = string.length;

  const stories = [
    {
      key: 'JohnDoe',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'CarlaCoe',
      hasStory: true,
      src: 'https://picsum.photos/601',
    },
    {
      key: 'DonnaDoe',
      hasStory: true,
      src: 'https://picsum.photos/602',
    },
    {
      key: 'Juan',
      hasStory: true,
      src: 'https://picsum.photos/603',
    },
    {
      key: 'Martin',
      hasStory: true,
      src: 'https://picsum.photos/604',
    },
    {
      key: 'Paul',
      hasStory: true,
      src: 'https://picsum.photos/605',
    },
  ];

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={data}
      ListHeaderComponent={() => (
        <StoryContainer stories={stories} storyOnPress={storyOnPress} />
      )}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Post post={item} />
      )}
    />
  );
}
