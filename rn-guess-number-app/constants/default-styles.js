import { StyleSheet, Dimensions } from 'react-native';

/* global style */
export default StyleSheet.create({
    title: {
        marginTop: 5,
        marginBottom: 5,
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    btn: {
        // width: 100
        width: Dimensions.get('window').width / 4
    }
});