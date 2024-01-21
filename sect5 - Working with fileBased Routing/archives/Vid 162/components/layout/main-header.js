// Section 5, Vid 162 - Adding a General Layout Wrapper Component

import Link from "next/link";
import classes from "./main-header.module.css";

// Define the MainHeader component
function MainHeader() {
  return (
    // Render a 'header' HTML element with a CSS class 'header'
    <header className={classes.header}>
      {/* Render a 'div' HTML element with a CSS class 'logo' */}
      <div className={classes.logo}>
        {/* Render a Link component from Next.js with the href set to the root path */}
        {/* This Link component wraps the text 'NextEvents', which serves as the logo and links to the home page */}
        <Link href="/">NextEvents</Link>
      </div>
      {/* Render a 'nav' HTML element with a CSS class 'navigation' */}
      <nav className={classes.navigation}>
        {/* Render an unordered list */}
        <ul>
          {/* Render a list item */}
          <li>
            {/* Render a Link component from Next.js with the href set to '/events' */}
            {/* This Link component wraps the text 'Browse All Events', which serves as a navigation link to the events page */}
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
