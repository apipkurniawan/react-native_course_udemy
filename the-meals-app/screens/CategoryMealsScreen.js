import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  console.log('props ', props);
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return <MealItem
      title={itemData.item.title}
      onSelectMeal={() => { }}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      image={itemData.item.imageUrl}
      affordability={itemData.item.affordability}
    />
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }} />



      {/* <Button title="Go To Details Meal" onPress={() => {
        props.navigation.navigate({ routeName: 'MealDetail' }); // cara 1
        props.navigation.push('MealDetail'); // cara 2 
        props.navigation.replace('MealDetail'); // cara 3 (hilangkan icon back di iphone)
      }} />
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack(); // cara 1
        props.navigation.pop(); // cara 2
      }} /> */}
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
