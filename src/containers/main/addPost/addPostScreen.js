import React, { Fragment, Component } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import colors from 'res/colors';
import { getAllInfo, AddPost } from '../home/post/database';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddPostInDB extends Component {
  AddPostIntoDatabase = () =>{
    //console.log('press');
    return (
      <View >
        <Text >Hello</Text>
      </View>
      );
  }
  //render() {this.AddPostIntoDatabase()}
}
export var url;

export default class addAPostScreen extends Component {
  constructor(props) {
    super(props)
    //Obj = new AddPostInDB();
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: ''
    }
    
    
  }

  CallAddPostIntoDatabase  ()  {
   new AddPostInDB().AddPostIntoDatabase();
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //     alert(response.customButton);
    //   } else {
    //     const source = { uri: response.uri };

    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //     // alert(JSON.stringify(response));s
    //     console.log('response', JSON.stringify(response));
    //     this.setState({
    //       filePath: response,
    //       fileData: response.data,
    //       fileUri: response.uri
    //     });
    //   }
    // });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        url = response.uri;
        console.log('Image url is: >>>>>>>>>>>>>>>>>>>>>>' , url );
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
       // this.AddPostIntoDatabase();
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
    return <Image source={{uri: 'https://raw.githubusercontent.com/AdityaGour/reactNative-ImagePicker/master/assets/galeryImages.jpg'}}
        style={styles.images}
      />
    }
  }

//   showTextInput = () => {
//     console.log('Pressed Text Input');
// return(
//        <View >
//         <Text >Hello</Text>
//       </View>
// );
    
//   }

  // renderTextInput = () => {
  //   // return (
  //   //   <View >
  //   //     <Text >Hello</Text>
  //   //   </View>
  //   //   );
  //   this.showTextInput();
  // }

  renderFileUri() {
    //console.log('renderFileUri Called');
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
      source={{uri: 'https://raw.githubusercontent.com/AdityaGour/reactNative-ImagePicker/master/assets/dummy.png'}}
        style={styles.images}
      />
    }
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            <Text style={{textAlign:'center',color: 'white',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
            <View style={styles.ImageSections}>
              {/* <View>
                {this.renderFileData()}
                <Text  style={{textAlign:'center', color: 'white'}}>Base 64 String</Text>
              </View> */}
              <View>
                
                {this.renderFileUri()}
                <Text style={{textAlign:'center', color: 'white'}}>Upload File</Text>
                
              </View>
            </View>

            <View style={styles.btnParentSection}>
              {/* <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                <Text style={styles.btnText}>Choose File</Text>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
                <Text style={styles.btnText}>Directly Launch Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                <Text style={styles.btnText}>Directly Launch Image Library</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={this.renderTextInput} style={styles.btnSection}  >
                <Text style={styles.btnText}>Upload Post</Text>
              </TouchableOpacity> */}
            </View>

          </View>
        </SafeAreaView>
      </Fragment>

    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.bottomBackGround,
  },

  body: {
    backgroundColor: '#000',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }
});