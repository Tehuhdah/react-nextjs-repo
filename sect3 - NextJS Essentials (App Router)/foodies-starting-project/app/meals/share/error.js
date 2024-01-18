// Section 3, Vid 124 - Adding Server Side Input Validation.

"use client";

// Because of the filename (error.js) this component will automatically get rendered when an error occurs.
export default function Error() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
