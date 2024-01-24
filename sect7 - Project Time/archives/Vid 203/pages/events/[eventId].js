// Section 5, Vid 151 - Setting Up the Main Pages.

// Updated:
// Section 7, Vid 203 - Loading Data & Paths For Dynamic Pages

// Import necessary modules and components

import { getEventById, getAllEvents } from "../../helpers/api-util"; // Function to get event data by ID
import { Fragment } from "react"; // Fragment from React for grouping list of children without adding extra nodes to the DOM
import EventSummary from "../../components/event-detail/event-summary"; // Component to display event summary
import EventLogistics from "../../components/event-detail/event-logistics"; // Component to display event logistics
import EventContent from "../../components/event-detail/event-content"; // Component to display event content
import ErrorAlert from "../../components/ui/error-alert";

// The Event Detail Page of the project. The user will get redirected to this page if the url is '/event/...'
function EventDetailPage(props) {
  // Extract the selected event from the props
  const event = props.selectedEvent;

  // If no event is found for the given eventId, return an ErrorAlert component with the text "No event found!"
  if (!event) {
    return (
      // Renders an ErrorAlert component which adds stylings to error messages.
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  // If an event is found, return a Fragment containing the EventSummary, EventLogistics, and EventContent components
  // The necessary props are passed to each component
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

// getStaticProps is a Next.js function that runs at build time in production,
// and generates the props for the page, in this case, the selected event data
export async function getStaticProps(context) {
  // Extract the eventId from the context
  const eventId = context.params.eventId;

  // Fetch the event data for the given eventId
  const event = await getEventById(eventId);

  // If no event is found, return notFound: true
  if (!event) {
    return {
      notFound: true,
    };
  }

  // Return the event data as props for the page
  return {
    props: {
      selectedEvent: event,
    },
  };
}

// getStaticPaths is a Next.js function that runs at build time.
// It determines the list of paths that have to be rendered to HTML at build time for pages that use dynamic routes.
export async function getStaticPaths() {
  // Fetch all events
  const events = await getAllEvents();

  // Map the events to an array of paths. Each path object has the format { params: { eventId: event.id } }
  // This is necessary because each event has a unique ID which is used as a dynamic route parameter.
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  // Return the paths for the static site generation process.
  // The fallback option is set to "blocking", which means that if a request is made to a path that isn't generated yet,
  // the user will be served a loading state on the client side. Once the page is generated, the user will be served the fully rendered page.
  return {
    paths: paths,
    fallback: "blocking",
  };
}

// Export the EventDetailPage component as the default export
export default EventDetailPage;
