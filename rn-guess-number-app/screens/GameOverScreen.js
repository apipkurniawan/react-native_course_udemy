import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').height);
            setAvailableDeviceWidth(Dimensions.get('window').width);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText style={styles.title}>The Game is Over!</TitleText>
                <View style={{
                    ...styles.imageContainer, ...{
                        width: availableDeviceWidth * 0.7,
                        height: availableDeviceWidth * 0.7,
                        borderRadius: (availableDeviceWidth * 0.7) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }
                }}>
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
                <View style={{
                    ...styles.resultContainer,
                    ...{ marginVertical: availableDeviceHeight / 60 }
                }}>
                    <BodyText style={{
                        ...styles.resultText,
                        ...{ fontSize: availableDeviceHeight < 400 ? 16 : 20 }
                    }}>
                        Your Phone needed {' '}
                        <Text style={styles.highlight}> {props.roundsNumber}</Text> {' '} rounds to guess the number{' '}
                        <Text style={styles.highlight}> {props.userNumber}</Text>
                    </BodyText>
                </View>
                <View style={styles.button}>
                    <MainButton onClick={props.onRestart} >NEW GAME</MainButton>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
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
        marginVertical: Dimensions.get('window').height / 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.accent,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;