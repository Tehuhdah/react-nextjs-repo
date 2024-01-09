// Section 2, vid 16: Understanding how React Works.

// Import the React library. This is necessary to use JSX and React components.
import React from "react";

// Import the ReactDOM library. This is used to render React components to the DOM.
import ReactDOM from "react-dom/client";

// Import the App component from the App.js file. This is the main component of your application.
import App from "./App";

// Import the CSS for your application from index.css.
import "./index.css";

// Use ReactDOM to render your App component to the DOM.
// The createRoot method is a part of the new concurrent mode in React. It creates a root for your application on the element with the id 'root'.
// The render method then renders a React element into the root DOM node.
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode is a wrapper component that checks for potential problems in your application during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
