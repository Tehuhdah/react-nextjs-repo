// Section 8, Vid 217 - The '_document.js' File (And What It Does)

// Import the necessary components from "next/document".
// Document is used to augment your application's <html> and <body> tags.
// Html, Head, Main, and NextScript are components that Next.js provides for controlling app-wide layout.
import Document, { Html, Head, Main, NextScript } from "next/document";

// Create a custom Document.
// This is a special Next.js file that allows you to customize the <html> and <body> tags for your application.
// It's rarely needed, but can be useful for applying styles or scripts to every page in your app.
class MyDocument extends Document {
  render() {
    return (
      // The Html component is a replacement for the <html> element.
      // The "lang" prop sets the language of the document.
      <Html lang="en">
        <Head>
          {/* The body tag should not be in the Head component. It should be outside of it. */}
          <body>
            {/* This div with id "overlays" can be used for global styles or scripts that need to be applied to every page.*/}
            <div id="overlays" />
            {/* The Main component is a replacement for the <main> element and should be used only once in this document.*/}
            {/* This is where Next.js will inject the application's content.*/}
            <Main />
            {/* The NextScript component is a replacement for the <script> element and should be used only once in this document.*/}
            {/* This is where Next.js will inject the necessary scripts for your application to work.*/}
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
