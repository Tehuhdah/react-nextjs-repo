// Section 3, Vid 95 - Your task

export default function mealListpage({ params }) {
  return (
    <main>
      <h1>Meals</h1>
      <p>{params.slug}</p>
    </main>
  );
}
