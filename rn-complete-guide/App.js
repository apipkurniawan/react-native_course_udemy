import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.root} >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here ..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {/* looping data */}
        <ScrollView>
          {courseGoals.map(goal => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    width: '80%',
    borderWidth: 1,
    padding: 5
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    // borderColor: 'black',
    // borderWidth: 1
  }
});
