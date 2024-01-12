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
      {/* The main HTML element is used to wrap the main content of the document. */}
      <Outlet />
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
