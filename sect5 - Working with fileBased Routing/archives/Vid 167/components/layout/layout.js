// Section 5, Vid 162 - Adding a General Layout Wrapper Component

import { Fragment } from "react";

import MainHeader from "./main-header";

// Define the Layout component
function Layout(props) {
  return (
    <Fragment>
      {/* Render the MainHeader component */}
      <MainHeader />
      {/* Render a 'main' HTML element. The children of this element are the children of the 'Layout' component */}
      <main>{props.children}</main>
    </Fragment>
  );
}

// Export the Layout component as the default export
export default Layout;
