// Section 2, Vid 23 - Preparing the App For State Management

// File refacoring.
// Section 2, Vid 41 - Refactoring Route Components & More Nesting

// Section 2, Vid 42 - Linking and Navigating

// Section 2, Vid 44 - Submitting data with action()s

// Importing the Link component from 'react-router-dom'
import { Link, Form, redirect } from "react-router-dom";

// Importing the CSS Module from NewPost.module
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

// This is a functional component named 'NewPost'.
// It doesn't take any props.
function NewPost() {
  return (
    <Modal>
      {/* The form element has a method attribute set to "post". */}
      {/* The form doesn't have an onSubmit event handler in this code, so the form will be submitted normally. */}
      <Form method="post" className={classes.form}>
        {/* The textarea and input elements don't have onChange event handlers in this code, so their values will be submitted as is. */}
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        {/* The Cancel button, which is a Link component, navigates to the parent route when clicked. */}
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// This is an async function named 'action'.
// It takes an object as a parameter and destructures it to get the 'request' property.
// This function is likely used as a route action in a server-side rendering setup with React Router.
export async function action({ request }) {
  // The request's form data is retrieved and converted to a regular object.
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...'. author: '...'}

  // A POST request is made to the "/posts" endpoint with the form data as the request body.
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // After the request is made, a redirect response is returned to redirect the user to the root route ("/").
  return redirect("/");
}
