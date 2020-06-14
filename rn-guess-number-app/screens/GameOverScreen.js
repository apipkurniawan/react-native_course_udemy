import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.title}>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    /* using local image */
                    source={require('../assets/pict.png')}
                    /* using network image */
                    // source={{ uri: 'https://pixabay.com/photos/summit-mountain-snow-target-3948706/' }}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <BodyText>
                Number of rounds :
                <Text style={styles.highlight}> {props.roundsNumber}</Text>
            </BodyText>
            <BodyText>Number was :
                <Text style={styles.highlight}> {props.userNumber}</Text>
            </BodyText>
            <View style={styles.button}>
                <MainButton onClick={props.onRestart} >NEW GAME</MainButton>
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
    },
    highlight: {
        color: Colors.accent
    }
});

export default GameOverScreen;