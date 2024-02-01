// Section 10, Vid 236 - Starting Project & A Challenge for you

// Importing CSS module for styling the component
import classes from "./comment-list.module.css";

// CommentList is a functional component that receives 'props' as an argument
function CommentList(props) {
  // Destructure 'items' from props. 'items' is an array of comments
  const { items } = props;
  return (
    // Render an unordered list with a CSS class from the imported CSS module
    <ul className={classes.comments}>
      {/* Map over the 'items' array and for each 'item' (comment), render a list item */}
      {items.map((item) => (
        // Each list item has a unique 'key' prop, a paragraph displaying the comment text,
        // and a div containing the name of the comment author
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            {/* The 'address' tag is used to represent the name of the comment author */}
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Exporting the CommentList component as the default export
export default CommentList;
