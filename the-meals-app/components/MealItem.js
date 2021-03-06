import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.MealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.image }}
                            style={styles.bgImg} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        backgroundColor: '#a6a5a2'
    },
    bgImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'BillionDreams_PERSONAL',
        fontSize: 28,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;