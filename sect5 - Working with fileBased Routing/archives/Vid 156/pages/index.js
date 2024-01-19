// Section 5, Vid 151 - Setting Up the Main Pages.

import { getFeaturedEvents } from "..dummy-data";

// The Home Page of the project. The user will get redirected to this page if the url is '/'
function HomePage() {
  // Stored the getFeaturedEvents that we imported from the dummy-data.js file into a constant.
  const featuredEvents = getFeaturedEvents;
  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default HomePage;
