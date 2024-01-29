// Section 9 - Vid 230 - Using API Routes for Pre-Rendering Pages

// Importing helper functions from feedback.js
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

// FeedbackPage component that renders a list of feedback items
function FeedbackPage(props) {
  return (
    <ul>
      {/* Mapping over feedbackItems array and rendering each item as a list element */}
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
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
