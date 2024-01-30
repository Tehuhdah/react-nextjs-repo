// Section 10, Vid 236 - Starting Project & A Challenge for you
// Importing useState from react for state management
import { useState } from "react";

// Importing CommentList and NewComment components
import CommentList from "./comment-list";
import NewComment from "./new-comment";

// Importing CSS module for styling the component
import classes from "./comments.module.css";

// Comments component that renders a list of comments and a form for adding new comments
function Comments(props) {
  // Extracting eventId from props
  const { eventId } = props;

  // State variable for toggling the display of comments
  const [showComments, setShowComments] = useState(false);

  // Handler function for toggling the display of comments
  function toggleCommentsHandler() {
    // Updating showComments state to its opposite value
    setShowComments((prevStatus) => !prevStatus);
  }

  // Handler function for adding a new comment
  function addCommentHandler(commentData) {
    // TODO: send commentData to API
  }

  // Rendering the component
  return (
    <section className={classes.comments}>
      {/* Button for toggling the display of comments. The button text changes based on the showComments state */}
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {/* If showComments is true, render the NewComment component and pass addCommentHandler as a prop */}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {/* If showComments is true, render the CommentList component */}
      {showComments && <CommentList />}
    </section>
  );
}

// Exporting the Comments component as the default export
export default Comments;
