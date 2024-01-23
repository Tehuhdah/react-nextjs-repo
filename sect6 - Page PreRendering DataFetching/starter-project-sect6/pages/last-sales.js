// Section 6, Vid 194 - Implementing Client-Side Data Fetching
// Practical Example using Firebase

// Importing necessary hooks from React
import { useEffect, useState } from "react";

import useSWR from "swr";

// Defining a functional component
function LastSalesPages() {
  // Using the useState hook to manage sales data and loading state
  const [sales, setSales] = useState();
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

      // Updating the sales state with the transformed data
      setSales(transformedSales);
    }
    // The useEffect hook will run again if the data changes
  }, [data]);

  //   // Using the useEffect hook to fetch data when the component mounts
  //   useEffect(() => {
  //     // Setting loading state to true before starting the fetch operation
  //     setIsLoading(true);

  //     // Fetching data from the provided URL
  //     fetch("https://nextjs-course-25c5a-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json()) // Parsing the response data as JSON
  //       .then((data) => {
  //         const transformedSales = []; // Creating an empty array to hold the transformed sales data

  //         // Looping over the fetched data and transforming it into an array of objects
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         // Updating the sales state with the transformed data
  //         setSales(transformedSales);

  //         // Setting loading state to false after the fetch operation is complete
  //         setIsLoading(false);
  //       });
  //   }, []); // Passing an empty dependency array to ensure the effect runs only once

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

  if (!data || !sales) {
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

export default LastSalesPages;
