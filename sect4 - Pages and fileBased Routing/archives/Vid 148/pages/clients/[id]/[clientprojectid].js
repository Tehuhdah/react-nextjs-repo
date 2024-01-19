// Section 4, Vid 143 - Building Nested Dynamic Routes & Paths
import { useRouter } from "next/router";

// Creating a dynamically routed page that is nested in the dynamically routed route ('clients/[id]/...')
// This component will be rendered whenever the user types anything after clients/[id]/
// Example: clients/Jho/project1
function SelectClientProjectPage() {
  const router = useRouter();

  console.log(router.query); // clients/max/project1 -> {id: "max" , clientProjectid: "project1"} -> Returns the concrete values of the path

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectClientProjectPage;
