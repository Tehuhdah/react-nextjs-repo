// Section 2, Vid 27 - The Special "children" prop

import classes from "./Modal.module.css";

// The 'children' prop is a special prop in React that allows components to be passed as data to other components.
// In this case, the 'Modal' component can receive any React elements as its children and render them inside the dialog.
function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          {/* The 'children' prop is used here. Whatever elements are passed to 'Modal' will be rendered at this spot. */}
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
