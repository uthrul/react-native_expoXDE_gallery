import React, { Component } from 'react';
import { 
     View, Text, StyleSheet, 
     ScrollView, Image, Dimensions
    } from 'react-native';

export default class Body extends Component {
  render() {
    return (
        <ScrollView>
            <View style={styles.bigview}>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/baby5.jpg')}
                    />
                </View>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/baby.jpg')}
                    />
                </View>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/baby4.jpg')}
                    />
                </View>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/me1.jpg')}
                    />
                </View>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/me2.jpg')}
                    />
                </View>
                <View style={styles.smallview}>
                    <Image 
                        style={styles.myimage}
                        source={require('../img/me.jpg')}
                    />
                </View>
             </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    bigview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallview: {
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width / 2 ) - 4,
    },
    myimage:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
  });
  
