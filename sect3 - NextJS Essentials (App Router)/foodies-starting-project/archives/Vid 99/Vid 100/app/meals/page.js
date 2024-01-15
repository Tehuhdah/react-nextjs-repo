// Section 3, Vid 95 - Exercise - Your Solution

import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        {/* Creating a Link Component that will redirect the user to meal-1 of the meals route with dynamic routing. */}
        <Link href="meals/meal-1">Meal 1</Link>
      </p>
      <p>
        {/* Creating a Link Component that will redirect the user to meal-2 of the meals route with dynamic routing. */}
        <Link href="meals/meal-2">Meal 2</Link>
      </p>
    </main>
  );
}
