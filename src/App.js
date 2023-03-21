import { Fragment, useEffect, useState } from "react";
import Header from "./Components/Layout/Header";
import AddNote from "./Components/Notes/AddNote";
import Notes from "./Components/Notes/Notes";
import { DUMMY_NOTES } from "./store/dummy-data";
import "./App.css";

function App() {
  const [notesList, setNotesList] = useState(DUMMY_NOTES);
  const [searchedNotes, setSearchedNotes] = useState(notesList);
  const [showAddNote, setShowAddNote] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearchValue, setCategorySearchValue] = useState("");

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
          id: Math.max(...notesList.map((note) => +note.id)) + 1,
          title: newNote.title,
          category: newNote.category,
          content: newNote.content,
        },
      ];
    });
  };

  useEffect(() => {
    if (searchValue === "" && categorySearchValue === "") {
      setSearchedNotes(notesList);
    } else if (searchValue !== "" && categorySearchValue === "") {
      let filteredNotes = notesList.filter(
        (note) =>
          note.title &&
          note.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchedNotes(filteredNotes);
    } else if (searchValue === "" && categorySearchValue !== "") {
      let filteredNotes = notesList.filter(
        (note) =>
          note.category &&
          note.category
            .toLowerCase()
            .includes(categorySearchValue.toLowerCase())
      );
      setSearchedNotes(filteredNotes);
    } else {
      let filteredNotes = notesList.filter(
        (note) =>
          note.title &&
          note.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          note.category &&
          note.category
            .toLowerCase()
            .includes(categorySearchValue.toLowerCase())
      );
      setSearchedNotes(filteredNotes);
    }
  }, [notesList, searchValue, categorySearchValue]);

  return (
    <Fragment>
      {showAddNote && (
        <AddNote onClose={handleHideAddNote} onAddNote={addNoteHandler} />
      )}
      <Header onAddNote={handleShowAddNote} />
      <main>
        <Notes
          fullNotes={notesList}
          notes={searchedNotes}
          setNotes={setNotesList}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          categorySearchValue={categorySearchValue}
          setCategorySearchValue={setCategorySearchValue}
        />
        {/* <AddNote /> */}
      </main>
    </Fragment>
  );
}

export default App;
