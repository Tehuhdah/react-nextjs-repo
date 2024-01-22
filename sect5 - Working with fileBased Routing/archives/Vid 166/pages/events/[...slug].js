// Section 5, Vid 151 - Setting Up the Main Pages.

import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

// The Filtered Events Page of the project. The user will get redirected to
// this page if the url is '/event/.../...'
// Define the FilteredEventsPage component
// This is the Filtered Events Page of the project
// The user will get redirected to this page if the url is '/event/.../...'
function FilteredEventsPage() {
  // Initialize the router for navigation
  const router = useRouter();

  // Get the dynamic segments of the path (year and month) from the router's query object
  // Store these segments in the filterData constant
  const filterData = router.query.slug;

  // If filterData is not available yet (i.e., the page is still loading), render a loading message
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  // Log the filterData to the console for debugging purposes
  console.log(filterData); // Array [ "2021", "3" ]

  // Get the year and month from the filterData array
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Convert the year and month to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // If the year or month is not a number, or the year is not between 2021 and 2030, or the
  // month is not between 1 and 12, render an error message
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter. Please adjust your values!</p>;
  }

  // Call the getFilteredEvents function to get the events for the selected year and month
  // Store the returned events in the filteredEvents constant
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  // If no events were found for the selected year and month, render a message
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }
}

export default FilteredEventsPage;
