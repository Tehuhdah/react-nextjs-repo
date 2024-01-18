// Section 3, Vid 95 - Your task

// Page redo, Section 3, - Vid 113 - Loading & rendering Meal
// Details via Rynamic Routes & Route Parameters

import Image from "next/image";

import classes from "./page.module.css";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// Define an asynchronous function named 'generateMetadata'
// This function takes an object as an argument, which is destructured to get the 'params' property
export async function generateMetadata({ params }) {
  // Call the 'getMeal' function with 'params.mealSlug' as an argument
  // This function is likely fetching a meal from a database or an API based on the slug
  const meal = getMeal(params.mealSlug);

  // If a meal was not found, we want to run the notFound function.
  // This function will automatically execute and render the closest not-found or error page.
  if (!meal) {
    notFound();
  }

  // Return an object with 'title' and 'description' properties
  // These properties are set to 'meal.title' and 'meal.summary', respectively
  // This object is likely used as metadata for the page (e.g., for setting the <title> and <meta name="description"> elements in the HTML)
  return {
    title: meal.title,
    description: meal.summary,
  };
}

// This is the MealDetailsPage component
export default function MealDetailsPage({ params }) {
  // The getMeal function is called with the mealSlug from the params to fetch the details of the specific meal
  const meal = getMeal(params.mealSlug);

  // If a meal was not found, we want to run the notFound function.
  // This function will automatically execute and render the closest not-found or error page.
  if (!meal) {
    notFound();
  }

  // The instructions of the meal are updated to replace newline characters with HTML break tags for proper formatting in the UI
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  // The component returns a fragment containing a header and a main section
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          {/* The Image component is used to display the image of the meal */}
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          {/* The title of the meal is displayed in an h1 element */}
          <h1>{meal.title}</h1>
          {/* The creator of the meal is displayed in a p element, with a mailto link to the creator's email */}
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          {/* The summary of the meal is displayed in a p element */}
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* The instructions of the meal are displayed in a p element, with the HTML break tags rendered as actual breaks */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}
