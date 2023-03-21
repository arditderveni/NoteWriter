import classes from "./SIngleNote.module.css";

const SingleNote = (props) => {
  return (
    <div className={classes.row}>
      <li className={classes.note} key={props.noteId}>
        <h3>{props.title} </h3>
        <div className={classes.content}>{props.content}</div>
        <div className={classes.tag}>{props.tag}</div>
        <div className={classes.buttons}>
          <div>
            <button
              className={classes.edit}
              onClick={() => {
                props.onEdit(props.note);
              }}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              className={classes.delete}
              onClick={() => {
                props.onDeleteNote(props.noteId);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SingleNote;
