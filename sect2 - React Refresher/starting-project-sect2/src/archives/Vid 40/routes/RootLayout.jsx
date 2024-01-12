// Section 2, Vid 40 - Working with Layout Routes.

// Import the Outlet component from 'react-router-dom'.
// It serves as a placeholder in a component's render method where
// child routes will be displayed.
import { Outlet } from "react-router-dom";

// Import the MainHeader component thats in the components folder.
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
