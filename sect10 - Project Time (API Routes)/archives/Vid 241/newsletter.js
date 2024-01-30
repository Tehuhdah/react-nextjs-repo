// Section 10, Vid 237 - Adding a Newsletter Route

import { MongoClient } from "mongodb";

// Handler function for handling HTTP requests
async function handler(req, res) {
  // Checking if the request method is POST
  if (req.method === "POST") {
    // Extracting the email from the request body
    const userEmail = req.body.email;

    // Validating the email: if it's not present or doesn't include '@', send a 422 response and return early
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // Connect to the MongoDB client at the provided connection string
    const client = await MongoClient.connect(
      "mongodb+srv://jhordantej:8QtbVYirsdPEO90R@cluster0.i151c5l.mongodb.net/"
    );

    // Access the 'newsletter' database
    const db = client.db("newsletter");

    // Insert a new document into the 'emails' collection. The document contains the user's email
    await db.collection("emails").insertOne({ email: userEmail });

    // Close the connection to the MongoDB client
    client.close();
    // Logging the email to the console
    console.log(userEmail);
    // Sending a 201 response with a success message
    res.status(201).json({ message: "Signed up! Thanks for subscribing." });
  }
}

// Exporting the handler function as the default export
export default handler;
