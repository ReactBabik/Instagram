import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import images from 'res/images';




export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source={{
                                    uri: 'https://picsum.photos/600'
                                }}
                                size={50}
                            />
                            <View>
                                <Title style={styles.title}>Monke Man</Title>

                                <Caption style={styles.caption}>@monke_man</Caption>
                            </View>

                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#262626',
                            height: 1,
                            justifyContent: 'center',
                            marginTop: 10,
                        }}></View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        {/* <Icon style={{color: 'white', fontSize: 30, marginHorizontal: 10}} name='location-outline' color='white'/> */}
                        <Image source={images.grid} style={styles.iconStyle} />

                        <Text style={styles.sideMenuOptions}>Archive</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Icon style={{ color: 'white', fontSize: 30, marginHorizontal: 10 }} name='location-outline' />
                        <Text style={styles.sideMenuOptions}>Your Activity</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Icon style={{ color: 'white', fontSize: 30, marginHorizontal: 10 }} name='location-outline' />
                        <Text style={styles.sideMenuOptions}>QR Code</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Icon style={{ color: 'white', fontSize: 30, marginHorizontal: 10 }} name='location-outline' />
                        <Text style={styles.sideMenuOptions}>Saved</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Icon style={{ color: 'white', fontSize: 30, marginHorizontal: 10 }} name='location-outline' />
                        <Text style={styles.sideMenuOptions}>Close Friends</Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Icon style={{ color: 'white', fontSize: 30, marginHorizontal: 10 }} name='location-outline' />
                        <Text style={styles.sideMenuOptions}>Discover People</Text>
                    </View>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name='settings-outline'
                            style={{ color: 'white' }}
                        />
                    )}
                    label={() => (
                        <Text style={styles.sideMenuOptions}>Settings</Text>
                    )}
                    color='white'
                    onPress={() => { }}
                />

            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({

    sideMenuOptions: {
        color: 'white',
        fontSize: 23
    },

    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,

    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white',


    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    iconStyle: {
        width: 18,
        height: 18,
        marginTop: 8,
        marginHorizontal: 10,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 1,
        borderTopColor: '#262626',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    icon: {
        fontSize: 20,
        color: '#0092ff',
        flex: 1,
        marginLeft: 4
    },
});