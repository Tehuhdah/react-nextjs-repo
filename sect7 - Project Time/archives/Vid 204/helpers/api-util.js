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

  // Return the array of event objects
  return events;
}

// This function fetches the featured events from the API
export async function getFeaturedEvents() {
  // Fetch all events
  const allEvents = await getAllEvents();
  // Filter the array of all events to only include events where isFeatured is true
  return allEvents.filter((event) => event.isFeatured);
}

// This function fetches a specific event by its id
export async function getEventById(id) {
  // Fetch all events
  const allEvents = await getAllEvents();
  // Find and return the event that has the specified id
  return allEvents.find((event) => event.id === id);
}
