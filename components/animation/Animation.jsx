import Image from "next/image";
import { useState } from "react";
import { imageList } from "../../pages/brandImages";
import styles from "./animation.module.css";
import fullTitle from "../../public/white_logo_dark_background.jpg";
import logoIcon from "../../public/logo.png";

const onHoverStyle = ({ onHover }) => ({
  // transform: onHover ? "transform 0.25s ease" : "none",
  // position: onHover ? "absolute" : "none",
});

const Animation = () => {
  const [onHover, setOnHover] = useState(false);

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
      </div>
    </div>
  );
};

export default Animation;

// const [logo, setLogo] = useState(false);

// return (
//   <div className={styles.animationWrapper}>
//     <Image
//       src={logo ? fullTitle : logoIcon}
//       height={300}
//       width={logo ? 900 : 300}
//       onMouseEnter={() => setLogo(true)}
//       onMouseOut={() => setLogo(false)}
//     />
//   </div>
// );
