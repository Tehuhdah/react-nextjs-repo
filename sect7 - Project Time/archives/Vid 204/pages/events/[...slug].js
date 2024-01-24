// // Section 5, Vid 151 - Setting Up the Main Pages.

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

// The Filtered Events Page of the project. The user will get redirected to
// this page if the url is '/event/.../...'
function FilteredEventsPage(props) {
  // Initialize state for loaded events
  const [loadedEvents, setLoadedEvents] = useState();
  // Initialize the router for navigation
  const router = useRouter();

  // Get the dynamic segments of the path (year and month) from the router's query object
  // Store these segments in the filterData constant
  const filterData = router.query.slug;

  // Fetch data from the API using SWR
  const { data, error } = useSWR(
    "https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  // When data is loaded, transform the data into an array and set the loadedEvents state
  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  // If loadedEvents is not set yet (i.e., the page is still loading), render a loading message
  if (!loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  // Get the year and month from the filterData array
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Convert the year and month to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // If the year or month is not a number, or the year is not between 2021 and 2030, or the
  // month is not between 1 and 12, or there's an error in fetching data, render an error message
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // Call the getFilteredEvents function to get the events for the selected year and month
  // Store the returned events in the filteredEvents constant
  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  // If no events were found for the selected year and month, render a message
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // Create a new date object for the selected year and month
  const date = new Date(numYear, numMonth - 1);

  // Render the ResultsTitle and EventList components with the appropriate props
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
