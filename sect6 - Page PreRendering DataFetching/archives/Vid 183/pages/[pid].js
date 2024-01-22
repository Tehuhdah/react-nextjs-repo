// Section 6, Vid 181 - Working with Dynamic parameters

// Importing the filesystem module.
import fs from "fs/promises";

// Importing the path module.
import path from "path";

import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // params.pid will be the value in the path
  const productId = params.pid;

  // Construct the full path to the data file
  // process.cwd() gives the current working directory, and 'data' and 'dummy-backend.json' are appended to it
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // Read the data file asynchronously using Node's fs module
  // The await keyword is used to wait for the readFile operation to complete before moving on
  const jsonData = await fs.readFile(filePath);

  // Parse the JSON data into a JavaScript object
  const data = JSON.parse(jsonData);

  // Find the product in the data array that matches the provided product ID
  // The find method is used to iterate over the products array and return the first product that satisfies the provided testing function
  const product = data.products.find((product) => product.id === productId);

  // Return the found product as a prop to the page component
  // The 'loadedProduct' prop will contain the product object that was found
  return {
    props: {
      loadedProduct: product,
    },
  };
}

// This function is used by Next.js to pre-render all possible paths for a dynamic page
// In this case, it's used to generate static pages for each product
export async function getStaticPaths() {
  return {
    // The 'paths' property is an array of objects, where each object represents a possible path for this dynamic page
    // Each object has a 'params' property, which is an object that contains the dynamic parts of the path
    // In this case, the dynamic part of the path is the product ID (pid), so each object in the 'paths' array has a 'pid' property
    // The 'params' object with the dynamic parts of the path (like 'pid') will get passed to the getStaticProps function
    paths: [
      { params: { pid: "p1" } }, // Path for the product with ID 'p1'
      { params: { pid: "p2" } }, // Path for the product with ID 'p2'
      { params: { pid: "p3" } }, // Path for the product with ID 'p3'
    ],
    // The 'fallback' property determines what happens if a request is made for a path that wasn't returned by getStaticPaths
    // If 'fallback' is false, then any paths not returned by getStaticPaths will result in a 404 page
    fallback: false,
  };
}

export default ProductDetailPage;
