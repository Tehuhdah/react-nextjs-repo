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
      {/* Render the Post component with author and body props. */}
      {/* The Post component will receive these props and render them. */}
      <Post author="Jhordan" body="React.js is Awesome!"></Post>
      <Post author="Angelo" body="Check out the full course!"></Post>
      <Post author="Tejada" body="Its on a crazy discount right now!" />
      {/* Render the Post component without any props. */}
      {/* Since no props are passed, the Post component will render with undefined props. */}
    </main>
  );
}

// Export the App component as the default export.
// This allows other files to import this component using `import App from './App'`.
export default App;
