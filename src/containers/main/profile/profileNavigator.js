import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import profileScreen from './profileScreen';
import archive from './archive';
import discover from './discover';
import yourActivity from './yourActivity';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import images from 'res/images';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { Icon } from 'native-base';
import { DrawerContent } from './DrawerContent'

// export default function profileNavigator() {
//   const Stack = createStackNavigator();
//   const Drawer = createDrawerNavigator();

//   // const DrawerButton = (props) => {
//   //   return (
//   //     <View>
//   //       <TouchableOpacity onPress={() => { props.navigation.toggleDrawer }}>
//   //         <Image
//   //           source={images.list3}
//   //           style={{ width: 200, height: 80, resizeMode: 'contain' }}
//   //         />
//   //       </TouchableOpacity>
//   //     </View>
//   //   );
//   // };

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Profile"
//         component={profileScreen}
//         options={{
//           headerTitle: (
//             <TouchableOpacity
//               style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
//                 banana_Monke
//               </Text>
//             </TouchableOpacity>
//           ),
//           headerTitleStyle: {alignSelf: 'center'},
//           headerStyle: {
//             backgroundColor: colors.bottomBackGround,
//             shadowColor: colors.seperatorLineColor,
//           },
//           headerRight: () => (
//             <TouchableOpacity
           
//               onPress={ () =>{
//                   <Drawer.Navigator initialRouteName="Home">
//                     <Drawer.Screen name="Root"/>
//                     <Drawer.Screen name="Home"/>
//                   </Drawer.Navigator>
//               }
          
//             }
//             >
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginRight: 10,
//                 }}>
                  
//                 <Image
//                   source={images.list3}
//                   style={{resizeMode: 'contain', width: 25, height: 25}}
//                 />
//               </View>
//             </TouchableOpacity>
//           ),
//           headerLeft: () => (
//             <TouchableOpacity>
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginStart: 10,
//                 }}>
//                 <Image
//                   source={images.addIcon}
//                   style={{resizeMode: 'contain', width: 20, height: 20}}
//                 />
//               </View>
//             </TouchableOpacity>
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent = {props => <DrawerContent {...props} />}
    drawerPosition =  "right"
    drawerType = "back"
    drawerStyle={{
      backgroundColor: colors.bottomBackGround,
      width: 340,
    }}
    >
      
      <Drawer.Screen name = "Profile" component={profileScreen}/>
      
       {/* <Drawer.Screen name="Archive" component={archive} 
      options = {{
        drawerIcon: () => (
          <Icon name = "timer-outline" style = {{fontsize: 15, color: 'white'}}/>
        ),
      }} 
      /> */}
      <Drawer.Screen name="Your Activity" component={yourActivity} />

    </Drawer.Navigator>
  );
}

export default function profileNavigator ()
{
  return (
      <DrawerNavigator />
  );
}