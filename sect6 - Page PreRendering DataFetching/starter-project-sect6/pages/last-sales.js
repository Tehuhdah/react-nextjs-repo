// Section 6, Vid 194 - Implementing Client-Side Data Fetching
// Practical Example using Firebase

// Importing necessary hooks from React
import { useEffect, useState } from "react";

// Defining a functional component
function LastSalesPages() {
  // Using the useState hook to manage sales data and loading state
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // Using the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Setting loading state to true before starting the fetch operation
    setIsLoading(true);

    // Fetching data from the provided URL
    fetch("https://nextjs-course-25c5a-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json()) // Parsing the response data as JSON
      .then((data) => {
        const transformedSales = []; // Creating an empty array to hold the transformed sales data

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

        // Setting loading state to false after the fetch operation is complete
        setIsLoading(false);
      });
  }, []); // Passing an empty dependency array to ensure the effect runs only once

  // Returning a loading message if the data is still being fetched
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Returning a message if no sales data is available
  if (!sales) {
    return <p>No data yet</p>;
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
