import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('../img/baby3.jpg')}
      >
        <View style={styles.headercontainer}>
            <View style={styles.profilecontainer}>
                <Image 
                    style={styles.mypic}
                    source={require('../img/me.jpg')}
                />
            </View>
            <Text style={styles.name}>Noize Code</Text>
            <Text style={styles.liner}>newbie fun coder</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    headerbg: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headercontainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    profilecontainer:{
        width: 180,
        height:180,
    },
    mypic:{
        flex:1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name:{
        marginTop: 18,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    liner:{
        color:'#fff',
        marginTop:5,
        fontSize: 15,
        fontStyle: 'italic',
    },
});