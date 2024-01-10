/* Section 2, Vid 22 - Exercise & Another Component */

// Importing the useState hook from react.
import { useState } from "react";

// Importing the PostList component to be used
import NewPost from "./NewPost";
import Post from "./Post";

// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList() {
  // The state for the post body and author is defined here in the parent component.
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  // These handler functions update the state when the textarea/input values change.
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {/* The state and handler functions are passed down to the NewPost component via props. */}
      {/* onBodyChange, onAuthorChange */}
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        {/* The state is also passed down to the Post component to be displayed. */}
        <Post author={enteredAuthor} body={enteredBody}></Post>
        <Post author="Angelo" body="Check out the full course!"></Post>
        <Post author="Tejada" body="Its on a crazy discount right now!" />
      </ul>
    </>
  );
}

export default PostsList;
