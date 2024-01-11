/* Section 2, Vid 22 - Exercise & Another Component */

// Importing the useState hook from react.
import { useState } from "react";

// Importing the PostList component to be used
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  return (
    <>
      {/* The 'isPosting &&' part checks if 'isPosting' is not null or undefined. If 'isPosting' has a value, the part after the '&&' will be rendered. */}
      {/* Calling isPosting which returns the Modal component */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          {/* We must address the issue of components being wrapped by another component */}
          {/* The state and handler functions are passed down to the NewPost component via props. */}
          {/* onBodyChange, onAuthorChange */}

          {/* Closes the modal when the user clicks on the cancel button */}
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Angelo" body="Check out the full course!"></Post>
        <Post author="Tejada" body="Its on a crazy discount right now!" />
      </ul>
    </>
  );
}

export default PostsList;
