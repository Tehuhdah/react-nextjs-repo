// Section 5, Vid 164 - Adding a Filter Form for Filtering Events

// Import the Button component from the ui/button file
// This component is used to render a button
import Button from "../ui/button";

// Import the CSS module for this component
import classes from "./events-search.module.css";

// Define the EventsSearch component
// This component is used to render a form for searching events
function EventsSearch(props) {
  return (
    // Render a 'form' HTML element with a CSS class 'form'
    <form className={classes.form}>
      {/* Render a 'div' HTML element with a CSS class 'controls' */}
      <div className={classes.controls}>
        {/* Render a 'div' HTML element with a CSS class 'control' */}
        <div className={classes.control}>
          {/* Render a 'label' HTML element for the year 'select' HTML element */}
          <label htmlFor="year">Year</label>
          {/* Render a 'select' HTML element for selecting the year */}
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        {/* Render a 'div' HTML element with a CSS class 'control' */}
        <div className={classes.control}>
          {/* Render a 'label' HTML element for the month 'select' HTML element */}
          <label htmlFor="month">Month</label>
          {/* Render a 'select' HTML element for selecting the month */}
          <select id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      {/* Render the Button component */}
      {/* The Button component wraps the text 'Find Events' */}
      <Button>Find Events</Button>
    </form>
  );
}

// Export the EventsSearch component as the default export
// This allows other modules to use the EventsSearch component
export default EventsSearch;
