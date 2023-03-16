import React from "react";
import classes from "./NewNoteButton.module.css";

const NewNoteButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}></span>
      <span>New Note</span>
    </button>
  );
};

export default NewNoteButton;
