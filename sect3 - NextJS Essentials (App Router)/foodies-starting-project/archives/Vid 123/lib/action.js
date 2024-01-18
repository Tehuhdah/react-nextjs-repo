// Section 3, Vid 120 - Storing Server Actions in Seperate Files

"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// Define the shareMeal function, which is an asynchronous function that takes formData as an argument
export async function shareMeal(formData) {
  // Create a meal object with properties populated from the formData
  const meal = {
    // Get the 'title' field from the formData and assign it to the 'title' property of the meal object
    title: formData.get("title"),
    // Get the 'summary' field from the formData and assign it to the 'summary' property of the meal object
    summary: formData.get("summary"),
    // Get the 'instructions' field from the formData and assign it to the 'instructions' property of the meal object
    instructions: formData.get("instructions"),
    // Get the 'image' field from the formData and assign it to the 'image' property of the meal object
    image: formData.get("image"),
    // Get the 'name' field from the formData and assign it to the 'creator' property of the meal object
    creator: formData.get("name"),
    // Get the 'email' field from the formData and assign it to the 'creator_email' property of the meal object
    creator_email: formData.get("email"),
  };

  // Call the 'saveMeal' function, which is assumed to save the 'meal' object to a database or some other form of storage
  // This function is awaited because it's likely asynchronous, meaning it returns a Promise
  await saveMeal(meal);

  // Call the 'redirect' function with the path '/meals' as an argument
  // This function is likely responsible for navigating to a different page in the application
  // In this case, it's navigating to the root page ('meals')
  redirect("/meals");
}
