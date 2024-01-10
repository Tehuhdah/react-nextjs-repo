/* Section 2, Vid 22 - Exercise & Another Component */

// Importing the PostList component to be used
import NewPost from "./NewPost";
import Post from "./Post";

// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        {/* Render the Post component 3 times with different props */}
        <Post author="Jhordan" body="React.js is Awesome!"></Post>
        <Post author="Angelo" body="Check out the full course!"></Post>
        <Post author="Tejada" body="Its on a crazy discount right now!" />
      </ul>
    </>
  );
}

export default PostsList;
