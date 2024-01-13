/* Section 2, Vid 22 - Exercise & Another Component */

// File refacoring.
// Section 2, Vid 41: Refactoring Route Components & More Nesting

// Section 2, Vid 44 - Submitting data with action()s

// Importing the useLoaderdata hook from from 'react-router-dom'
import { useLoaderData } from "react-router-dom";

// Importing the Post.
import Post from "./Post";

// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

// This is a functional component named 'PostsList'.
// It doesn't take any props (as indicated by the empty object in the function parameters).
function PostsList({}) {
  // The useLoaderData hook is called to fetch or load data for the posts.
  // This hook is likely defined elsewhere in your codebase and is used to fetch or load data, probably for the posts in this context.
  // The data returned by this hook is then stored in the 'posts' constant.
  // This data will be an array of post objects if the data loading was successful, or it could be an error object or null if the data loading failed or hasn't completed yet.
  const posts = useLoaderData();

  // The component returns a fragment (indicated by the empty tags <> and </>).
  return (
    <>
      {/* The posts are rendered as a list of Post components. */}
      {/* If there are posts (i.e., the length of the posts array is greater than 0),
       render a list of posts. */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* For each post in the posts array, render a Post component. */}
          {/* The 'key' prop is set to the post's body, and the 'author' and 'body' props are set to the post's author and body, respectively. */}
          {posts.map((post) => (
            <Post
              key={post.body}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {/* If there are no posts (i.e., the length of the posts array is 0),
      render a message indicating that there are no posts yet. */}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          {/* Display a message indicating that there are no posts yet. */}
          <h2>There are no posts yet.</h2>
          {/* Encourage the user to add some posts. */}
          <p>Lets add some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
