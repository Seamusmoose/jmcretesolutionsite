import styles from "./animation.module.css";

const Animation = () => {
  return (
    <div className={styles.animation__container}>
      <div className={styles.logo__container}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
        <div className={styles.five}></div>
        <div className={styles.six}></div>
        <div className={styles.seven}></div>
        <div className={styles.eight}></div>
        <div className={styles.nine}></div>
        <div className={styles.ten}></div>
        <div className={styles.eleven}></div>
        <div className={styles.twelve}></div>

        <div className={styles.menu}>
          <a href="#main">About</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
      <div className={styles.phoneMenu}>
        <a href="#main">main</a>
        <a href="#gallery">gallery</a>
      </div>
    </div>
  );
};

export default Animation;
