// Section 2, Vid 45 - Dynamic Routes

// Importing necessary modules and components
import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

// This is a functional component named 'PostDetails'.
// It doesn't take any props.
function PostDetails() {
  // The useLoaderData hook is called to fetch or load data for the post.
  // The data returned by this hook is then stored in the 'post' constant.
  const post = useLoaderData();

  // If there is no post data (i.e., the post is null or undefined), render a message indicating that the post could not be found.
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  // If there is post data, render the post details.
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

// This is an async function named 'loader'.
// It takes an object as a parameter and destructures it to get the 'params' property.
// This function is likely used as a data loader for the 'PostDetails' component.
export async function loader({ params }) {
  // A GET request is made to the "/posts/:id" endpoint to fetch the details of a specific post.
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  // The response is then converted to JSON and the 'post' property of the resulting object is returned.
  const resdata = await response.json();
  return resdata.post;
}
