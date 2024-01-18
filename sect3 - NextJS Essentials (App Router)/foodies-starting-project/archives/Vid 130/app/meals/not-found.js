// Section 3, Vid 114 - Throwing Not Found Errors for Individual Meals.

// This component will automatically render on the meal level when a 'Not Found' error occurs.
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>
  );
}
