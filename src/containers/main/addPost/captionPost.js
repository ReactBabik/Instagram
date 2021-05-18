import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native';
import palette from 'res/palette';
import colors from 'res/colors'
import LinearGradient from 'react-native-linear-gradient';
import { url } from './addPostScreen';
import { Avatar } from 'react-native-paper';
import realm, {
    AddComment,
    getAllInfo,
    AddLikes,
    AddPost,
    deleteAllPost,
    deleteDataAboveOne,
    deleteAPost
} from '../home/post/database';

export var textCaption;


export default function postCaption() {
    const [caption, setCaption] = useState('');
    const changeHandler = (value) => {
        setCaption(value);
        textCaption = value;
        console.log(value);
    }
    return (
        <TouchableWithoutFeedback onPress={() => {

            Keyboard.dismiss();

        }}>
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <View style={Styles.container}>
                    <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://picsum.photos/600'
                            }}
                            size={44}
                        />
                    </View>
                    <View style = {Styles.input}>
                        <TextInput
                        style = {Styles.Textinput}
                        placeholder="Write a caption..."
                        onChangeText={changeHandler}
                        placeholderTextColor='#B2BEB5'
                        />
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginTop: 15, marginRight: 10 }}>
                        <Image
                            style={{ width: 50, height: 50, borderWidth: 15 }}
                            source={{ uri: url }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#262626',
                        height: 1,
                        justifyContent: 'center',
                        marginTop: 10,
                    }}></View>
                <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Tag People</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#262626',
                        height: 1,
                        justifyContent: 'center',
                        marginTop: 20,
                    }}></View>
                    <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Add Location</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#262626',
                        height: 1,
                        justifyContent: 'center',
                        marginTop: 20,
                    }}></View>
                    <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Also post to</Text>
                </View>
                <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Facebook</Text>
                </View>
                <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Twitter</Text>
                </View>
                <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'white', fontSize: 20}}>Tumblr</Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#262626',
                        height: 1,
                        justifyContent: 'center',
                        marginTop: 30,
                    }}></View>
                    <View style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 20 }}>
                    <Text style = {{color: 'gray', fontSize: 15}}>Advanced Settings</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    actionIcons: {
        width: 23,
        height: 23,
        marginStart: 15,
    },

    input: {
        //borderBottomWidth: 2,
        //borderBottomColor: '#ddd',
        //borderColor: '#bbb',
        //borderWidth: 1,
        marginTop: 5,
        borderRadius: 5,
        marginHorizontal: 20,
        fontSize: 40,
        flexDirection: 'column',
        flex: 1,
    },

    Textinput: {
        flex: 1,
        color: 'white',
        fontSize: 20
    },

    firstRow: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: colors.background,
        flexDirection: 'row',
    },
});