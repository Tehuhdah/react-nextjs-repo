// Section 2, Vid 29 - Adding a Shared Header & More State Managements

// Section 2, vid 42 - Linking and Routing
import { Link } from "react-router-dom";

import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

// This Component creates a mainHeader on the page, that includes a button to create posts.
function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage /> {/* This is the logo icon */}
        React Posts
      </h1>
      <p>
        {/* The Link component is used to create a link to the "create-post" route. */}
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />{" "}
          {/* This is the icon for the "New Post" button */}
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
