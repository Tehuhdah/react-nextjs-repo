// Section 10, Vid 237 - Adding a Newsletter Route

// Importing MongoClient from the 'mongodb' package
import { MongoClient } from "mongodb";

// Function to connect to the MongoDB database
async function connectDatabase() {
  // Connect to the MongoDB client at the provided connection string
  const client = await MongoClient.connect(
    "mongodb+srv://jhordantej:Jho@cluster0.i151c5l.mongodb.net/"
  );
  // Return the connected client object
  return client;
}

// Function to insert a document into the 'emails' collection in the 'newsletter' database
async function insertDocument(client, document) {
  // Access the 'events' database
  const db = client.db("events");
  // Insert a new document into the 'newsletter' collection. The document contains the user's email
  await db.collection("newsletter").insertOne(document);
}

// The main handler function for the API route
async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === "POST") {
    // Extract the user's email from the request body
    const userEmail = req.body.email;

    // Validate the user's email
    if (!userEmail || !userEmail.includes("@")) {
      // If the email is invalid, send a 422 response with an error message
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      // Try to connect to the MongoDB database
      client = await connectDatabase();
    } catch (error) {
      // If connecting to the database fails, send a 500 response with an error message
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    try {
      // Try to insert the user's email into the database
      await insertDocument(client, { email: userEmail });
    } catch (error) {
      // If inserting the email fails, send a 500 response with an error message
      res.status(500).json({ message: "Insert data failed!" });
      return;
    } finally {
      // Close the connection to the MongoDB client
      client.close();
    }

    // If everything is successful, send a 201 response with a success message
    res.status(201).json({ message: "Signed up! Thanks for subscribing." });
  }
}

// Export the handler function as the default export
export default handler;
