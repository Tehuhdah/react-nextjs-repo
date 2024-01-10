// Section 2, Vid 27 - The Special "children" prop

import classes from "./Modal.module.css";

// The 'children' prop is a special prop in React that allows components to be passed as data to other components.
// The 'onClose' prop is a function that will be called when the modal's backdrop is clicked.
// In this case, the 'Modal' component can receive any React elements as its children and render them inside the dialog.
function Modal({ children, onClose }) {
  return (
    <>
      {/* The 'onClick' prop is set to the 'onClose' function passed in as a prop. 
          This means when the backdrop is clicked, the 'onClose' function will be called. */}
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {/* The 'children' prop is used here. Whatever elements are passed to 'Modal' will be rendered at this spot. */}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
