import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIos,
                android: styles.headerAndroid,
            })
        }}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'open-sans',
        marginTop: 30
    }
});

export default Header;