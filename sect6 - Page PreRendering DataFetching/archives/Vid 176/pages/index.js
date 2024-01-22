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
export async function getStaticProps() {
  // Construct the full path to the data file
  // process.cwd() gives the current working directory, and 'data' and 'dummy-backend.json' are appended to it
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // Read the data file asynchronously using Node's fs module
  // The await keyword is used to wait for the readFile operation to complete before moving on
  const jsonData = await fs.readFile(filePath);

  // Parse the JSON data into a JavaScript object
  const data = JSON.parse(jsonData);

  // Return the data as props to the page component
  // The 'products' property of the data object is passed as a prop to the HomePage component
  return {
    props: {
      // Ex. {id: 'p1' , title: 'Product 1' , description: 'This is Product 1'}
      products: data.products,
    },
  };
}

export default HomePage;
