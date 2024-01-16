// Section 3, Vid 106 - Outputting Meals data & Images With Unknown Dimensions

import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    // This is the MealItem component
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* The Image component is used to display the image, with the image source and alt text provided by the props */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          {/* The title of the meal is displayed in an h2 element */}
          <h2>{title}</h2>
          {/* The creator of the meal is displayed in a p element */}
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        {/* The summary of the meal is displayed in a p element with a class of 'summary' */}
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          {/* A Link component is used to link to the details page for the meal using dynamic routing*/}
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
