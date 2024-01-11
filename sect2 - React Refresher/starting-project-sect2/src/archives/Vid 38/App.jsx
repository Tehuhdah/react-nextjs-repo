// Section 2, vid 16: Understanding how React Works.

// Importing the Post component to be used inside of App.jsx
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";

import { useState } from "react";

// Importing the PostList component to be used inside of App.jsx
import PostsList from "./components/PostsList";

// Define a functional component named App.
// Functional components are JavaScript functions that return React elements.
function App() {
  // Use the useState hook to create a state variable 'modalIsVisible' and a function to update it 'setModalIsVisible'.
  // The initial value of 'modalIsVisible' is set to false.
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // This function is called when the user clicks on the createPost component.
  // It sets 'modalIsVisible' to true, which can be used to show a modal or perform other UI changes.
  function showModalHandler() {
    setModalIsVisible(true);
  }

  // This function is called when the user clicks outside of the modal.
  // It sets 'modalIsVisible' to false, which can be used to hide the modal or perform other UI changes.
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  // The component returns a JSX expression.
  // JSX is a syntax extension for JavaScript, which looks similar to HTML.
  // The <> and </> are shorthand for React.Fragment, which allows to return multiple elements.
  return (
    <>
      {/* The MainHeader component is rendered with a prop 'onCreatePost'. 
          This prop is a function that will be called when the user wants to create a post. */}
      <MainHeader onCreatePost={showModalHandler} />

      {/* The main HTML element is used to wrap the main content of the document. */}
      <main>
        {/* The PostsList component is rendered with two props: 'isPosting' and 'onStopPosting'. 
            'isPosting' is a boolean that indicates whether the user is currently creating a post. 
            'onStopPosting' is a function that will be called when the user stops creating a post. */}
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
