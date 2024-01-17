// Section 3, Vid 109 - Adding a Loading Page

import classes from "./loading.module.css";

// loading.js is a special reserved file that automatically renders when a page in the same directory is fetching data.
// In our case, when the server fetches data from meals.db for 2 seconds, this component is rendered in place.
export default function MealsLoadingPage() {
  {
    /* Return a loading message letting the users know that the meals are being laoding */
  }
  return <p className={classes.loading}>Fetching Meals...</p>;
}
