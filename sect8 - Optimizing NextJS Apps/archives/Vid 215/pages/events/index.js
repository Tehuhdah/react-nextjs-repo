// Section 5, Vid 151 - Setting Up the Main Pages.

// Updated
// Section 8, Vid - 213 - Adding Dynamic 'head' Content.

import Head from "next/head";

// Import the function getAllEvents from the dummy-data file
// This function is used to get all the events
import { getAllEvents } from "../../helpers/api-util";

// Import the EventList component from the events/event-list file
// This component is used to render a list of events
import EventList from "../../components/events/event-list";

// Import the EventsSearch component from the events/events-search file
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

// Define the AllEventsPage component
function AllEventsPage(props) {
  // Fetch all events and store them in 'events'
  const events = props.events;

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
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
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

// getStaticProps is a Next.js function that runs at build time in production,
// and generates the props for the page, in this case, the events data
export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60, // This will regenerate the page at most once every 60 seconds
  };
}

// Export the AllEventsPage component as the default export
export default AllEventsPage;
