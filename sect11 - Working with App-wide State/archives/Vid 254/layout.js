// Section 5, Vid 162 - Adding a General Layout Wrapper Component

import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

// Define the Layout component
function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      {/* Render the MainHeader component */}
      <MainHeader />
      {/* Render a 'main' HTML element. The children of this element are the children of the 'Layout' component */}
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

// Export the Layout component as the default export
export default Layout;
