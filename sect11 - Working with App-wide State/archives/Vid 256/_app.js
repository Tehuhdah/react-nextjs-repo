// Updated
// Section 5, Vid 162 - Adding a General Layout Wrapper Component

// Updated
// Section 8, Vid 215 - Working with the '_app.js' File (and Why?)

import Head from "next/head";

// Import the Layout component from the layout file
// This component is used to wrap all pages with a common layout
import Layout from "../components/layout/layout";

import Notification from "../components/ui/notification";
import NotificationContext, {
  NotificationContextProvider,
} from "../store/notification-context";

// Import the global styles
import "../styles/globals.css";

// Define the MyApp component
// This is a special component in Next.js that initializes pages
// It keeps state when navigating between pages
function MyApp({ Component, pageProps }) {
  return (
    // Using the NotificationContext Provider to allow all child components to access the Notification context
    <NotificationContextProvider>
      {/* The Layout component is a wrapper for the main content of each page */}
      <Layout>
        {/* The Head component is used to set the HTML head tags for all pages */}
        <Head>
          {/* The title tag sets the title of the document */}
          <title>Next Events</title>
          {/* The meta description provides a brief summary of the page's content */}
          <meta name="description" content="NextJS Events" />
          {/* The viewport meta tag makes the website look good on all devices and screen resolutions */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* The Component represents the active page. The {...pageProps} syntax spreads out the page's props onto the Component */}
        <Component {...pageProps} />
        {/* The Notification component is used to display notifications to the user */}
        {/* <Notification title="Test" message="This is a test." status="pending" /> */}
      </Layout>
    </NotificationContextProvider>
  );
}

// Export the MyApp component as the default export
// This allows other modules to use the MyApp component
export default MyApp;
