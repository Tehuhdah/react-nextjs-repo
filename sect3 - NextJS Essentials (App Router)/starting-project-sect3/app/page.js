// Section 3, Vid 86 - Starting Setup

// Importing the Link component from 'next/link'
import Link from "next/link";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* Used the Link component to redirect and render about/page.js on the server. */}
        <Link href="about">About Us</Link>
      </p>
    </main>
  );
}
