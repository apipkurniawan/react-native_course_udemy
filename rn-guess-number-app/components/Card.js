import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        /* to make shadow in ios use (shadow property)*/
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        /* to make shadow in android use (elevation) */
        elevation: 8
    }
});

export default Card;