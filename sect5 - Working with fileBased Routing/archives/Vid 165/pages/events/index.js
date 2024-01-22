// Section 5, Vid 151 - Setting Up the Main Pages.

// Import the function getAllEvents from the dummy-data file
// This function is used to get all the events
import { getAllEvents } from "../../dummy-data";

// Import the EventList component from the events/event-list file
// This component is used to render a list of events
import EventList from "../../components/events/event-list";

// Import the EventsSearch component from the events/events-search file
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

// Define the AllEventsPage component
function AllEventsPage() {
  // Fetch all events and store them in 'events'
  const events = getAllEvents();

  // Initialize the router for navigation
  const router = useRouter();

  // Define a function to handle event search
  // It constructs the path and navigates to the page of events for the selected year and month
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      {/* Render the EventsSearch component */}
      {/* This component is used to render a search form for events */}
      <EventsSearch onSearch={findEventsHandler} />
      {/* Render the EventList component */}
      {/* Pass the 'events' constant to the 'items' prop of the EventList component */}
      {/* All the events in the 'events' const will get passed into the EventList component */}
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
