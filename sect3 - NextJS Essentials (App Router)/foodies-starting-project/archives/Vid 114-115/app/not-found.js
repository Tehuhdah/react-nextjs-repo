// Section 3, Vid 112 - Handling "Not Found" States

// This component will automatically render on the root level when a 'Not Found' error occurs.
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
