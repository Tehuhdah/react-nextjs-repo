// Section 2, Vid 17: Building a First Custom Component

// Creating a Post component that returns a jsx code.
function Post() {
  return (
    <div>
      <h1>Jhordan</h1>
      <h1>React.js is awesome!</h1>
    </div>
  );
}

// Export the Post component as the default export.
// This allows other files to import this component using `import Post from './Post'`.
// Only one default export is allowed per module.
export default Post;
