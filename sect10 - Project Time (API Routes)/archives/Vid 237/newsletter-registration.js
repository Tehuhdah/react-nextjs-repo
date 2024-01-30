// Section 10, Vid 236 - Starting Project & A Challenge for you

// Importing CSS module for styling the component
import { useRef } from "react";
import classes from "./newsletter-registration.module.css";

// NewsletterRegistration component that renders a form for newsletter registration
function NewsletterRegistration() {
  const emailInputRef = useRef();
  // Handler function for submitting the form
  function registrationHandler(event) {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Getting the value of the email input field
    const enteredEmail = emailInputRef.current.value;

    // TODO: fetch user input (state or refs)
    // This TODO comment indicates that you might want to fetch more user input, possibly using React state or refs

    // TODO: send valid data to API
    // This TODO comment indicates that you might want to add some validation before sending the data to the API (through the api)

    // Sending a POST request to the "/api/newsletter" endpoint
    fetch("/api/newsletter", {
      method: "POST", // Specifying the method as POST
      body: JSON.stringify({ email: enteredEmail }), // Sending the entered email in the body of the request
      headers: {
        "Content-Type": "application/json", // Specifying the content type of the request body as JSON
      },
    })
      .then((response) => response.json()) // Parsing the response as JSON
      .then((data) => console.log(data)); // Logging the parsed response data
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
