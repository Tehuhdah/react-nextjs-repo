// Section 5, Vid 151 - Setting Up the Main Pages.

// Import necessary modules and components
import { useRouter } from "next/router"; // useRouter hook from Next.js for accessing the route information
import { getEventById } from "../../dummy-data"; // Function to get event data by ID
import { Fragment } from "react"; // Fragment from React for grouping list of children without adding extra nodes to the DOM
import EventSummary from "../../components/event-detail/event-summary"; // Component to display event summary
import EventLogistics from "../../components/event-detail/event-logistics"; // Component to display event logistics
import EventContent from "../../components/event-detail/event-content"; // Component to display event content
import ErrorAlert from "../../components/ui/error-alert";

// The Event Detail Page of the project. The user will get redirected to this page if the url is '/event/...'
function EventDetailPage() {
  // Use the useRouter hook to access the route information
  const router = useRouter();

  // Extract the eventId from the router query
  const eventId = router.query.eventId;
  // Use the getEventById function to get the event data for the given eventId
  const event = getEventById(eventId);

  // If no event is found for the given eventId, return a paragraph element with the text "No event found!"
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
        imageAlt={event.id}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

// Export the EventDetailPage component as the default export
export default EventDetailPage;
