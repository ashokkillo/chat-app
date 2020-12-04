import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = props => {

    return (
        <View style= {styles.header}>
            <Text styles= {styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height:90,
        paddingTop: 36,
        backgroundColor: '#f727b8',
        alignItems:'center',
        justifyContent: 'center',
    },
    headerTitle:{
        color:'black',
        fontSize:  18
    }
}); 

export default Header