// Section 6, Vid 174 - NextJS Pre-render by Default

// Importing the filesystem module.
import fs from "fs/promises";

// Importing the path module.
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {/* Map the products array where for each product, we output it 
      in a list item. */}
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// This function is a special Next.js function that runs at build time on the server-side.
// It's used to fetch data and pass it as props to the page component.
export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  // Construct the full path to the data file
  // process.cwd() gives the current working directory, and 'data' and 'dummy-backend.json' are appended to it
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // Read the data file asynchronously using Node's fs module
  // The await keyword is used to wait for the readFile operation to complete before moving on
  const jsonData = await fs.readFile(filePath);

  // Parse the JSON data into a JavaScript object
  const data = JSON.parse(jsonData);

  // If there is no data to begin with, we can redirect
  // the user to a different route.
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // If we fail to fetch the data, we can redirect
  // the user to the 404 error page.
  if (data.products.length === 0) {
    return { notFound: true };
  }

  // Return the data as props to the page component
  // The 'products' property of the data object is passed as a prop to the HomePage component
  return {
    props: {
      // Ex. {id: 'p1' , title: 'Product 1' , description: 'This is Product 1'}
      products: data.products,
    },
    // The 'revalidate' property is used with Incremental Static Regeneration (ISR) in Next.js
    // It specifies the time (in seconds) after which a page re-generation can occur
    // Here, it's set to 10 seconds, meaning after every 10 seconds, Next.js will attempt to re-generate the page
    // If a request comes in during this time, the existing (stale) page will be served, and in the background,
    // Next.js will re-generate the page
    // For the following requests, the newly generated page will be served
    revalidate: 10,
    notFound: true,
    redirect: { destination: "./no-data" },
  };
}

export default HomePage;
