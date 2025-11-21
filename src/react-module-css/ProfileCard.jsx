import styles from "./ProfileCard.module.css";


export default function ProfileCard() {
  return (
    <div className={styles.container}>
      
      <div className={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdiBJUETd2hckKrpYTTa89ffeu0aA-BY1ig&s"
          alt="Profile"
          className={styles.profileImg}
        />
        <h2 className={styles.name}>Sripal</h2>
        <p className={styles.bio}>
          React Developer | Learner | Frontend Enthusiast
        </p>
      </div>

      <div className={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"
          alt="Profile"
          className={styles.profileImg}
        />
        <h2 className={styles.name}>Harish</h2>
        <p className={styles.bio}>
          UI/UX Designer | Creative Thinker | Problem Solver
        </p>
      </div>

      <div className={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmy23CSyA3Q11uaVITJ8wjEJG2sJk0514sw&s"
          alt="Profile"
          className={styles.profileImg}
        />
        <h2 className={styles.name}>Kavitha</h2>
        <p className={styles.bio}>
          Full Stack Developer | JavaScript Expert | Mentor
        </p>
      </div>

    </div>
  );
}