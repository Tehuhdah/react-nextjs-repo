// Section 4, Vid 143 - Building Nested Dynamic Routes & Paths

import Link from "next/link";

// Define a functional component named 'ClientsPage'
function ClientsPage() {
  // Define a constant named 'clients', which is an array of objects
  // Each object represents a client and has 'id' and 'name' properties
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "jho", name: "Jhordan" },
  ];

  // The component returns a JSX element
  return (
    <div>
      {/* Render an h1 element with the text "The Clients Page" */}
      <h1>The Clients Page</h1>
      {/* Render an unordered list */}
      <ul>
        {/* Use the 'map' function to create a new array of list items */}
        {/* For each client in the 'clients' array, a list item is created */}
        {clients.map((client) => (
          // Each list item has a 'key' prop set to the client's id
          // This is necessary when rendering lists in React */}
          <li key={client.id}>
            {/* Render a 'Link' component */}
            {/* The 'href' prop is set to a string that includes the client's id */}
            {/* This creates a link to the client's page */}
            {/* The link text is the client's name */}
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
