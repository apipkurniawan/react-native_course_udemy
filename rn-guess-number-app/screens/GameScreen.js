import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles'; // using global style

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const { userChoise, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoise));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoise) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoise, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoise) || (direction === 'greater' && currentGuess > userChoise)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong..', [{ text: 'sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;