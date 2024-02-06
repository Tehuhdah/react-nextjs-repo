// Section 10, Vid 236 - Starting Project & A Challenge for you

// Importing CSS module for styling the component
import { useRef, useContext } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

// NewsletterRegistration component that renders a form for newsletter registration
function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  // Handler function for the form submission event
  function registrationHandler(event) {
    // Prevent the default form submission behavior to handle it with JavaScript
    event.preventDefault();

    // Use the ref to get the current value of the email input field
    const enteredEmail = emailInputRef.current.value;

    // Show a notification with a status of "pending" to inform the user that the registration process has started
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    // Send a POST request to the "/api/newsletter" endpoint to register the user for the newsletter
    fetch("/api/newsletter", {
      method: "POST", // Use the POST method for the request
      body: JSON.stringify({ email: enteredEmail }), // Include the entered email in the body of the request
      headers: {
        "Content-Type": "application/json", // Specify that the request body will be in JSON format
      },
    })
      .then((response) => {
        // If the response is OK, parse it as JSON
        if (response.ok) {
          return response.json();
        } else {
          // If the response is not OK, parse it as JSON and then throw an error with the message from the response
          return response.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        }
      })
      .then((data) => {
        // If the request was successful, show a success notification
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter!",
          status: "success",
        });
      })
      .catch((error) => {
        // If an error occurred during the request, show an error notification with the error message
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  // Rendering the component
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

// Exporting the NewsletterRegistration component as the default export
export default NewsletterRegistration;
