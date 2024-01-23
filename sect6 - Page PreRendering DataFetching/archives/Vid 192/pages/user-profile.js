// Section 6, Vid 189 - Using 'getServerSideProps' for Server-side Rendering

function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// This is a special function that Next.js calls when a request is made to the page that this file represents
// It runs on the server-side for every request, and its return value determines the props for the page component
export async function getServerSideProps(context) {
  // The 'context' object provided by Next.js in getServerSideProps or getStaticProps contains several useful properties
  // 'params' contains the route parameters for pages using dynamic routes
  // 'req' is the HTTP IncomingMessage object for the request
  // 'res' is the HTTP response object
  const { params, req, res } = context;

  // Showcasing that this function only executes when the page is rendered.
  console.log("Server side code");

  // The 'props' property is an object that will be passed as props to the page component
  // In this case, the 'username' prop is set to the string "Jhordan"
  return {
    props: {
      username: "Jhordan",
    },
  };
}
