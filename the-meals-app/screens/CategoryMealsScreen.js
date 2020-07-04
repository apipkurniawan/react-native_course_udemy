import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
  console.log('props ', props);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button title="Go To Details Meal" onPress={() => {
        /* cara 1 */
        // props.navigation.navigate({ routeName: 'MealDetail' });
        /* cara 2 */
        props.navigation.push('MealDetail');
        /* cara 3 (hilangkan icon back di iphone) */
        // props.navigation.replace('MealDetail');
      }} />
      <Button title="Go Back" onPress={() => {
        /* cara 1 */
        // props.navigation.goBack();
        /* cara 2 */
        props.navigation.pop();
      }} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  console.log('nav ', navigationData);
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
