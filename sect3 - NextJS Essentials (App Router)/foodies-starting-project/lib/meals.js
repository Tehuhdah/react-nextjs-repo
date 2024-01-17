// Section 3, Vx 108 - Fetching Data by Leveraging JS & Fullstack Capabilities

import sql from "better-sqlite3";

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
