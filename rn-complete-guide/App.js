import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      // cara 1 :
      // enteredGoal
      // cara 2 (bangkitkan bilangan random):
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.root}>
      <View style={styles.centered}>
        <Text style={styles.title}>Goal Today</Text>
      </View>
      <Button onPress={() => setIsAddMode(true)} title="Add New Goal" />
      {/* using component */}
      <GoalInput visible={isAddMode} onCancelGoal={cancelGoalHandler} onAddGoal={addGoalHandler} />

      {/* looping data  cara 1 : */}
      {/* <ScrollView>
        {courseGoals.map((goal, index) => (
          // using component
          <GoalItem title={goal.value} id={index} />
          ))}
      </ScrollView> */}

      {/* looping data  cara 2 : */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          /*using component*/
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        }
      />
    </View >



    /* latihan flex */
    // <View
    //   style={{
    //     padding: 50,
    //     flexDirection: 'row',
    //     width: '90%',
    //     height: 300,
    //     justifyContent: 'space-around',
    //     alignItems: 'stretch'
    //   }}>
    //   <View
    //     style={{
    //       backgroundColor: 'red',
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'blue',
    //       flex: 2,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>2</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flex: 2,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <Text>3</Text>
    //   </View>
    // </View>
  );
}

/* styleSheet Object */
const styles = StyleSheet.create({
  root: {
    padding: 50
  },
  title: {
    // fontFamily: "Cochin"
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20
  },
  centered: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
