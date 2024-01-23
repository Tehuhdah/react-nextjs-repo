// Section 7, Vid 202 - Adding Static Site Generation (SSG) On The Home Page

// This function fetches all events from the API
export async function getAllEvents() {
  // Fetching the data from the URL
  const response = await fetch(
    "https://nextjs-course-25c5a-default-rtdb.firebaseio.com/events.json"
  );
  // Parsing the response data as JSON
  const data = await response.json();

  // Creating an empty array to hold the events data
  const events = [];

  // Looping over the fetched data and transforming it into an array of objects
  for (const key in data) {
    events.push({
      id: key, // The key from the data object becomes the id
      ...data[key], // Spread the rest of the data object properties
    });
  }

  // Returning the events data
  return events;
}

// This function fetches the featured events from the API
export async function getFeaturedEvents() {
  // Fetching all events
  const allEvents = await getAllEvents();
  // Filtering the events to only include featured events
  return allEvents.filter((event) => event.isFeatured);
}
