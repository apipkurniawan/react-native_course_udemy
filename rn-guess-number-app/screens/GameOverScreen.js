import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/pict.png')}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
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
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 10
    }
});

export default GameOverScreen;