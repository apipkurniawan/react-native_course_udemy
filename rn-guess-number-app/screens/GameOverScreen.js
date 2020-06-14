import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>The Game is Over!</TitleText>
            <Image source={require('../assets/pict.png')} />
            <BodyText>Number of rounds : {props.roundsNumber}</BodyText>
            <BodyText>Number was : {props.userNumber}</BodyText>
            <View style={styles.button}>
                <Button title="NEW GAME" onPress={props.onRestart} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20
    },
    title: {
        marginBottom: 20,
        color: 'green'
    }
});

export default GameOverScreen;