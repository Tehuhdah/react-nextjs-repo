// Section 5, Vid 161 - Adding the 'Event Detail' Page (Dynamic Route)

import classes from "./logistics-item.module.css";

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
