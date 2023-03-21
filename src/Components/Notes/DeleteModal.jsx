import React from "react";
import Modal from "../UI/Modal";
import classes from "./DeleteModal.module.css";
const DeleteModal = (props) => {
  const onButtonClick = () => {
    props.onDeleteNote();
    props.onConfirmDelete();
    props.onHideDeleteModal();
  };

  return (
    <Modal onHideDeleteModal={props.onHideDeleteModal}>
      <h1 className={classes.title}>
        Are you sure you want to delete this note?
      </h1>
      <div className={classes.container}>
        <section>
          <button className={classes["button-delete"]} onClick={onButtonClick}>
            Confirm
          </button>
        </section>
        <section>
          <button
            className={classes["button-cancel"]}
            onClick={props.onHideDeleteModal}
          >
            Cancel
          </button>
        </section>
      </div>
    </Modal>
  );
};

export default DeleteModal;
