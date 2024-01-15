import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        {/* Created a Link component for the meal route. */}
        <Link href="meals/">Meals</Link>
      </p>
      <p>
        {/* Created a Link component for the share route. */}
        <Link href="meals/share">Share</Link>
      </p>
      <p>
        {/* Created a Link component for the community route. */}
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
