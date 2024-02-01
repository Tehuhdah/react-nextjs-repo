// Section 10, Vid 236 - Starting Project & A Challenge for you
// Importing useState from react for state management
import { useEffect, useState } from "react";

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

  // Initialize state variable 'comments' as an empty array
  const [comments, setComments] = useState([]);

  // Use the useEffect hook to fetch comments when the 'showComments' state changes
  useEffect(() => {
    // If 'showComments' is true, fetch comments from the API
    if (showComments) {
      // Start a fetch request to the comments API endpoint
      fetch("/api/comments/" + eventId)
        // When the request is complete, parse the response as JSON
        .then((response) => response.json())
        // Then set the 'comments' state to the 'comments' field in the parsed response data
        .then((data) => {
          setComments(data.comments);
        });
    }
    // The useEffect hook will run again if the 'showComments' state changes
  }, [showComments]);

  // Handler function for toggling the display of comments
  function toggleCommentsHandler() {
    // Updating showComments state to its opposite value
    setShowComments((prevStatus) => !prevStatus);
  }

  // Handler function for adding a new comment
  function addCommentHandler(commentData) {
    // TODO: send commentData to API
    fetch("/api/comments/" + eventId, {
      // Specify the method of the request as POST
      method: "POST",
      // Convert the commentData object to a JSON string and include it in the request body
      body: JSON.stringify(commentData),
      // Include headers to specify the content type of the request body
      headers: {
        "Content-Type": "application/json",
      },
    })
      // When the request is complete, parse the response as JSON
      .then((response) => response.json())
      // Then log the parsed response data to the console
      .then((data) => console.log(data));
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
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

// Exporting the Comments component as the default export
export default Comments;
