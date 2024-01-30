// Section 10, Vid 236 - Starting Project & A Challenge for you

// Importing CSS module for styling the component
import classes from "./comment-list.module.css";

// CommentList component that renders a list of comments
function CommentList() {
  return (
    // Unordered list with a CSS class from the imported CSS module
    <ul className={classes.comments}>
      {/* Static list items representing comments. In a real application, these would
       be fetched from an API and rendered dynamically */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      // Another static list item representing a comment
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

// Exporting the CommentList component as the default export
export default CommentList;
