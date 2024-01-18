// Section 3, Vid 108 - Fetching Data by Leveraging JS & Fullstack Capabilities

import fs from "node:fs";
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
export async function saveMeal(meal) {
  // Use the 'slugify' function to convert the meal's title into a URL-friendly string (a slug)
  // The second argument to 'slugify' is an options object where 'lower: true' means the resulting slug will be in lowercase
  meal.slug = slugify(meal.title, { lower: true });

  // Use the 'xss' function to sanitize the meal's instructions
  // This is to prevent Cross-Site Scripting (XSS) attacks by removing any potentially malicious code from the instructions
  meal.instructions = xss(meal.instructions);

  // Get the file extension of the image by splitting the name on '.' and taking the last element
  const extension = meal.image.name.split(".").pop();
  // Create a filename for the image using the meal's slug and the original file extension
  const fileName = `${meal.slug}.${extension}`;

  // Create a writable stream to a new file in the 'public/images' directory with the generated filename
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // Get the image data as an ArrayBuffer
  const bufferedImage = await meal.image.arrayBuffer();

  // Write the image data to the file
  // If there's an error, throw an exception
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // Update the 'image' property of the meal to the path of the saved image
  meal.image = `/images/${fileName}`;

  // Prepare a SQL statement to insert the meal into the 'meals' table in the database
  // The '@' syntax is used to bind parameters in the SQL statement to properties of the 'meal' object
  db.prepare(
    `
  INSERT INTO meals
  (title, summary, instructions, creator, creator_email, image, slug)
  VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )
  `
    // Execute the SQL statement with the 'meal' object as the parameter
  ).run(meal);
}
