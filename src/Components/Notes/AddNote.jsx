import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddNote.module.css";

const AddNote = (props) => {
  const defaultNewNote = {
    title: "",
    category: "",
    content: "",
  };
  const [formIsValid, setFormIsValid] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState();
  const [categoryIsValid, setCategoryIsValid] = useState();
  const [contentIsValid, setContentIsValid] = useState();

  const [newNote, setNewNote] = useState(props?.note ?? defaultNewNote);

  const handleNote = (e, field) => {
    setNewNote({
      ...newNote,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddNote(newNote);
    props.onClose(false);
    // props.onHideEditModal(false);
    setNewNote("");
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        newNote.title !== "" &&
          newNote.category !== "" &&
          newNote.content !== ""
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [newNote]);

  const validTitleHandler = () => {
    setTitleIsValid(newNote.title !== "");
  };

  const validCategoryHandler = () => {
    setCategoryIsValid(newNote.category !== "");
  };

  const validContentHandler = () => {
    setContentIsValid(newNote.content !== "");
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.input}>
        <form onSubmit={handleSubmit}>
          <div
            className={`${classes.input} ${
              titleIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={newNote?.title}
              onChange={(e) => handleNote(e, "title")}
              onBlur={validTitleHandler}
            ></input>
          </div>
          <div
            className={`${classes.input} ${
              categoryIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={newNote?.category}
              onBlur={validCategoryHandler}
              onChange={(e) => handleNote(e, "category")}
            >
              <option value=""></option>
              <option value="fun">Fun</option>
              <option value="chores">Chores</option>
              <option value="thoughts">Thoughts</option>
            </select>
          </div>
          <div
            className={`${classes.input} ${
              contentIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="content">Note</label>
            <textarea
              id="content"
              value={newNote?.content}
              onBlur={validContentHandler}
              onChange={(e) => handleNote(e, "content")}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button
              type="submit"
              className={classes.button}
              disabled={!formIsValid}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddNote;
