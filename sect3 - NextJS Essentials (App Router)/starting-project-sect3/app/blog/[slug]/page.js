// Section 3, Vid 93 - Configuring Dynamic Routes & Using Route Parameters

// This is a functional component named 'BlogPostPage'.
// It takes one prop: 'params'. This prop is an object that contains route parameters.
// In this case, 'params' is expected to have a 'slug' property, which represents the unique identifier (or slug) of a blog post.
export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      {/* The paragraph displays the value of 'params.slug', which is the slug of
      the blog post.  */}
      {/*This means that for each different blog post, a different slug will be
      displayed.*/}
      <p>{params.slug}</p>
    </main>
  );
}
