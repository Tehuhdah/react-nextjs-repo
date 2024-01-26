// Import the useRef and useState hooks from React.
// useRef is used to access the values of form inputs.
// useState is used to manage component state.
import { useRef, useState } from "react";

// Define a functional component named 'HomePage'.
function HomePage() {
  // Initialize feedbackItems state variable as an empty array using useState.
  // setFeedbackItems is the function to update this state.
  const [feedbackItems, setFeedbackItems] = useState([]);

  // Initialize two refs using the useRef hook to store the current values of the email and feedback inputs.
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  // Define a function to handle the form submission.
  function submitFormHandler(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the current values of the email and feedback inputs using the refs.
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    // Construct the request body as an object with the entered email and feedback.
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    // Use the Fetch API to send a POST request to the '/api/feedback' endpoint.
    // The request body is the stringified reqBody object, and the 'Content-Type' header is set to 'application/json'.
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // Convert the response to JSON.
      .then((response) => response.json())
      // Log the JSON data to the console.
      .then((data) => console.log(data));
  }

  // Define a function to load feedback items.
  function loadFeedbackHandler() {
    // Use the Fetch API to send a GET request to the '/api/feedback' endpoint.
    fetch("/api/feedback")
      // Convert the response to JSON.
      .then((response) => response.json())
      // Set the feedbackItems state to the feedback items received from the server.
      .then((data) => setFeedbackItems(data.feedback));
  }

  // Render the component.
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          {/* Attach the 'emailInputRef' ref to the email input using the 'ref' prop. */}
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          {/* Attach the 'feedbackInputRef' ref to the feedback textarea using the 'ref' prop. */}
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      {/* When the button is clicked, the loadFeedbackHandler function is called. */}
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      {/* Map over the feedbackItems state and render each item as a list item. */}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Export the HomePage component as the default export.
export default HomePage;
