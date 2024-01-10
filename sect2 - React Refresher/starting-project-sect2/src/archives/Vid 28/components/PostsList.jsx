/* Section 2, Vid 22 - Exercise & Another Component */

// Importing the useState hook from react.
import { useState } from "react";

// Importing the PostList component to be used
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList() {
  // The state for the post body and author is defined here in the parent component.
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  // These handler functions update the state when the textarea/input values change.
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // This function updates the state when the use clicks outside of the modal.
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  // Approach using JavaScript to display the Modal.
  let modalContent = true;

  //   if (modalIsVisible) {
  //     modalContent = (
  //       <Modal onClose={hideModalHandler}>
  //         {/* We must address the issue of components being wrapped by another component */}
  //         <NewPost
  //           onBodyChange={bodyChangeHandler}
  //           onAuthorChange={authorChangeHandler}
  //         />
  //       </Modal>
  //     );
  //   }

  return (
    <>
      {/* The 'modalContent &&' part checks if 'modalContent' is not null or undefined. If 'modalContent' has a value, the part after the '&&' will be rendered. */}
      {/* Calling modalContent which returns the Modal component */}
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          {/* We must address the issue of components being wrapped by another component */}
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      {/* The state and handler functions are passed down to the NewPost component via props. */}
      {/* onBodyChange, onAuthorChange */}
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
