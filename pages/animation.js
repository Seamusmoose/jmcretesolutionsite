import Image from "next/image";
import { imageList } from "./brandImages";
import styles from "./animation.module.css";

console.log(imageList);

const Animation = () => {
  return (
    <div className={styles.test}>
      {/* <Image src={imageList[1].src} width={500} height={500} /> */}
      {imageList.map((image, index) => {
        return (
          <Image
            index={index}
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.width}
          />
        );
      })}
    </div>
  );
};

export default Animation;
