// Section 10, Vid 238 - Adding Comments API Routes

// /comments/some-event-id

import { MongoClient } from "mongodb";

// Handler function for handling HTTP requests
async function handler(req, res) {
  // Extracting the event ID from the request query parameters
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://jhordantej:8QtbVYirsdPEO90R@cluster0.i151c5l.mongodb.net/"
  );

  // Checking if the request method is POST
  if (req.method === "POST") {
    // Destructuring the email, name, and text from the request body
    const { email, name, text } = req.body;

    // Validating the input: if the email doesn't include '@', the name is not present or is empty,
    // or the text is not present or is empty, send a 422 response and return early
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // Creating a new comment with the current date as the ID and the email, name, and text from the request body
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // Connect to the 'events' database
    const db = client.db("events");

    // Insert the new comment into the 'comments' collection in the database
    // and store the result of the operation
    const result = await db.collection("comments").insertOne(newComment);

    // Log the result of the insert operation to the console
    console.log(result);

    // Add the id of the inserted document to the newComment object
    newComment.id = result.insertedId;

    // Log the new comment with its id to the console
    console.log(newComment);

    // Sending a 201 response with a success message and the new comment
    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  // Checking if the request method is GET
  if (req.method === "GET") {
    // Creating a dummy list of comments
    const dummyList = [
      { id: "c1", name: "Max", text: "A first comment!" },
      { id: "c2", name: "Manuel", text: "A second comment!" },
    ];

    // Sending a 200 response with the list of comments
    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

// Exporting the handler function as the default export
export default handler;
