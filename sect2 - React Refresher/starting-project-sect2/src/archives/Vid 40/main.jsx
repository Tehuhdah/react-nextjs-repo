// Section 2, vid 16: Understanding how React Works.

// Import the React library. This is necessary to use JSX and React components.
import React from "react";

// Import the RouterProvider, and createBrowserRouter from react-router-dom to enable routing.
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Import the ReactDOM library. This is used to render React components to the DOM.
import ReactDOM from "react-dom/client";

// Import the App component from the App.jsx file. This is the main component of your application.
import App from "./App";

// Import the NewPost component from the components folder that will contain NewPost.jsx
import NewPost from "./components/NewPost";

// Import the RootLayout component from the routes folder that will contain RootLayout.jsx
import RootLayout from "./routes/RootLayout";

// Import the NewPost component frrom the NewPost.jsx file location in the components folder.

// Import the CSS for your application from index.css.
import "./index.css";

//
// Create a browser router using the createBrowserRouter function.
// This function takes an array of route objects as its argument.
const router = createBrowserRouter([
  {
    // This is the root route ("/").
    // When the URL is "/", the RootLayout component is rendered.
    path: "/",
    element: <RootLayout />,

    // The children array contains route objects for child routes.
    // When the URL matches a child route, the corresponding component is rendered inside the RootLayout component.
    children: [
      // When the URL is exactly "/", the App component is rendered.
      { path: "/", element: <App /> },

      // When the URL is "/create-post", the NewPost component is rendered.
      { path: "/create-post", element: <NewPost /> },
    ],
  },
]);

// Use ReactDOM to render your App component to the DOM.
// The createRoot method is a part of the new concurrent mode in React. It creates a root for your application on the element with the id 'root'.
// The render method then renders a React element into the root DOM node.
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode is a wrapper component that checks for potential problems in your application during development.
  // The App component and all children components will get rendered here.

  // UNDERSTANDING THE FLOW
  // Posts component contains props that is used to return jsx code that display the author and body.
  // PostsList component returns the Posts component stored inside of a ul.
  // App component is the root component which will be rendered below.
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
