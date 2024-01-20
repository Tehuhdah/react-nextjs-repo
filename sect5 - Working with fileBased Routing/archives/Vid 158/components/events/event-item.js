// Section 5, Vid 156 - Adding Regular React Components.

import classes from "./event-item.module.css";

// Import the 'Link' component from the 'next/link' module
// This component is used to create links in a Next.js application
import Link from "next/link";

// Define a functional component named 'EventItem'
// This component is responsible for rendering a single event
function EventItem(props) {
  // Destructure the 'title', 'image', 'date', 'location', and 'id' properties from the 'props' object
  // These properties represent the details of an event
  const { title, image, date, location, id } = props;

  // Convert the 'date' string to a Date object and format it as a human-readable string
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Replace the comma in the 'location' string with a newline character
  // This formats the location as an address with two lines
  const formattedAddress = location.replace(", ", "\n");

  // Create a string for the URL of the event's page
  // The URL includes the event's 'id'
  const exploreLink = `/events/${id}`;

  // The component returns a JSX element
  return (
    <li className={classes.item}>
      {/* Render an 'img' element with the 'src' prop set to the event's 'image' and the 'alt' prop set to the event's 'title' */}
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        {/* Render the event's 'title' in an 'h2' element */}
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        {/* Render the 'humanReadableDate' in a 'time' element */}
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        {/* Render the 'formattedAddress' in an 'address' element */}
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        {/* Render a 'Link' component with the 'href' prop set to 'exploreLink' */}
        {/* The link text is "Explore Event" */}
        <div className={classes.action}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

// Export the 'EventItem' component as the default export
export default EventItem;
