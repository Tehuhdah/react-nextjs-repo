// Section 3, Vid 95 - Exercise - Your Solution

// Import the necessary modules and components
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
// Import the getMeals function from the meals library
import { getMeals } from "@/lib/meals";

import Link from "next/link";

// Define the MealsPage component
export default async function MealsPage() {
  // Call the getMeals function to fetch all meals from the database
  // The await keyword is used to wait for the Promise returned by getMeals to resolve
  const meals = await getMeals();

  // The component returns a fragment containing a header and a main section
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* The MealsGrid component is used to display the meals
        The meals fetched from the database are passed as a prop */}
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
