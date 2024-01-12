// Section 2, vid 16: Understanding how React Works.

// File refacoring.
// Section 2, Vid 41: Refactoring Route Components & More Nesting

// Importing the PostList component to be used inside of App.jsx
import PostsList from "../components/PostsList";

// Importing the Outlet Component from 'react-router-doms' since we now have a child route.
import { Outlet } from "react-router-dom";

// Define a functional component named Posts.
// Functional components are JavaScript functions that return React elements.
function Posts() {
  // The component returns a JSX expression.
  // JSX is a syntax extension for JavaScript, which looks similar to HTML.
  // The <> and </> are shorthand for React.Fragment, which allows to return multiple elements.
  return (
    <>
      {/* The Outlet element is served as a placeholder in your component where the child routes will be rendered. */}
      <Outlet />
      {/* The main HTML element is used to wrap the main content of the document. */}
      <main>
        {/* The PostsList component is rendered with two props: 'isPosting' and 'onStopPosting'. 
            'isPosting' is a boolean that indicates whether the user is currently creating a post. 
            'onStopPosting' is a function that will be called when the user stops creating a post. */}
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

// This is an asynchronous function named 'loader'.
export async function loader() {
  // The fetch API is used to make a GET request to the server at the specified URL.
  // The 'await' keyword is used to pause the execution of the function until the Promise returned by fetch is resolved.
  // The resolved value of the Promise is assigned to the 'response' variable.
  const response = await fetch("http://localhost:8080/posts");

  // The 'json' method is called on the 'response' object to parse the response body as JSON.
  // The 'await' keyword is used again to pause the execution of the function until the Promise returned by 'json' is resolved.
  // The resolved value of the Promise is assigned to the 'resData' variable.
  const resData = await response.json();

  // The function returns the 'posts' property of the 'resData' object.
  // This is expected to be an array of post objects.
  return resData.posts;
}
