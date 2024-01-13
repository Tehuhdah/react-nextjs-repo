// Section 2, Vid 27 - The Special "children" prop

// Section 2, Vid 42 - Linking and Navigating

import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

// The 'children' prop is a special prop in React that allows components to be passed as data to other components.
// The 'Modal' component can receive any React elements as its children and render them inside the dialog.
function Modal({ children }) {
  // useNavigate is a hook from 'react-router-dom' that returns a function to navigate between routes.
  const navigate = useNavigate();

  // closeHandler is a function that navigates to the parent route when called.
  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      {/* The 'onClick' prop is set to the 'closeHandler' function. 
          This means when the backdrop is clicked, the 'closeHandler' function will be called, navigating to the parent route. */}
      <div className={classes.backdrop} onClick={closeHandler} />

      {/* The 'dialog' element is used to create a modal dialog. The 'open' attribute means the dialog is active and displayed. */}
      <dialog open className={classes.modal}>
        {/* The 'children' prop is used here. Whatever elements are passed to 'Modal' will be rendered at this spot. */}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
