import React from 'react';
import {View, Text} from 'react-native';

export default function UserBio() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginTop: 20,
      }}>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Baik Daytona</Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: 'white'}}>
          Eat banana banana eats eat banana eat cookie monke happy :)
        </Text>
      </View>
    </View>
  );
}
