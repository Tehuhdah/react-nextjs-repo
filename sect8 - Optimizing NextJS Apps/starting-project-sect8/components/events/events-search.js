// Section 5, Vid 164 - Adding a Filter Form for Filtering Events

// Import the Button component from the ui/button file
// This component is used to render a button
import Button from "../ui/button";

// Import the CSS module for this component
import classes from "./events-search.module.css";

// Import the useRef hook from React
// This hook is used to create references to DOM elements
import { useRef } from "react";

// Define the EventsSearch component
// This component is used to render a form for searching events
function EventsSearch(props) {
  // Initialize two refs, yearInputRef and monthInputRef, using the useRef hook
  // These refs will be attached to the year and month input fields
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  // Define the submitHandler function
  // This function will be called when the form is submitted
  // It receives the event object as a parameter
  function submitHandler(event) {
    // Call the preventDefault method on the event object to prevent the form from being submitted
    event.preventDefault();

    // Get the current value of the year and month input fields
    // Store these values in the selectedYear and selectedMonth constants
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // Call the onSearch function passed in through props
    // Pass the selectedYear and selectedMonth as arguments
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    // Render a 'form' HTML element with a CSS class 'form'
    // The 'onSubmit' prop is set to the 'submitHandler' function
    // When the form is submitted, the 'submitHandler' function will be called
    <form className={classes.form} onSubmit={submitHandler}>
      {/* Render a 'div' HTML element with a CSS class 'controls' */}
      <div className={classes.controls}>
        {/* Render a 'div' HTML element with a CSS class 'control' */}
        <div className={classes.control}>
          {/* Render a 'label' HTML element for the year 'select' HTML element */}
          <label htmlFor="year">Year</label>
          {/* Render a 'select' HTML element for selecting the year */}
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        {/* Render a 'div' HTML element with a CSS class 'control' */}
        <div className={classes.control}>
          {/* Render a 'label' HTML element for the month 'select' HTML element */}
          <label htmlFor="month">Month</label>
          {/* Render a 'select' HTML element for selecting the month */}
          <select id="month" ref={monthInputRef}>
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
