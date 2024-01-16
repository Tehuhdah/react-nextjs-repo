// Section 3, Vid 103 - Preparing an Image Slideshow

// To tell NextJs that we are rending a client side component, we must add this client directive of the top of the file of a client component.
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Importing all of the images from the assets folder.
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";

// Creating an image object with all the images that we imported from the assets folder.
const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

// Define the ImageSlideshow component
export default function ImageSlideshow() {
  // Initialize state for the current image index, starting at 0
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the useEffect hook to set up an interval that changes the current image
  useEffect(() => {
    // Set up an interval that runs every 5000 milliseconds (5 seconds)
    const interval = setInterval(() => {
      // Update the current image index, incrementing it by 1 if it's not the last image, or resetting it to 0 if it is
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Render the slideshow
  return (
    <div className={classes.slideshow}>
      {/* Map over the images array and render an Image component for each one */}
      {images.map((image, index) => (
        <Image
          key={index} // Use the index as the key (not recommended if list can reorder)
          src={image.image} // Use the image property of the current item as the src
          // Add the 'active' class to the current image, otherwise leave it blank
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt} // Use the alt property of the current item as the alt text
        />
      ))}
    </div>
  );
}
