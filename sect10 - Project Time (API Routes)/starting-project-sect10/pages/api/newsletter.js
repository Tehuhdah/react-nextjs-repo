// Section 10, Vid 237 - Adding a Newsletter Route

import { connectDatabase, insertDocument } from "../../helpers/db-util";

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
    let collection = "newsletter";
    let database = "events";

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
      await insertDocument(client, collection, { email: userEmail }, database);
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
