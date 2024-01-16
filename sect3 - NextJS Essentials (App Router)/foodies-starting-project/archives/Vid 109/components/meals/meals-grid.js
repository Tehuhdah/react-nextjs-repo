// Section 3, Vid 106 - Outputting Meals Data & Images With Unknown Dimensions

import classes from "./meals-grid.module.css";
import MealItem from "./meals-item";

// This is the MealsGrid component
export default function MealsGrid({ meals }) {
  return (
    // The component returns an unordered list with a class of 'meals'
    <ul className={classes.meals}>
      {/* For each meal in the meals array, a list item is created */}
      {meals.map((meal) => (
        // The key prop is set to the id of the meal to help React identify which items have changed, are added, or are removed
        <li key={meal.id}>
          {/* The MealItem component is used to display the meal, with all the properties of the meal passed as props */}
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
