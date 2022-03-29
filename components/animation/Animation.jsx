import Image from "next/image";
import { useState } from "react";
import { imageList } from "../../pages/brandImages";
import styles from "./animation.module.css";

const onHoverStyle = ({ onHover }) => ({
  transform: onHover ? "transform 0.25s ease" : "none",
});

const Animation = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className={styles.animation}>
      {imageList.map((image, index) => {
        return (
          <img
            style={onHoverStyle({ onHover })}
            index={index}
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            onMouseOver={() => setOnHover(true)}
            onMouseOut={() => setOnHover(false)}
          />
        );
      })}
    </div>
  );
};

export default Animation;
