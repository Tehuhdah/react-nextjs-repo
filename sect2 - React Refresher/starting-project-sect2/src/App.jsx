// Section 2, vid 16: Understanding how React Works.

// Importing the Post component to be used inside of App.jsx
import Post from "./components/Post";

// Define a functional component named App.
// Functional components are JavaScript functions that return React elements.
function App() {
  // The component returns a JSX expression.
  // JSX is a syntax extension for JavaScript, which looks similar to HTML.
  // It gets compiled to React.createElement() calls which return React elements.
  // In this case, we are returning the Post component. They can also be reused.

  return (
    <main>
      {/*  You must have 1 root element for sibling elements. <main> or empty <> */}
      {/* You can render your components with self closign brackets or in traditional html style. */}
      <Post></Post>
      <Post></Post>
      <Post />
      <Post />
    </main>
  );
}

// Export the App component as the default export.
// This allows other files to import this component using `import App from './App'`.
export default App;
