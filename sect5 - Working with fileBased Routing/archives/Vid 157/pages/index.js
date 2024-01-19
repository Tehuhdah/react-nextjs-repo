// Section 5, Vid 151 - Setting Up the Main Pages.

import EventList from "../components/events/event-list";

import { getFeaturedEvents } from "../dummy-data";

// The Home Page of the project. The user will get redirected to this page if the url is '/'
function HomePage() {
  // Stored the getFeaturedEvents that we imported from the dummy-data.js file into a constant.
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {/* Rendering the EventList component where we pass in an item prop that will call the getFeaturedEvents
        function from dummy-data.js */}
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
