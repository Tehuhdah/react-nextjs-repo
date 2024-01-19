// Section 5, Vid 156 - Adding Regular React Components.

// Import the 'EventItem' component from the 'event-item' file
import EventItem from "./event-item";

// Define a functional component named 'EventList'
function EventList(props) {
  // Destructure the 'items' property from the 'props' object
  // 'items' is expected to be an array of events
  const { items } = props;

  // The component returns a JSX element
  return (
    // Render an unordered list
    <ul>
      {/* Use the 'map' function to create a new array of 'EventItem' components */}
      {/* For each event in the 'items' array, an 'EventItem' component is rendered */}
      {/* However, the current implementation is not passing any props to 'EventItem' */}
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}

// Export the 'EventList' component as the default export
export default EventList;
