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
    <div>
      {/* <div className={styles.animation}>
        {imageList.map((image, index) => {
          return (
            <img
              style={onHoverStyle({ onHover })}
              index={index}
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              onMouseOver={() => setOnHover(true)}
              onMouseOut={() => setOnHover(false)}
            />
          );
        })}
      </div> */}

      <div className={styles.cont}>
        <div className={styles.one}>One</div>
        <div className={styles.two}>two</div>
        <div className={styles.three}>three</div>
        <div className={styles.four}>four</div>
        <div className={styles.five}>five</div>
        <div className={styles.six}>six</div>
        <div className={styles.seven}>six</div>
        <div className={styles.eight}>six</div>
        <div className={styles.nine}>six</div>
        <div className={styles.ten}>six</div>
        <div className={styles.eleven}>six</div>
        <div className={styles.twelve}>six</div>
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
