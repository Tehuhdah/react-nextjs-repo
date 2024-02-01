// Section 10, Vid 245 - More Error Handling

import { MongoClient } from "mongodb";

// Function to connect to the MongoDB database
export async function connectDatabase() {
  // Connect to the MongoDB client at the provided connection string
  const client = await MongoClient.connect(
    "mongodb+srv://jhordantej:Jho@cluster0.i151c5l.mongodb.net/"
  );
  // Return the connected client object
  return client;
}

// Function to insert a document into a collection in the 'events' database
export async function insertDocument(client, collection, document, database) {
  // Access the 'events' database
  const db = client.db(database);
  // Insert a new document into the 'newsletter' collection.
  const result = await db.collection(collection).insertOne(document);

  return result;
}

// Function to retrieve all document from a collection in the 'events' database
export async function getAllDocuments(client, collection, database, sort) {
  // Connect to the database
  const db = client.db(database);

  // Fetch all documents from the 'comments' collection, sort them in descending order by id,
  // and convert the result to an array
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
