import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddNote.module.css";

const AddNote = (props) => {
  const [newNote, setNewNote] = useState({
    newTitle: "",
    newCategory: "",
    newContent: "",
  });

  // const handleTitle = (e, title) =>
  //   setNewNote({
  //     ...newNote,
  //     [title]: e.target.value,
  //   });

  // const handleCategory = (e, category) =>
  //   setNewNote({
  //     ...newNote,
  //     [category]: e.target.value,
  //   });

  // const handleContent = (e, content) => {
  //   setNewNote({
  //     ...newNote,
  //     [content]: e.target.value,
  //   });
  // };

  const handleNote = (e, field) => {
    console.log("asdsad");
    setNewNote({
      ...newNote,
      [field]: e.target.value,
    });
  };
  console.log({ newNote });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddNote(newNote);
    props.onClose(false);
    setNewNote("");
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newTitle">Title</label>
          <input
            id="newTitle"
            type="text"
            onChange={(e) => handleNote(e, "newTitle")}
          ></input>

          <label htmlFor="newCategory">Category</label>
          <select
            id="newCategory"
            onChange={(e) => handleNote(e, "newCategory")}
          >
            <option value="fun">Fun</option>
            <option value="chores">Chores</option>
            <option value="thoughts">Thoughts</option>
          </select>

          <label htmlFor="newNote">Note</label>
          <textarea
            id="newNote"
            onChange={(e) => handleNote(e, "newContent")}
          ></textarea>

          <button type="submit" className={classes.button}>
            Add
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddNote;
