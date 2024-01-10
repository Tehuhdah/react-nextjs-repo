// Section 2, Vid 23 - Preparing the App For State Management

import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    // 'class' and 'for' are not allowed in jsx, so 'className' and 'htmlFor' are subsitutes.
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        {/* The onChange prop is a function passed from the parent component (PostsList).
            When the textarea value changes, this function is called with the new value. */}
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        {/* Similarly, when the input value changes, the onAuthorChange function is called. */}
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
