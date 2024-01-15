// Section 3, Vid 98 - Adding a Custom Component to a Layout

import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    // Using the classes object to help style our page by select the class related to the element we wish to style.
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/*
            This is an 'img' element used to display a logo.
            The 'src' attribute of the 'img' element is set to 'logoImg.src', which is expected to be the URL or path of the logo image.
            The 'alt' attribute is set to "A plate with food on it", which provides a text description of the image for screen readers and other assistive technologies.
        */}
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            {/* Created a Link component for the meals route. */}
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            {/* Created a Link component for the community route. */}
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
