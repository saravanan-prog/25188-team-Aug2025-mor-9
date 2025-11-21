import React from "react";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.baseContainer}>
      <div className={styles.galleryHeading}>
        <h1>Gallery Page</h1>
      </div>
      <div className={styles.body}>
        <p className={styles.bodyContent}>
          Photos will be featured here soon.
        </p>
      </div>
    </div>
  );
}
