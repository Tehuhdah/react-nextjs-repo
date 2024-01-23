// Section 5, Vid 161 - Adding the 'Event Detail' Page (Dynamic Route)

import classes from "./event-content.module.css";

function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;