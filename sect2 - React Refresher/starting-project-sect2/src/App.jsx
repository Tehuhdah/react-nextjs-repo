// Section 2, vid 16: Understanding how React Works.

// Define a functional component named App.
// Functional components are JavaScript functions that return React elements.
function App() {
  // The component returns a JSX expression.
  // JSX is a syntax extension for JavaScript, which looks similar to HTML.
  // It gets compiled to React.createElement() calls which return React elements.
  return <h1>Hello World!</h1>;
}

// Export the App component as the default export.
// This allows other files to import this component using `import App from './App'`.
export default App;
