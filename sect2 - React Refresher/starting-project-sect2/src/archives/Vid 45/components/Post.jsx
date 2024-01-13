// Section 2, Vid 17: Building a First Custom Component

// Section 2, Vid 45: Dynamic Routes

// Importing styles from a CSS Module. This syntax is required when using CSS Modules.
import classes from "./Post.module.css";

// Importing the Link component from 'react-router-dom' to enable navigation between different parts of the application.
import { Link } from "react-router-dom";

// The Post component is a functional component that takes 'id', 'author', and 'body' as props.
// These props represent the id, author, and body of a post, respectively.
function Post({ id, author, body }) {
  return (
    // The component returns a list item (li) element with a class of 'post' from the imported CSS Module.
    // Inside the list item, a Link component is used to create a link to the post's detail page.
    // The 'to' prop of the Link component is set to the post's id, which means clicking the link will navigate to a URL like "/posts/1" for a post with an id of 1.
    // Inside the Link component, two paragraph (p) elements are used to display the author and body of the post.
    // The 'author' and 'body' props are used to set the text of these elements.
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

// The Post component is exported as the default export of this module.
// This means it can be imported in other modules using the syntax `import Post from './Post'`.
// Each module can have only one default export, but multiple named exports.
export default Post;
