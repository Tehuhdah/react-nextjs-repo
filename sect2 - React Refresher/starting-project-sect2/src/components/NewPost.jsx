// Section 2, Vid 23 - Preparing the App For State Management

import classes from "./NewPost.module.css";

function NewPost() {
  return (
    // 'class' and 'for' are not allowed in jsx, so 'className' and 'htmlFor' are subsitutes.
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
