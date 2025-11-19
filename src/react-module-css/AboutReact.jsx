import styles from "../react-module-css/AboutReact.module.css";

export default function AboutReact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>React</h1>

      <p className={styles.content1}>
        React is a JavaScript library for building user interfaces.
        <br /><br />
      </p>
      <h1 className={styles.heading}>Uses</h1>
      <div className={styles.content2}>
        Creating reusable UI components, fast rendering
         with Virtual DOM, and building modern single-page applications.
      </div>
    </div>
  );
}
