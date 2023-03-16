import React, { Fragment, useContext } from "react";
import classes from "./Notes.module.css";
import Card from "../UI/Card";
import SingleNote from "./SingleNote/SingleNote";

const DUMMY_NOTES = [
  {
    id: "n1",
    title: "shenim",
    tag: "fun",
    content: "jjdaiu asdhjfaldosh lxsjkasdfh",
  },
  {
    id: "n2",
    title: "mendim",
    tag: "idea",
    content: "jjdaiu asdhjfaldosh lxsjkasdfh",
  },
  {
    id: "n3",
    title: "lavatricja",
    tag: "chores",
    content: "jjdaiu asdhjfaldosh lxsjkasdfh",
  },
  {
    id: "n4",
    title: "kafe",
    tag: "fun",
    content: "jjdaiu asdhjfaldosh lxsjkasdfh",
  },
];

const Notes = (props) => {
  const notesList = props.notes.map((note) => (
    <div>
      <SingleNote
        key={note.id}
        title={note.title}
        tag={note.category}
        content={note.content}
      />
    </div>
  ));

  return (
    <Fragment>
      <section className={classes.note}>
        <Card>{notesList}</Card>
      </section>
    </Fragment>
  );
};

export default Notes;
