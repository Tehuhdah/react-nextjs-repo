// Section 4, Vid 143 - Building Nested Dynamic Routes & Paths

import { useRouter } from "next/router";

// Creating a dynamically routed page that is nested in the dynamically routed route ('clients/[id]')
// This component will be rendered whenever the user types anything after clients/
// Example: clients/Jho
function ClientsProjectPage() {
  const router = useRouter(); // clients/max {id: "max" } -> Returns the concrete value of the path

  console.log(router.query);
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}

export default ClientsProjectPage;
