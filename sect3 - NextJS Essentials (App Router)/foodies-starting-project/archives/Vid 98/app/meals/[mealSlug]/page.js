// Section 3, Vid 95 - Your task

export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{params.slug}</p>
    </main>
  );
}
