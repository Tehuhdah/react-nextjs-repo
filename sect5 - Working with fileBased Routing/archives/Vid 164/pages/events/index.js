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

function AllEventsPage() {
  // Call the getAllEvents function to get all the events
  // Store the returned events in the 'events' constant
  const events = getAllEvents();

  return (
    <Fragment>
      {/* Render the EventsSearch component */}
      {/* This component is used to render a search form for events */}
      <EventsSearch />
      {/* Render the EventList component */}
      {/* Pass the 'events' constant to the 'items' prop of the EventList component */}
      {/* All the events in the 'events' const will get passed into the EventList component */}
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
