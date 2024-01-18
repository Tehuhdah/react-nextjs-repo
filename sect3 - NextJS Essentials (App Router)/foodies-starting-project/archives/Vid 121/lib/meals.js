// Section 3, Vx 108 - Fetching Data by Leveraging JS & Fullstack Capabilities

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");
// This is the getMeals function
export async function getMeals() {
  // This line introduces an artificial delay of 2 seconds.
  // It's often used in development to simulate network latency.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // This line prepares a SQL statement to select all records from the 'meals' table
  // and then executes it to get all the meals from the database.
  // The 'all' method returns an array of all rows in the result set.

  // To simulate an error occuring.
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

// This is the getMeal function
export function getMeal(slug) {
  // This function takes a 'slug' as a parameter and returns a meal from the database that matches the slug.
  // The 'prepare' method is used to prepare a SQL statement for execution.
  // The 'get' method is used to execute the SQL statement and return a single row from the 'meals' table where the 'slug' matches the provided slug.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// Define a function 'saveMeal' that takes a 'meal' object as an argument
export function saveMeal(meal) {
  // Use the 'slugify' function to convert the meal's title into a URL-friendly string (a slug)
  // The second argument to 'slugify' is an options object where 'lower: true' means the resulting slug will be in lowercase
  meal.slug = slugify(meal.title, { lower: true });

  // Use the 'xss' function to sanitize the meal's instructions
  // This is to prevent Cross-Site Scripting (XSS) attacks by removing any potentially malicious code from the instructions
  meal.instructions = xss(meal.instructions);
}
