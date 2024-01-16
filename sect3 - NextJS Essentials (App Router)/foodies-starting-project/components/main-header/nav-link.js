// Section 3, Vid 105 - Using Client Components Efficiently

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      // Set the href attribute to the href prop passed to this component
      href={href}
      // Set the className attribute
      className={
        // Check if the current path starts with the href
        // If it does, add the 'active' class to indicate this link is currently active
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : // If not, just use the 'link' class
            classes.link
      }>
      {/* Render the children passed to this component inside the Link */}
      {children}
    </Link>
  );
}
