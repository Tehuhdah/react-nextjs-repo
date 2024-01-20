// Section 5, Vid 160 - Adding Buttons & Icons

import Link from "next/link";

import classes from "./button.module.css";

function Button(props) {
  return (
    <Link className={classes.btn} href={props.link}>
      {/* The Link component already has an anchor tag under the hood so we 
        do not have to render one. But if we want to style the anchor tag, we 
        must render our own and give it a className. */}
      {props.children}
    </Link>
  );
}

export default Button;
