import React from "react";
import classes from "./SIngleNote.module.css";

const SingleNote = (props) => {
  return (
    <li className={classes.note}>
      <h3>{props.title}</h3>
      <div className={classes.content}>{props.content}</div>
      <div className={classes.tag}>{props.tag}</div>
    </li>
  );
};

export default SingleNote;
