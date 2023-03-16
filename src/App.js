import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import AddNote from "./Components/Notes/AddNote";
import Notes from "./Components/Notes/Notes";
import swal from "@sweetalert/with-react";
import "./App.css";

function App() {
  const [notesList, setNotesList] = useState([]);

  const [showAddNote, setShowAddNote] = useState(false);

  const handleShowAddNote = () => {
    setShowAddNote(true);
  };

  const handleHideAddNote = () => {
    setShowAddNote(false);
  };
  const addNoteHandler = (newNote) => {
    setNotesList((prevNotesList) => {
      return [
        ...prevNotesList,
        {
          title: newNote.newTitle,
          category: newNote.newCategory,
          content: newNote.newContent,
        },
      ];
    });
  };

  // const openModal = () => {
  //   swal(<AddNote onAddNote={addNoteHandler} />, {
  //     buttons: false,
  //     className: "modal",
  //   });
  // };

  // const showAddNoteHandler = () => {
  //   setAddNoteIsShown(true);
  // };

  // const hideAddNoteHandler = () => {
  //   setAddNoteIsShown(false);
  // };

  return (
    <Fragment>
      {showAddNote && (
        <AddNote onClose={handleHideAddNote} onAddNote={addNoteHandler} />
      )}
      <Header onAddNote={handleShowAddNote} />
      <main>
        <Notes notes={notesList} />
        {/* <AddNote /> */}
      </main>
    </Fragment>
  );
}

export default App;
