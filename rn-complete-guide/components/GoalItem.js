import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const GoalItem = props => {
    return (
        /*cara 1 :*/
        // <View key={props.id} style={styles.listItem}>
        //     <Text>{props.title}</Text>
        // </View>

        /*cara 2 :*/
        /*using TouchableOpacity*/
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        /*using TouchableHighlight*/
        // <TouchableHighlight onPress={props.onDelete}>
        //     <View style={styles.listItem}>
        //         <Text>{props.title}</Text>
        //     </View>
        // </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        // borderColor: 'black',
        // borderWidth: 1
    }
});
export default GoalItem;