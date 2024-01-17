// Section 3, Vid 116 - Getting Started with a Custom Image Picker Input Component

"use client";

import classes from "./image-picker.module.css";

import { useRef, useState } from "react";

import Image from "next/image";

// Define the ImagePicker component
export default function ImagePicker({ label, name }) {
  // Create a ref to the file input element
  const imageInput = useRef();

  // Initialize state for storing the selected image
  const [pickedImage, setPickedImage] = useState();

  // Define a function to programmatically click the file input when the button is clicked
  function handlePickClick() {
    imageInput.current.click();
  }

  // Define a function to handle the image selection
  function handleImageChange(event) {
    // Get the selected file
    const file = event.target.files[0];

    // If no file is selected, return early
    if (!file) {
      return;
    }

    // Create a new FileReader object
    const fileReader = new FileReader();

    // Define the onload event handler for the FileReader
    // This will be called when the file read operation is complete
    fileReader.onload = () => {
      // Store the data URL of the file in the state
      setPickedImage(fileReader.result);
    };

    // Start reading the file as a data URL
    fileReader.readAsDataURL(file);
  }
  // Render the component
  return (
    <div className={classes.picker}>
      {/* Display the label */}
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
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
          onChange={handleImageChange}
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
