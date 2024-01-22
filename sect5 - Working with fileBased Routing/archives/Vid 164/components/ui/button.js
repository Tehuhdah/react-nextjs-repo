// Section 5, Vid 160 - Adding Buttons & Icons

// Updated
// Section 5, Vid 164 - Adding a Filter Form for Filtering Events

import Link from "next/link";

import classes from "./button.module.css";

function Button(props) {
  // Checks if the button contains a link prop.
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {/* The Link component already has an anchor tag under the hood so we 
        do not have to render one. But if we want to style the anchor tag, we 
        must render our own and give it a className. */}
        {props.children}
      </Link>
    );
  }

  // If the 'link' prop is falsy, render a 'button' HTML element with the onClick handler
  // set to the 'onClick' prop. The children of the 'button' HTML element are the children
  // of the Button component
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {/* Render the children of the Button component */}
      {props.children}
    </button>
  );
}
export default Button;
