// Section 11, Vid 251 - Our Target tate & Starting Project

// Importing necessary hooks from 'react' for state management and context
import { createContext, useState } from "react";

// Creating a context for notifications
// This context will have a 'Notification' state and two functions: 'showNotification' and 'hideNotification'
const NotificationContext = createContext({
  Notification: null, // This will hold the current notification
  showNotification: function () {}, // This function will be used to show a notification
  hideNotifcatino: function () {}, // This function will be used to hide a notification
});

// This is a context provider component for the NotificationContext
export function NotificationContextProvider(props) {
  // The children of this component will have access to the NotificationContext
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

// Exporting the NotificationContext as the default export of this module
// Other components can import this to access the Notification context
export default NotificationContext;
