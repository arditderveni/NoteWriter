import React, { Fragment } from "react";
import NewNoteButton from "../UI/NewNoteButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Note Taker</h1>
        <div></div>
        <NewNoteButton onClick={props.onAddNote} />
        <div></div>
      </header>

      <div style={{ height: "5rem" }} />
    </Fragment>
  );
};

export default Header;
