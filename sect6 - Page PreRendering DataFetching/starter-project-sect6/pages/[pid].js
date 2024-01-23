// Section 6, Vid 181 - Working with Dynamic parameters

// Importing the filesystem module.
import fs from "fs/promises";

// Importing the path module.
import path from "path";

import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  // Check if the 'loadedProduct' prop is not defined
  // This could be the case if the data is still being fetched, or if an invalid product ID was provided
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  // Construct the full path to the data file
  // process.cwd() gives the current working directory, and 'data' and 'dummy-backend.json'
  // are appended to it
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // Read the data file asynchronously using Node's fs module
  // The await keyword is used to wait for the readFile operation to complete before moving on
  const jsonData = await fs.readFile(filePath);

  // Parse the JSON data into a JavaScript object
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  // params.pid will be the value in the path
  const productId = params.pid;

  // Call the getData() function and store the results into data
  const data = await getData();

  // Find the product in the data array that matches the provided product ID
  // The find method is used to iterate over the products array and return the first product
  // that satisfies the provided testing function
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
  // Fetch the data asynchronously
  const data = await getData();

  // Map over the products array to extract the ids
  const ids = data.products.map((product) => product.id);

  // Map over the ids array to create an array of objects
  // Each object represents a possible path for this dynamic page
  // Each object has a 'params' property, which is an object that contains the dynamic parts of the path
  // In this case, the dynamic part of the path is the product ID (pid)
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    // The 'paths' property is the array of objects created above
    paths: pathsWithParams,

    // The 'fallback' property determines what happens if a request is made for a path that wasn't
    // returned by getStaticPaths
    // If 'fallback' is false, then any paths not returned by getStaticPaths will result in a 404 page
    // If 'fallback; is true, then even paths that are not listed, can be rendered. (If data is in database.)
    // If true, they these paths will not be pre-rendered, but rendered just in time.
    // Alternative: 'blocking' - NextJS will wait for the page to be generated before rendering it.
    fallback: false,
  };
}

export default ProductDetailPage;
