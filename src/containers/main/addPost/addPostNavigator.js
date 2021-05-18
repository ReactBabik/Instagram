import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addAPostScreen, {url} from './addPostScreen';
import colors from 'res/colors';
import {View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import postCaption from './captionPost';
import realm, {
  AddComment,
  getAllInfo,
  AddLikes,
  AddPost,
  deleteAllPost,
  deleteDataAboveOne,
  deleteAPost
} from '../home/post/database';
import {textCaption} from './captionPost'

export default function addPostNavigator() {
  const Stack = createStackNavigator();
  const addPost = () => {
    AddPost("Babik Ayaz", textCaption, url);
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Post"
        component={addAPostScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
              Add Post
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('New Post')}>
              <View style = {{marginRight: 10}}>
                <Image
                  style={{ width: 10, height: 10, borderWidth: 15 }}
                  source={require('/Work/react/Instagram/assets/right-arrows-icon.png')}
                />
              </View>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
        })}
      />
      <Stack.Screen 
      name = "New Post"
      component = {postCaption}
      options={({ navigation }) => ({
        //headerTransparent: true,
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            
            {/* () => navigation.goBack() */}
            <TouchableOpacity onPress={addPost()}>
            <Image
              style={{ width: 30, height: 40, borderWidth: 10 }}
              source={require('/Work/react/Instagram/assets/right-arrows-icon.png')}
            />
            </TouchableOpacity>
          </View>
        ),
       
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              {/* <Text style = {{fontSize: 20}}> {'-->'} </Text> */}
              <Image
                style={{ width: 10, height: 10, borderWidth: 15 }}
                source={require('/Work/react/Instagram/assets/back_arrow.jpg')}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: 'white'
        }
      })}
      />
    </Stack.Navigator>
  );
}
