// Section 2, Vid 17: Building a First Custom Component

// Creating a Post component that takes a props argument and returns a jsx code.
function Post(props) {
  return (
    <div>
      {/* Passing in the props and their properties to be outputted */}
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

// Export the Post component as the default export.
// This allows other files to import this component using `import Post from './Post'`.
// Only one default export is allowed per module.
export default Post;
