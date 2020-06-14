import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        // <ScrollView>
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
            {/* <View style={styles.resultContainer}> */}
            <BodyText> Number of rounds :
                    <Text style={styles.highlight}> {props.roundsNumber}</Text>
            </BodyText>
            <BodyText>Number was :
                    <Text style={styles.highlight}> {props.userNumber}</Text>
            </BodyText>
            {/* </View> */}
            <View style={styles.button}>
                <MainButton onClick={props.onRestart} >NEW GAME</MainButton>
            </View>
        </View>
        // </ScrollView>
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 15
    },
    // resultContainer: {
    //     marginHorizontal: 30,
    //     marginVertical: Dimensions.get('window').height / 60
    // },
    // resultText: {
    //     textAlign: 'center',
    //     fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    // },
    highlight: {
        color: Colors.accent
    }
});

export default GameOverScreen;