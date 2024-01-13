// Section 3, Vid 90 - Working with Pages & Layouts.

import "./globals.css";

// This is a metadata object that is being exported.
// It contains the title and description of the app.
// This metadata can be used in various parts of the app such as the document head.
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

// This is the default export of the module, a functional component named 'RootLayout'.
// It takes one prop: 'children'. This prop is a special prop in React that is used to pass components as data to other components.
// In this case, 'children' represents the components that will be wrapped by the 'RootLayout' component.
export default function RootLayout({ children }) {
  return (
    // The component returns an HTML document structure with a 'lang' attribute set to 'en' for English.
    // Inside the 'body' tag, the 'children' prop is rendered. This is where the components passed to 'RootLayout' will appear.
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
