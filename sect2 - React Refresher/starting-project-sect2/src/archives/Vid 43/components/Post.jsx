// Section 2, Vid 17: Building a First Custom Component

// Must use this syntax when importing from CSS Modules
import classes from "./Post.module.css";

// Creating a Post component that takes a props argument and returns a jsx code.
function Post(props) {
  return (
    // <div style={{ color: "black" }}> - Styling from within the div tag - Not Recommended
    // <div className='post'> - Traditional way of styling using css file and targeting the class - Not Recommended
    // Setting the styles of these elements using classes from the CSS Module that we created. Remember to wrap {} around your objects
    <li className={classes.post}>
      {/* Passing in the props and their properties to be outputted */}
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

// Export the Post component as the default export.
// This allows other files to import this component using `import Post from './Post'`.
// Only one default export is allowed per module.
export default Post;
