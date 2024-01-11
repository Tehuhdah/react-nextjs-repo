// Section 2, Vid 29 - Adding a Shared Header & More State Managements

import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

// This Component creates a mainHeader on the page, that includes a button to create posts.
function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage /> React Posts
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} /> New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
