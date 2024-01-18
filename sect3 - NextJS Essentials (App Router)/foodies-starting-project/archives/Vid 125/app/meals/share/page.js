"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/components/meals/meals-forms-submit";

import { useFormState } from "react-dom";

export default function ShareMealPage() {
  // Call the 'useFormState' custom hook with 'shareMeal' as the first argument and an object with a 'message' property set to null as the second argument.
  // 'useFormState' is expected to return an array with two elements.
  // The first element, 'state', is an object that represents the current state of the form.
  // The second element, 'formAction', is a function that can be called to update the state of the form.
  // 'shareMeal' is likely a function that is called when the form is submitted.
  // The object with a 'message' property set to null is likely the initial state of the form.
  const [state, formAction] = useFormState(shareMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* This is a form element with a class assigned from 'classes.form'. 
            The 'action' prop is set to the 'shareMeal' function. However, in
            React, forms typically use the 'onSubmit' prop to handle form
            submissions, not 'action'. 'action' is used in traditional HTML forms
            to specify the URL to which the form data should be sent.
            If 'shareMeal' is a function that should be called when the form is
            submitted, it should be used with 'onSubmit', not 'action'. */}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required></textarea>
          </p>
          {/* Rendering the ImagePicker component that should render a file input. */}
          <ImagePicker label="Your image" name="image" />
          {/* If 'state.message' is falsy, null is returned. */}
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            {/* Rendering the MealsFormSubmit component that should render a submit button. */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
