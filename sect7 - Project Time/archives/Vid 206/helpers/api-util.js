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

// This function takes a dateFilter object as a parameter, which contains a year and a month.
export async function getFilteredEvents(dateFilter) {
  // Destructure the year and month from the dateFilter object.
  const { year, month } = dateFilter;

  // Call the getAllEvents function, which is assumed to return a promise that resolves with all events.
  // Await the result of this function call before proceeding.
  const allEvents = await getAllEvents();

  // Filter the allEvents array to only include events that occur in the specified year and month.
  // The filter method creates a new array with all elements that pass the test implemented by the provided function.
  let filteredEvents = allEvents.filter((event) => {
    // Create a new Date object from the event's date.
    const eventDate = new Date(event.date);
    // Return true if the event's year and month match the year and month from the dateFilter.
    // Note that getMonth returns a zero-based value (where zero indicates the first month of the year), so we subtract 1 from the month.
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  // Return the filteredEvents array.
  return filteredEvents;
}
