// Section 5, Vid 156 - Adding Regular React Components.

// Import the 'EventItem' component from the 'event-item' file
// This component is used to render individual event items
import EventItem from "./event-item";

// Define a functional component named 'EventList'
// This component is used to render a list of events
function EventList(props) {
  // Destructure the 'items' property from the 'props' object
  // 'items' is expected to be an array of event objects
  const { items } = props;

  // The component returns a JSX element
  return (
    // Render an unordered list
    <ul>
      {/* Use the 'map' function to iterate over each event in the 'items' array */}
      {/* For each event, render an 'EventItem' component */}
      {/* The 'key' prop is set to the event's 'id' to give each list item a unique key */}
      {/* The 'id', 'title', 'location', 'date', and 'image' props are set to the corresponding properties of the event object */}
      {items.map((event) => (
        <EventItem
          key={event.id} // Unique identifier for each list item
          id={event.id} // Event's id
          title={event.title} // Event's title
          location={event.location} // Event's location
          date={event.date} // Event's date
          image={event.image} // Event's image
        />
      ))}
    </ul>
  );
}

// Export the 'EventList' component as the default export
// This allows other modules to use the 'EventList' component
export default EventList;
