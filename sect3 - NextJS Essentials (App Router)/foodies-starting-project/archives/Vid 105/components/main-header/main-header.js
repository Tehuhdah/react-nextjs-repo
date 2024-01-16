// Section 3, Vid 98 - Adding a Custom Component to a Layout

import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    // Using the classes object to help style our page by select the class related to the element we wish to style.
    <>
      {/* Render the MainHeaderBackground component which will render before the MainHeader component. 
        This component will contain the background and other stylings to this webpage.*/}
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/*
            This is an Image component which is a more efficient way to handle images in a Next.js application. 
            It provides optimization like lazy loading out of the box. It also simplifies the process for responsive images.
            The 'src' attribute of the 'img' element is set to 'logoImg.src', which is expected to be the URL or path of the logo image.
            The 'alt' attribute is set to "A plate with food on it", which provides a text description of the image for screen readers and other assistive technologies.
            The 'priority' attribute is used to ensure that lazy loading is not used and that the image is always visible when the webpage is loaded.
        */}
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              {/* Imported the NavLink component that contains a Link component for the meals route. */}
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              {/* Imported the NavLink component that contains a Link component for the community route. */}

              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
