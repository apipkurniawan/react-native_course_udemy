import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

import Colors from "../constants/Colors";

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.btnContainer}>
            <ButtonComponent activeOpacity={0.8} onPress={props.onClick}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 20,
        overflow: "hidden"
    },
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    btnText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;