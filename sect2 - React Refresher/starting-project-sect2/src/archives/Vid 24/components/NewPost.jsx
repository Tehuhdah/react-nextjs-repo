// Section 2, Vid 23 - Preparing the App For State Management

import classes from "./NewPost.module.css";

function NewPost() {
  // Create a function that will be called when the textarea is changed.
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }
  return (
    // 'class' and 'for' are not allowed in jsx, so 'className' and 'htmlFor' are subsitutes.
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* Add the event listener to the end of the tag and link it to your function */}
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
