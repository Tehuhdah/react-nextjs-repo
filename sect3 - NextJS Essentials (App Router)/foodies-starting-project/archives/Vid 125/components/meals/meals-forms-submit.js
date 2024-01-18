// Section 3, Vid 123 - Managing The Form Submission Status with useFormStatus

"use client";

// Import the 'useFormStatus' hook from 'react-dom'
import { useFormStatus } from "react-dom";

// Define the 'MealsFormSubmit' component
export default function MealsFormSubmit() {
  // Call the 'useFormStatus' hook, which returns an object that includes a 'pending' property
  // This 'pending' property is likely a boolean that indicates whether the form is currently being submitted
  const { pending } = useFormStatus();

  // Render a button
  return (
    // The 'disabled' prop of the button is set to the value of 'pending'
    // This means the button will be disabled while the form is being submitted
    <button disabled={pending}>
      {
        // The text of the button depends on whether the form is being submitted
        // If 'pending' is true, the text is "Submitting..."
        // If 'pending' is false, the text is "Share Meal"
        pending ? "Submitting..." : "Share Meal"
      }
    </button>
  );
}
