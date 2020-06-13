import React from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" color={Colors.accent} onPress={() => { }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={() => { }} />
                    </View>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        width: 100
    }
});

export default StartGameScreen;