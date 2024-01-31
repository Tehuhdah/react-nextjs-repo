// Section 10, Vid 238 - Adding Comments API Routes

// /comments/some-event-id

// Importing necessary functions from db-util file
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers//db-util";

// This is the main handler function for the API route
async function handler(req, res) {
  // Extracting the event ID from the request query parameters
  const eventId = req.query.eventId;

  let client;
  let collection = "comments"; // The collection in the database where comments are stored
  let database = "events"; // The database where the collection is located

  // Try to connect to the database
  try {
    client = await connectDatabase();
  } catch (error) {
    // If the connection fails, send a 500 response with an error message
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  // If the request method is POST, we're adding a new comment
  if (req.method === "POST") {
    // Extract the email, name, and text from the request body
    const { email, name, text } = req.body;

    // Validate the input: if the email doesn't include '@', the name is not present or is empty,
    // or the text is not present or is empty, send a 422 response and return early
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      // Close the connection to the MongoDB client
      client.close();
      return;
    }

    // Create a new comment with the current date as the ID and the email, name, and text from the request body
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;
    // Try to insert the new comment into the database
    try {
      result = await insertDocument(client, collection, newComment, database);
      // Add the id of the inserted document to the newComment object
      newComment._id = result.insertedId;

      // Log the new comment with its id to the console
      console.log(newComment);

      // Send a 201 response with a success message and the new comment
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      // If the insertion fails, send a 500 response with an error message
      res.status(500).json({ message: "Inserting comment failed!" });
    }
  }

  // If the request method is GET, we're fetching all comments
  if (req.method === "GET") {
    let documents;
    // Try to get all documents from the 'comments' collection
    try {
      documents = await getAllDocuments(client, collection, database, {
        _id: -1,
      });
      // Send a 200 response with the comments
      res.status(200).json({ comments: documents });
    } catch (error) {
      // If fetching the comments fails, send a 500 response with an error message
      res.status(500).json({ message: "Getting comments failed." });
    }
    // Close the connection to the MongoDB client
    client.close();
  }
}

// Export the handler function as the default export of this module
export default handler;
