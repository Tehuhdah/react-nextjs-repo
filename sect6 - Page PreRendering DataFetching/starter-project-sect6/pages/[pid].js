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

  const productId = params.pid;

  // Construct the full path to the data file
  // process.cwd() gives the current working directory, and 'data' and 'dummy-backend.json' are appended to it
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // Read the data file asynchronously using Node's fs module
  // The await keyword is used to wait for the readFile operation to complete before moving on
  const jsonData = await fs.readFile(filePath);

  // Parse the JSON data into a JavaScript object
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export default ProductDetailPage;
