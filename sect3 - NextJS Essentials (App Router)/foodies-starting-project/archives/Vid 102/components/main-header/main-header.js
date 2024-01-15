// Section 3, Vid 98 - Adding a Custom Component to a Layout

import Link from "next/link";
import Image from "next/image";

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
        */}
          <Image src={logoImg} alt="A plate with food on it" />
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
    </>
  );
}
