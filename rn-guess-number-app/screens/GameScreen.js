import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions, FlatList } from "react-native";
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
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

/* looping data cara 1 : */
// const renderListItem = (value, numOfRound) => {
//     return (
//         <View key={value} style={styles.listItem}>
//             <BodyText>#{numOfRound}</BodyText>
//             <BodyText>{value}</BodyText>
//         </View>
//     );
// };

/* looping data cara 2 : */
const renderListItem = (listLength, itemData) => {
    return (
        <View style={styles.listItem}>
            <BodyText>#{listLength - itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    );
};

const GameScreen = props => {
    const { userChoise, onGameOver } = props;
    const initialiGuess = generateRandomBetween(1, 100, userChoise);
    const [currentGuess, setCurrentGuess] = useState(initialiGuess);
    /* cara 1 */
    // const [pastGuesses, setPastGuesses] = useState([initialiGuess]);
    /* cara 2 */
    const [pastGuesses, setPastGuesses] = useState([initialiGuess.toString()]);

    /* set width when orientation is landscape */
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
        }
    });

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoise) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        /* cara 1 */
        // setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])
        /* cara 2 */
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    };

    let listContainerStyle = styles.listContainer;
    if (availableDeviceWidth < 350) {
        listContainerStyle = styles.listContainerBig;
    };

    /* set layout when orientation is landscape */
    if (availableDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>Opponent's Guess</Text>
                <View style={styles.controls}>
                    <View style={DefaultStyles.btn}>
                        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={DefaultStyles.btn}>
                        <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
                    </View>
                </View>
                <View style={listContainerStyle}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        keyExtractor={item => item}
                        data={pastGuesses}
                        renderItem={renderListItem.bind(this, pastGuesses.length)}
                    />
                </View>
            </View>
        );
    };

    let gameControls = (
        <React.Fragment>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <View style={DefaultStyles.btn}>
                    <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                </View>
                <View style={DefaultStyles.btn}>
                    <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
                </View>
            </Card>
        </React.Fragment>
    )

    if (availableDeviceHeight < 500) {
        gameControls = (
            <View style={styles.controls}>
                <View style={DefaultStyles.btn}>
                    <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                </View>
                <View style={DefaultStyles.btn}>
                    <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            {gameControls}
            <View style={listContainerStyle}>
                {/* looping data cara 1 : */}
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                {/* looping data cara 2 : */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={item => item}
                    data={pastGuesses}
                    contentContainerStyle={styles.list}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}
                />
            </View>
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
        // marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        // width: 300,
        // maxWidth: '80%',
        width: 400,
        maxWidth: '90%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listContainer: {
        flex: 1,
        width: '60%',
    },
    listContainerBig: {
        flex: 1,
        width: '80%',
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }
});

export default GameScreen;