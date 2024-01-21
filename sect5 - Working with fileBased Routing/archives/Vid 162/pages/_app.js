// Updated
// Section 5, Vid 162 - Adding a General Layout Wrapper Component

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
      {/* Render the active page (Component) and spread its props (pageProps) */}
      {/* This allows the page to receive its own props */}
      <Component {...pageProps} />
    </Layout>
  );
}

// Export the MyApp component as the default export
// This allows other modules to use the MyApp component
export default MyApp;
