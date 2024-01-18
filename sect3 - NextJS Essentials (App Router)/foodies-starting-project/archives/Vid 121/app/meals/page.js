// Section 3, Vid 95 - Exercise - Your Solution

// Import the necessary modules and components
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

// Import the getMeals function from the meals library
import { getMeals } from "@/lib/meals";

import Link from "next/link";
// Import the Suspense component from React. Suspense lets your components "wait" for something before they can render, such as data fetching.
import { Suspense } from "react";

async function Meals() {
  // Call the getMeals function to fetch all meals from the database
  // The await keyword is used to wait for the Promise returned by getMeals to resolve
  const meals = await getMeals();
  // The MealsGrid component is rendered and the 'meals' array is passed as a prop. This component is responsible for displaying the list of meals on the page.
  return <MealsGrid meals={meals} />;
}

// Define the MealsPage component
export default async function MealsPage() {
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
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
