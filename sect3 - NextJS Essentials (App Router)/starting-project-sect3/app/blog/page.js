// Section 3, Vid 93 - Configuring Dynamic Routes & Using Route Parameters

import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>
        {/* Creating a Link Component that will redirect the user to post-1 with dynamic routing. */}
        <Link href="/blog/post-1">First Post</Link>
      </p>
      <p>
        {/* Creating a Link Component that will redirect the user to post-2 with dynamic routing. */}
        <Link href="/blog/post-2">Second Post</Link>
      </p>
    </main>
  );
}
