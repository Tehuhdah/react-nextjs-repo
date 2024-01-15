import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        {/* Created a Link component for the community route. */}
        <Link href="/community">Community</Link>
      </p>
      <p>
        {/* Created a Link component for the share route. */}
        <Link href="meals/share">Share</Link>
      </p>
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
