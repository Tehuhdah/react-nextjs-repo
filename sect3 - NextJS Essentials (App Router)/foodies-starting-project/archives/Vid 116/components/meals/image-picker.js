// Section 3, Vid 116 - Getting Started with a Custom Image Picker Input Component

"use client";

import classes from "./image-picker.module.css";

import { useRef } from "react";

// Define the ImagePicker component
export default function ImagePicker({ label, name }) {
  // Create a ref to the file input element
  const imageInput = useRef();

  // Define a function to programmatically click the file input when the button is clicked
  function handlePickClick() {
    imageInput.current.click();
  }

  // Render the component
  return (
    <div className={classes.picker}>
      {/* Display the label */}
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        {/* File input for selecting images */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          // References the imageInput that itself contains a reference.
          // In the end, when the button input is clicked, and the handlePickClick event triggers,
          // this input will be referenced and trigger.
          ref={imageInput}
        />
        {/* Button to trigger the file input click */}
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
