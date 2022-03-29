import styles from "./animation.module.css";
import Image from "next/image";
import { imageList } from "../../pages/brandImages";

const Animation = () => {
  return (
    <div className={styles.animation}>
      {/* <Image src={imageList[0].src} width={500} height={500} />
      <Image src={imageList[1].src} width={500} height={500} />
      <Image src={imageList[2].src} width={500} height={500} />
      <Image src={imageList[3].src} width={500} height={500} />
      <Image src={imageList[4].src} width={500} height={500} />
      <Image src={imageList[5].src} width={500} height={500} />
      <Image src={imageList[6].src} width={500} height={500} />
      <Image src={imageList[7].src} width={500} height={500} />
      <Image src={imageList[8].src} width={500} height={500} /> */}

      {imageList.map((image, index) => {
        {
          console.log(image.src, "image");
        }
        <img
          index={index}
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.width}
        />;
      })}
    </div>
  );
};

export default Animation;
