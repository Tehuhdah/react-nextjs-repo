// Section 9, Vid 226 - Preparing the Frontend Form

// Import the useRef hook from React. This hook is used to access the values of form inputs.
import { useRef } from "react";

// Define a functional component named 'HomePage'.
function HomePage() {
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

    // At this point, you can do something with the entered email and feedback, like sending them to a server.
  }

  // Render the component.
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          {/* The 'ref' prop is used to attach the 'emailInputRef' ref to the email input. */}
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          {/*  The 'ref' prop is used to attach the 'feedbackInputRef' ref to the feedback textarea.*/}
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

// Export the HomePage component as the default export.
export default HomePage;
