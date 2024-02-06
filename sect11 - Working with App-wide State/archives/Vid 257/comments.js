// Section 10, Vid 236 - Starting Project & A Challenge for you
// Importing useState from react for state management
import { useContext, useEffect, useState } from "react";

// Importing CommentList and NewComment components
import CommentList from "./comment-list";
import NewComment from "./new-comment";

// Importing CSS module for styling the component
import classes from "./comments.module.css";

import NotificationContext from "../../store/notification-context";

// Comments component that renders a list of comments and a form for adding new comments
function Comments(props) {
  // Extracting eventId from props
  const { eventId } = props;

  // Use the NotificationContext to get access to the notification context
  const notificationCtx = useContext(NotificationContext);

  // State variable for toggling the display of comments
  const [showComments, setShowComments] = useState(false);

  // Initialize state variable 'comments' as an empty array
  const [comments, setComments] = useState([]);

  // State variable for tracking the fetching status of comments
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  // Use the useEffect hook to fetch comments when the 'showComments' state changes
  useEffect(() => {
    // If 'showComments' is true, fetch comments from the API
    if (showComments) {
      setIsFetchingComments(true);
      // Start a fetch request to the comments API endpoint
      fetch("/api/comments/" + eventId)
        // When the request is complete, parse the response as JSON
        .then((response) => response.json())
        // Then set the 'comments' state to the 'comments' field in the parsed response data
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
    // The useEffect hook will run again if the 'showComments' state changes
  }, [showComments, eventId]);

  // Handler function for toggling the display of comments
  function toggleCommentsHandler() {
    // Updating showComments state to its opposite value
    setShowComments((prevStatus) => !prevStatus);
  }

  // Handler function for adding a new comment
  function addCommentHandler(commentData) {
    // Show a pending notification while the comment is being posted
    notificationCtx.showNotification({
      title: "Posting Comment...",
      message: "Your comment is currently being stored into the database.",
      status: "pending",
    });

    // Send the comment data to the API
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // If the response is not OK, parse it as JSON and then throw an error with the message from the response
          return response.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        }
      })
      // Then log the parsed response data to the console
      .then((data) => {
        console.log(data);
        // Show a success notification when the comment is successfully posted
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was saved successfully!",
          status: "success",
        });
      })
      .catch((error) => {
        // If an error occurred during the request, show an error notification with the error message
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
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
      {/* If showComments is true and comments are not being fetched, render the CommentList component */}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {/* If showComments is true and comments are being fetched, render a loading message */}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

// Exporting the Comments component as the default export
export default Comments;
