// Section 11, Vid 251 - Our Target tate & Starting Project

// Importing necessary hooks from 'react' for state management and context
import { createContext, useState } from "react";

// Creating a context for notifications
// This context will have a 'Notification' state and two functions: 'showNotification' and 'hideNotification'
const NotificationContext = createContext({
  Notification: null, // This will hold the current notification
  showNotification: function (notificationData) {}, // This function will be used to show a notification
  hideNotification: function () {}, // This function will be used to hide a notification
});

// This is a context provider component for the NotificationContext
export function NotificationContextProvider(props) {
  // State to hold the active notification
  const [activeNotification, setActiveNotification] = useState("");

  // Function to show a notification
  function showNotificationHandler(notificationData) {
    // Set the active notification to the notification data passed in
    setActiveNotification(notificationData);
  }

  // Function to hide a notification
  function hideNotificationHandler() {
    // Set the active notification to null
    setActiveNotification(null);
  }

  // Context value that will be provided to all children of this provider
  const context = {
    notification: activeNotification, // Current active notification
    showNotification: showNotificationHandler, // Function to show a notification
    hideNotification: hideNotificationHandler, // Function to hide a notification
  };

  // The children of this component will have access to the NotificationContext
  return (
    // Providing the context value to all children of this provider
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

// Exporting the NotificationContext as the default export of this module
// Other components can import this to access the Notification context
export default NotificationContext;
