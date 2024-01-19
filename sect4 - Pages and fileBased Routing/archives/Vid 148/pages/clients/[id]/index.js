// Section 4, Vid 143 - Building Nested Dynamic Routes & Paths

import { useRouter } from "next/router";

// Creating a dynamically routed page that is nested in the dynamically routed route ('clients/[id]')
// This component will be rendered whenever the user types anything after clients/
// Example: clients/Jho
function ClientsProjectPage() {
  const router = useRouter(); // clients/max {id: "max" } -> Returns the concrete value of the path

  console.log(router.query);

  // Define a function named 'loadProjectHandler'
  function loadProjectHandler() {
    // The function is responsible for navigating to a specific project page for a client

    // Call the 'push' method on the 'router' object
    // This method is used to navigate to a different page in the application
    router.push({
      // The 'pathname' property is set to a string that represents the pattern of the URL
      // The '[id]' and '[clientprojectid]' parts are dynamic segments that will be replaced with actual values
      pathname: "/clients/[id]/[clientprojectid]",

      // The 'query' property is an object that includes 'id' and 'clientprojectid' properties
      // These properties are set to the actual values that will replace the dynamic segments in the URL
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      {/* A Load Project button that contains a onClick even that will trigger the 
      loadProjectHandler function. */}
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;
