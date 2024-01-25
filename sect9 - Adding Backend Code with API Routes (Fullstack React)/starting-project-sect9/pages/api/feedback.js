// Section 9, Vid 225 - Writing our First API Route

// A file inside of a api folder is not required to return jsx code.
// We can write any server side code.
// Define a function named 'handler'. This function will handle HTTP requests.
// It takes two arguments: 'req' (the request object) and 'res' (the response object).
function handler(req, res) {
  // The 'status' method sets the HTTP status code of the response.
  // Here, we're setting the status code to 200, which means 'OK' or 'Successful'.
  // The 'json' method sends a JSON response. This method sends a response (with the correct content-type)
  // that is the parameter converted to a JSON string using JSON.stringify().
  // Here, we're sending a JSON response with a message of 'This Works!'.
  res.status(200).json({ message: "This Works!" });
}

// Export the 'handler' function as a default export.
// This allows us to import this function in other files using the 'import' statement.
export default handler;
