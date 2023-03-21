import React, { Fragment, useState } from "react";
import classes from "./Notes.module.css";
import Card from "../UI/Card";
import SingleNote from "./SingleNote/SingleNote";
import DeleteModal from "./DeleteModal";
import AddNote from "./AddNote";

const Notes = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [noteId, setNoteId] = useState(-1);
  const [note, setNote] = useState();

  const showDeleteModalHandler = (id) => {
    setNoteId(id);
    setDeleteModal(true);
  };
  const hideDeleteNoteHandler = () => {
    setNoteId(-1);
    setDeleteModal(false);
  };
  const showEditNoteHandler = (note) => {
    setNote(note);
    setEditModal(true);
  };
  const hideEditNoteHandler = () => {
    setNote();
    setEditModal(false);
  };

  const editNoteHandler = (newNote) => {
    let index = props.fullNotes.findIndex((note) => {
      return note.id === newNote.id;
    });

    props.fullNotes.splice(index, 1);
    props.setNotes((prevNotesList) => {
      return [
        ...prevNotesList,
        {
          id: newNote.id,
          title: newNote.title,
          category: newNote.category,
          content: newNote.content,
        },
      ];
    });
  };

  const deleteNoteHandler = () => {
    let index = props.fullNotes.findIndex((note) => {
      return note.id === noteId;
    });

    props.fullNotes.splice(index, 1);
    setNoteId(-1);
  };
  const notesList = props.notes.map((note) => (
    <div>
      <SingleNote
        key={note.id}
        noteId={note.id}
        note={note}
        title={note.title}
        tag={note.category}
        content={note.content}
        onDeleteNote={showDeleteModalHandler}
        onEdit={showEditNoteHandler}
        onHideEdit={hideDeleteNoteHandler}
      />
    </div>
  ));

  const searchHandler = (event) => {
    props.setSearchValue(event.target.value);
  };
  const selectHandler = (event) => {
    props.setCategorySearchValue(event.target.value);
  };
  return (
    <Fragment>
      <section className={classes.note}>
        <Card>
          <div className={classes["search-bar"]}>
            <input
              type="search"
              onChange={searchHandler}
              value={props.searchValue}
              placeholder="Search by Title"
              // className={classes.input}
            ></input>
            <select
              // onSelect={selectHandler}
              onChange={selectHandler}
              value={props.categorySearchValue}
              // className={classes.select}
            >
              <option id="" value=""></option>
              <option id="fun" value="fun">
                Fun
              </option>
              <option id="thoughts" value="thoughts">
                Thoughts
              </option>
              <option id="chores" value="chores">
                Chores
              </option>
            </select>
          </div>

          {deleteModal && (
            <DeleteModal
              noteId={noteId}
              onHideDeleteModal={hideDeleteNoteHandler}
              onDeleteNote={showDeleteModalHandler}
              onConfirmDelete={deleteNoteHandler}
            />
          )}
          {editModal && (
            <AddNote
              onAddNote={editNoteHandler}
              onClose={hideEditNoteHandler}
              note={note}
            />
          )}
          {notesList}
        </Card>
      </section>
    </Fragment>
  );
};

export default Notes;
