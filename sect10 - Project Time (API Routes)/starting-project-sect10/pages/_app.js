// Updated
// Section 5, Vid 162 - Adding a General Layout Wrapper Component

// Updated
// Section 8, Vid 215 - Working with the '_app.js' File (and Why?)

import Head from "next/head";

// Import the Layout component from the layout file
// This component is used to wrap all pages with a common layout
import Layout from "../components/layout/layout";

// Import the global styles
import "../styles/globals.css";

// Define the MyApp component
// This is a special component in Next.js that initializes pages
// It keeps state when navigating between pages
function MyApp({ Component, pageProps }) {
  return (
    // Render the Layout component
    // Inside the Layout component, render the active page (Component) and spread its props (pageProps)
    <Layout>
      {/* Applying this Head Component and it's content to all the pages in this project. */}
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Render the active page (Component) and spread its props (pageProps) */}
      {/* This allows the page to receive its own props */}
      <Component {...pageProps} />
    </Layout>
  );
}

// Export the MyApp component as the default export
// This allows other modules to use the MyApp component
export default MyApp;
