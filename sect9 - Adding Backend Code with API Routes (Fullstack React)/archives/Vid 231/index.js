// Section 9 - Vid 230 - Using API Routes for Pre-Rendering Pages

// Importing helper functions from feedback.js
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

// Importing Fragment and useState from react
import { Fragment, useState } from "react";

// FeedbackPage component that renders a list of feedback items
function FeedbackPage(props) {
  // State variable for storing feedback data
  const [feedbackData, setFeedbackData] = useState();

  // Function to load feedback data when a button is clicked
  function loadFeedbackHandler(id) {
    // Fetch request to the API route with the given ID
    fetch(`/api/${id}`)
      .then((response) => response.json()) // Parsing the response as JSON
      .then((data) => {
        console.log("Response data:", data); // Logging the response data
        // Setting the feedback data state variable with the feedback property of the response data
        setFeedbackData(data.feedback);
      });
  }

  // Rendering the component
  return (
    <Fragment>
      {/* If feedbackData is not undefined, render the email property of feedbackData */}
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {/* Mapping over feedbackItems array and rendering each item as a list element */}
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            {/* Button to load feedback data. When clicked, it calls loadFeedbackHandler with the ID of the item */}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

// getStaticProps function to pre-render the page at build time
export async function getStaticProps() {
  // Getting the file path of the feedback data
  const filePath = buildFeedbackPath();
  // Extracting the feedback data from the file
  const data = extractFeedback(filePath);
  // Returning the feedback data as props to the page component
  return {
    props: {
      feedbackItems: data,
    },
  };
}

// Exporting the FeedbackPage component as the default export
export default FeedbackPage;
