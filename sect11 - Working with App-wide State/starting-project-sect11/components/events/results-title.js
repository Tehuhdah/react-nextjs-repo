// Section 5, Vid 167 - Final Steps

import Button from "../ui/button";
import classes from "./results-title.module.css";

// This component is used to display the title of the results page
// It receives props as a parameter, which includes the date of the events
function ResultsTitle(props) {
  // Destructure the date from props
  const { date } = props;

  // Convert the date to a human-readable format
  // The toLocaleDateString method is used with the 'en-US' locale and options for the month and year
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Render a 'section' HTML element with a CSS class 'title'
  // Inside this section, a 'h1' element displays the date of the events
  // A Button component is also rendered, which links to the '/events' page
  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
