// Section 4, Vid 141 - Adding Dynamic Paths & Routes

import { useRouter } from "next/router";

// Creating a dynamically routed page that is nested in the portfolio route ('/portfolio/...')
// This component will be rendered whenever the user types anything after portfolio/
function PortfolioProjectPage() {
  // setting the router const to the userRouter hoook.
  const router = useRouter();

  // Receiving these properties from the router object.
  console.log(router.pathname); // portfolio/something -> portfolio/[projectid] -> Returns the path name that NextJs used to reach this component.
  console.log(router.query); // portfolio/something -> {projectid: "something"} -> Returns the concrete value of the path

  // If this is a database object id, we can:
  // Send a request to some backend server to fetch the piece of data with an id of
  // router.query.projectId

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
