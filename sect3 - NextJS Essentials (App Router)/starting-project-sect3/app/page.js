// Section 3, Vid 86 - Starting Setup

// Importing the Link component from 'next/link'
import Link from "next/link";

// Import the Header component from header.js that is in the components folder.
import Header from "@/components/header";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      {/* Render the Header component that contains the header content of the page (icon and welcome message.)*/}
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* Used the Link component to redirect and render about/page.js on the server. */}
        <Link href="about">About Us</Link>
      </p>
    </main>
  );
}
