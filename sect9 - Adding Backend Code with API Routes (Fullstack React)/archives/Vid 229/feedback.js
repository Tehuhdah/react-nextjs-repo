// Section 9, Vid 225 - Writing our First API Route

// Import the 'fs' module to work with the file system.
import fs from "fs";
// Import the 'path' module to work with file and directory paths.
import path from "path";

function buildFeedbackPath() {
  // Define the path to the feedback file.

  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  // Read the file data synchronously.
  const fileData = fs.readFileSync(filePath);
  // Parse the file data as JSON.
  const data = JSON.parse(fileData);
  return data;
}

// Define a function named 'handler'. This function will handle HTTP requests.
// It takes two arguments: 'req' (the request object) and 'res' (the response object).
function handler(req, res) {
  // Check if the request method is POST.
  if (req.method === "POST") {
    // Extract the 'email' and 'feedbackText' from the request body.
    const email = req.body.email;
    const feedbackText = req.body.text;

    // Create a new feedback object with the 'email', 'feedbackText', and a unique 'id'.
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // Define the path to the feedback file.
    const filePath = buildFeedbackPath();
    // Read the file data synchronously and Parse the file data as JSON.
    const data = extractFeedback(filePath);
    // Add the new feedback to the data array.
    data.push(newFeedback);

    // Write the updated data back to the file synchronously.
    fs.writeFileSync(filePath, JSON.stringify(data));
    // Send a 201 status code (Created) and the new feedback as a JSON response.
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    // Occurs when a 'GET' request is done.
    // Define the path to the feedback file.
    const filePath = buildFeedbackPath();
    // Read the file data synchronously and Parse the file data as JSON.
    const data = extractFeedback(filePath);
    // If the request method is not POST, send a 200 status code (OK) and a message as a JSON response.
    res.status(200).json({ feedback: data });
  }
}

// Export the 'handler' function as a default export.
// This allows us to import this function in other files using the 'import' statement.
export default handler;
