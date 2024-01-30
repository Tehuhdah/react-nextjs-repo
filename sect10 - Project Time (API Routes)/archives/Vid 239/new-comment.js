// Section 10, Vid 236 - Starting Project & A Challenge for you

// Importing useRef and useState from react for state management and accessing DOM elements
import { useRef, useState } from "react";

// Importing CSS module for styling the component
import classes from "./new-comment.module.css";

// NewComment component that renders a form for adding new comments
function NewComment(props) {
  // State variable for tracking whether the form input is invalid
  const [isInvalid, setIsInvalid] = useState(false);

  // Refs for accessing the values of the form inputs
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  // Handler function for submitting the form
  function sendCommentHandler(event) {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Getting the values of the form inputs
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    // Validation: if any of the inputs are empty or the email doesn't include '@', set isInvalid to true and return early
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    // If the inputs are valid, call the onAddComment prop with the input values
    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  // Rendering the component
  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
      </div>
      {/* If isInvalid is true, render an error message */}
      {isInvalid && <p>Please enter a valid email address and comment!</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

// Exporting the NewComment component as the default export
export default NewComment;
