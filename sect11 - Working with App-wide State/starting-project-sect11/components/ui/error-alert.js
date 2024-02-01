// Section 5, Vid 167 - Final Steps

import classes from "./error-alert.module.css";

function ErrorAlert(props) {
  // Render a 'div' HTML element with a CSS class 'alert'
  // The children of the ErrorAlert component (passed in through props) will be rendered inside this 'div'
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
