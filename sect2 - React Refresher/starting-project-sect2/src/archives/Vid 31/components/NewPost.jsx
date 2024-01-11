// Section 2, Vid 23 - Preparing the App For State Management

import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel }) {
  // The state for the post body and author is defined here in the parent component.
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  // These handler functions update the state when the textarea/input values change.
  // bodyChangeHandler is called when the text in the textarea changes.
  function bodyChangeHandler(event) {
    // It updates the enteredBody state with the new value of the textarea.
    setEnteredBody(event.target.value);
  }

  // authorChangeHandler is called when the text in the input field changes.
  function authorChangeHandler(event) {
    // It updates the enteredAuthor state with the new value of the input field.
    setEnteredAuthor(event.target.value);
  }

  // submitHandler is called when the form is submitted.
  function submitHandler(event) {
    // It prevents the default form submission behavior.
    event.preventDefault();
    // It creates a postData object with the current values of enteredBody and enteredAuthor.
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    // It logs the postData object to the console.
    console.log(postData);
    // It calls the onCancel function, which is expected to be passed as a prop from a parent component.
    onCancel();
  }

  return (
    // The form element has an onSubmit event that calls the submitHandler function when the form is submitted.
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        {/* The textarea element has an onChange event that calls the bodyChangeHandler function when its value changes. */}
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        {/* The input element has an onChange event that calls the authorChangeHandler function when its value changes. */}
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      {/* Added 2 buttons to the form */}
      {/* Cancel Button triggers the onCancel function */}
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
