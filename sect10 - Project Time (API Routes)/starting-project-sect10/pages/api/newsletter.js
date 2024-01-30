// Section 10, Vid 237 - Adding a Newsletter Route

// Handler function for handling HTTP requests
function handler(req, res) {
  // Checking if the request method is POST
  if (req.method === "POST") {
    // Extracting the email from the request body
    const userEmail = req.body.email;

    // Validating the email: if it's not present or doesn't include '@', send a 422 response and return early
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    // Logging the email to the console
    console.log(userEmail);
    // Sending a 201 response with a success message
    res.status(201).json({ message: "Signed up! Thanks for subscribing." });
  }
}

// Exporting the handler function as the default export
export default handler;
