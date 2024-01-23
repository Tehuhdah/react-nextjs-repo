// Section 6, Vid 194 - Implementing Client-Side Data Fetching
// Practical Example using Firebase

// Importing necessary hooks from React
import { useEffect, useState } from "react";

import useSWR from "swr";

// Defining a functional component
function LastSalesPages(props) {
  // Using the useState hook to manage sales data and loading state
  const [sales, setSales] = useState(props.sales);
  //const [isLoading, setIsLoading] = useState(false);

  // useSWR is a React Hook that allows you to fetch, cache, or revalidate data
  // The first argument is the key to the data, which can be a URL, in this case
  const { data, error } = useSWR(
    // This is the URL where the data is fetched from
    "https://nextjs-course-25c5a-default-rtdb.firebaseio.com/sales.json",
    // This is the fetcher function that takes the URL and returns a Promise that resolves with the data
    // In this case, it uses the Fetch API to get the data from the URL
    (url) => fetch(url).then((res) => res.json()) // Call the json method here
  );

  // useEffect is a React Hook that runs side effects after render
  // In this case, it's used to transform the fetched data once it's available
  useEffect(() => {
    // Check if the data is available
    if (data) {
      const transformedSales = [];
      // Looping over the fetched data and transforming it into an array of objects
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      // Updating the sales state with the transformed dataS
      setSales(transformedSales);
    }
    // The useEffect hook will run again if the data changes
  }, [data]);

  //   // Returning a loading message if the data is still being fetched
  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   // Returning a message if no sales data is available
  //   if (!sales) {
  //     return <p>No data yet</p>;
  //   }

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  // Rendering the sales data as a list if it's available
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

// getStaticProps is a Next.js function that runs at build time in production,
// and generates the props for the page, in this case, the sales data
export async function getStaticProps() {
  // Fetching the data from the URL
  const response = await fetch(
    "https://nextjs-course-25c5a-default-rtdb.firebaseio.com/sales.json"
  );
  // Parsing the response data as JSON
  const data = await response.json();

  // Creating an empty array to hold the transformed sales data
  const transformedSales = [];

  // Looping over the fetched data and transforming it into an array of objects
  for (const key in data) {
    transformedSales.push({
      id: key, // The key from the data object becomes the id
      username: data[key].username, // The username from the data object
      volume: data[key].volume, // The volume from the data object
    });
  }

  // Returning the transformed sales data as props for the page
  return { props: { sales: transformedSales } };
}

export default LastSalesPages;
