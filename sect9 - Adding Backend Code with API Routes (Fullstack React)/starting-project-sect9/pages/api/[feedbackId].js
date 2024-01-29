// Section 9, Vid 231 - Creating & Using Dynamic API Routes

import { buildFeedbackPath, extractFeedback } from "./feedback";

// This is a handler function for a Next.js API route
function handler(req, res) {
  // Extract the feedbackId from the query parameters of the request
  const feedbackId = req.query.feedbackId;

  // Use the buildFeedbackPath function to get the path to the feedback data file
  const filePath = buildFeedbackPath();

  // Use the extractFeedback function to read the feedback data from the file
  const feedbackData = extractFeedback(filePath);

  // Find the feedback item with the given ID in the feedback data
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  // Send a response with status code 200 and the selected feedback item in the body
  res.status(200).json({ feedback: selectedFeedback });
}

// Export the handler function as the default export
export default handler;
