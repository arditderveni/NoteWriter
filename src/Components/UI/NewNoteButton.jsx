import React from "react";
import classes from "./NewNoteButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const NewNoteButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FontAwesomeIcon icon={faNotesMedical} />
      </span>
      <span>New Note</span>
    </button>
  );
};

export default NewNoteButton;
