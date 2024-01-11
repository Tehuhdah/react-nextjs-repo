// Importing the useState hook from react.
import { useState } from "react";

// Importing the CSS Module from NewPost.module
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  // The state for the post body and author is defined here.
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  // These functions are called when the textarea/input values change.
  function bodyChangeHandler(event) {
    // It updates the enteredBody state with the new value of the textarea.
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    // It updates the enteredAuthor state with the new value of the input field.
    setEnteredAuthor(event.target.value);
  }

  // This function is called when the form is submitted.
  function submitHandler(event) {
    // It prevents the default form submission behavior.
    event.preventDefault();

    // It creates a postData object with the current values of enteredBody and enteredAuthor.
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    // It calls the onAddPost function, which is expected to be passed as a prop from a parent component.
    onAddPost(postData);

    // It calls the onCancel function, which is expected to be passed as a prop from a parent component.
    onCancel();
  }

  return (
    // The form element has an onSubmit event that calls the submitHandler function when the form is submitted.
    <form className={classes.form} onSubmit={submitHandler}>
      {/* The textarea and input elements have onChange events that call the bodyChangeHandler and authorChangeHandler functions when their values change. */}
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      {/* The Cancel button has an onClick event that calls the onCancel function when it's clicked. */}
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
