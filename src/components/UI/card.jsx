import React from "react";
import "./style/card.css";
function Card(props) {
  const classes = "card" + props.classNames;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
