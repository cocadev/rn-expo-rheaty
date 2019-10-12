import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import text from './common/text';
import { colors } from './common/colors';
import { images } from './common/images';

const width = Dimensions.get('window').width

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={styles.container}>
              
              <View style={{flex:3, justifyContent:'center', backgroundColor:'#eaf7f8'}}>
                 <TouchableOpacity onPress={()=>Actions.profile()} style={{flexDirection:'row', alignItems:'center', marginLeft: 25,marginTop: 15,}}>
                     <Image source={images.img_user2} style={styles.avatar}/>
                     <Text style={[text.m_13_dark,{ marginLeft:16}]}>JANE DOE</Text>
                 </TouchableOpacity>
                 <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end', marginTop: 5, right:10}}>
                     <Image source={images.icon_edit} style={{width:12, height:12, marginHorizontal:6}}/>
                     <Text style={text.m_10_dark2}>EDIT</Text>
                 </View>
              </View>

              <View style={{flex:12, backgroundColor:'#fff', paddingLeft:width/12}}>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.wall()} >
                    <Image source={images.icon_home} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.notification()}>
                    <Image source={images.icon_sheet} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>ORDERS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Image source={images.icon_gift} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>PROMOTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Image source={images.icon_setting} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>SETTINGS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.inbox()}>
                    <Image source={images.icon_doc} style={{width:16, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>TERMS AND CONDITIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Image source={images.icon_users} style={{width:18, height:16}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>INVITE YOUR FRIEND</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.signin()} style={styles.menu}>
                    <Image source={images.icon_roundback} style={{width:20, height:15}}/>
                    <Text style={[text.m_15_dark, {marginLeft:20}]}>LOGOUT</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:2, justifyContent:'center', alignItems:'center', backgroundColor:'#eaf7f8'}}>
                 <View style={styles.button}>
                     <Text style={text.m_10_dark_w}>BECOME A SERVICE PROVIDER</Text>
                 </View>
              </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#111',
        paddingTop: 24,
    },
    button:{
        backgroundColor:colors.RED, 
        justifyContent:'center', 
        alignItems: 'center', 
        borderRadius:20,
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    avatar:{
        width:width/6,
        height:width/6,
        borderRadius:width/12
    },
    menu:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical:width/20, 
        borderBottomColor: colors.GREY4, 
        borderBottomWidth: 1,
    }

});