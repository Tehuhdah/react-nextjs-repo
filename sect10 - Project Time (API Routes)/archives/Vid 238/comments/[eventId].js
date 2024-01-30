// Section 10, Vid 238 - Adding Comments API Routes

// /comments/some-event-id

// Handler function for handling HTTP requests
function handler(req, res) {
  // Extracting the event ID from the request query parameters
  const eventId = req.query.eventId;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    // Logging the new comment to the console
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
}

// Exporting the handler function as the default export
export default handler;
