// Section 5, Vid 151 - Setting Up the Main Pages.

// Updated
// Section 7, Vid 202 - Adding Static Site Generation (SSG) On The Home Page

import EventList from "../components/events/event-list";

// Importing the getFeaturedEvents function from api-util.js
import { getFeaturedEvents } from "../helpers/api-util";

// The Home Page of the project. The user will get redirected to this page if the url is '/'
function HomePage(props) {
  return (
    <div>
      {/* Rendering the EventList component and passing the events prop to it. 
          The events prop contains the featured events data fetched from the API. */}
      <EventList items={props.events} />
    </div>
  );
}

// getStaticProps is a Next.js function that runs at build time in production,
// and generates the props for the page, in this case, the featured events data
export async function getStaticProps() {
  // Fetching the featured events data from the API
  const featuredEvents = await getFeaturedEvents();
  // Returning the featured events data as props for the page
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
