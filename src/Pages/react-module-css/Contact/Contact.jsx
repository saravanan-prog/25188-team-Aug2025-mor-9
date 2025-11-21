import React from "react";
import contactStyle from "./contact.module.css";

export default function Contact() {
  return (
    <div className={contactStyle.baseContainer}>
      <div className={contactStyle.contactHeading}>
        <h1>Contact South India Culture</h1>
      </div>
      <div className={contactStyle.body}>
        <p className={contactStyle.bodyContent}>
          Have any questions, ideas, or just want to connect over South Indian heritage — be it dance, food, architecture, or festivals — feel free to reach out! Whether you're a cultural enthusiast, student, or traveler, we'd love to hear from you.
        </p>
        <p className={contactStyle.contactInfo}>
          Email: <a href="mailto:info@southindiaculture.com">info@southindiaculture.com</a><br/>
          Follow us on social media for updates and photo drops of temples, traditional arts, and more.
        </p>
      </div>
    </div>
  );
}
