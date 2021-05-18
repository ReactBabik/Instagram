import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import palette from 'res/palette';
import LinearGradient from 'react-native-linear-gradient';


export default function yourActivity() {
  return (
    <View style={palette.container.center}>
      <Text style={palette.text}>Your Activity</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //marginEnd: 15,
    marginTop: 15,
    marginHorizontal: 5
    
  },
  actionIcons: {
    width: 23,
    height: 23,
    marginStart: 15,
  },
});