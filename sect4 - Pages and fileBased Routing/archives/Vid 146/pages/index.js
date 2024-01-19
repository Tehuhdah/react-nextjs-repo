// Section 4, Vid 138 - Adding our first page.

import Link from "next/link";

// Creating our first page of the project which will be the home page. ('/')
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* Using Link component to redirect the user to the /portfolio route */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          {/* Using Link component to redirect the user to the /clients route */}
          <Link href="/clients">Client</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
