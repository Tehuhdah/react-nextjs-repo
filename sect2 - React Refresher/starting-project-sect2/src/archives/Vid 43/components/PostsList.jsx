/* Section 2, Vid 22 - Exercise & Another Component */

// File refacoring.
// Section 2, Vid 41: Refactoring Route Components & More Nesting

/// Importing the useState hook from react.
import { useState, useEffect } from "react";

// Importing the useLoaderdata hook from from 'react-router-dom'
import { useLoaderData } from "react-router-dom";

// Importing the Post.
import Post from "./Post";

// Importing the CSS Module from PostsList.module
import classes from "./PostsList.module.css";

function PostsList({}) {
  // The useLoaderData hook is called to fetch or load data for the posts.
  // This hook is likely defined elsewhere in your codebase and is used to fetch or load data, probably for the posts in this context.
  // The data returned by this hook is then stored in the 'posts' constant.
  // This data will be an array of post objects if the data loading was successful, or it could be an error object or null if the data loading failed or hasn't completed yet.
  const posts = useLoaderData();
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
