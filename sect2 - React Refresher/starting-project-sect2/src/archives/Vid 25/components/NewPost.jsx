// Section 2, Vid 23 - Preparing the App For State Management

import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost() {
  // Theoretically this variable update and re-render whenever the user triggers the onChange event in the textarea.
  // This does not work because jsx only renders the first time the page is ran. We want changes to the variable
  // to cause the componenet to re-render.
  // let enteredBody = "";

  // Use the useState hook from React to create a state variable and a function to update it.
  // 'useState' is a function that takes one argument, the initial state, and returns an array.
  // The first element of the array, 'enteredBody', is the current state.
  // The second element, 'setEnteredBody', is a function that we can use to update the state.
  // When 'setEnteredBody' is called, the component will re-render with the new state.
  const [enteredBody, setEnteredBody] = useState("");

  // Create a function that will be called when the textarea is changed.
  function changeBodyHandler(event) {
    // Update the state with the new value of the textarea.
    setEnteredBody(event.target.value);
  }
  return (
    // 'class' and 'for' are not allowed in jsx, so 'className' and 'htmlFor' are subsitutes.
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* Add the event listener to the end of the tag and link it to your function */}
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      {/* Outputs enteredBody, which is an updated state from the onChange event listener. */}
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
