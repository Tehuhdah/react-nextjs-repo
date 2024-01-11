/* Section 2, Vid 22 - Exercise & Another Component */

/// Importing the useState hook from react.
import { useState, useEffect } from "react";

// Importing the NewPost, Post, and Modal components.
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  // The state for the posts is defined here.
  const [posts, setPosts] = useState([]);

  // useEffect is a React hook that allows you to perform side effects in your component.
  // It takes two arguments: a function where you put your side effect code, and a dependency array.
  useEffect(() => {
    // Define an asynchronous function inside the effect to fetch posts.
    async function fetchPosts() {
      // Use the fetch API to get posts from the server.
      // The await keyword makes JavaScript wait until the Promise settles and returns its result.
      const response = await fetch("http://localhost:8080/posts");

      // Convert the response to JSON. Again, we use await to wait for the Promise to settle.
      const resData = await response.json();

      // Update the posts state with the fetched posts.
      // This will cause the component to re-render with the new posts.
      setPosts(resData.posts);
    }

    // Call the fetchPosts function.
    // Since fetchPosts is asynchronous, it returns a Promise.
    // However, we don't need to wait for the Promise to settle here, so we don't use await.
    fetchPosts();
  }, []); // The empty array means this effect will only run once after the initial render.
  // This function is called when a new post is added.
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("New post added!");
    });
    // It updates the posts state with the new post and the existing posts.
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {/* If isPosting is true, the Modal component is rendered. */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          {/* The NewPost component is rendered inside the Modal. */}
          {/* The onCancel and onAddPost props are passed to the NewPost component. */}
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {/* The posts are rendered as a list of Post components. */}
      {/* If there are posts (i.e., the length of the posts array is greater than 0),
       render a list of posts. */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* For each post in the posts array, render a Post component. */}
          {/* The key prop is set to the post's body, and the author and body props are set to the post's author and body, respectively. */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {/* If there are no posts (i.e., the length of the posts array is 0),
      render a message indicating that there are no posts yet. */}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Lets add some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
