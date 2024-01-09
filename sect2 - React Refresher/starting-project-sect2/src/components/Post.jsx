// Section 2, Vid 17: Building a First Custom Component

const names = ["Jhordan", "Angelo"];

// Creating a Post component that returns a jsx code.
function Post() {
  // Using a switch statement to determine whether Jhordan, or Angelo is chosen based on the random number.
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <h1>{chosenName}</h1>
      <h1>React.js is awesome!</h1>
    </div>
  );
}

// Export the Post component as the default export.
// This allows other files to import this component using `import Post from './Post'`.
// Only one default export is allowed per module.
export default Post;
