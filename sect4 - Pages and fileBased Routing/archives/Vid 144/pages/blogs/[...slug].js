// Section 4, Vid 144 - Adding Catch-All Routes

import { useRouter } from "next/router";

// Creating a catch-all routed page that is nested in the blogs route('blogs/...')
// This component will be rendered whenever the user types anything after blogs/ no matter the contents of the route.
// Example: blogs/2020/12 , blogs/projects/2023
function BlogPostPage() {
  const router = useRouter(); // blogs/2020/12 {slug: [2020, 2012] } -> Returns the concrete value of the path in an array because of the spread operator.

  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPage;
