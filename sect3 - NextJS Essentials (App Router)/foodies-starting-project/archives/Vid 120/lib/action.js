// Section 3, Vid 120 - Storing Server Actions in Seperate Files

"use server";

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

  // Log the meal object to the console
  console.log(meal);
}
