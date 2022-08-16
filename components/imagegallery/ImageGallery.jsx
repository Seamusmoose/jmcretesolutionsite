import styles from "./ImageGallery.module.css";
import Image from "next/image";
// import { imageList } from "../../pages/brandImages";

const imagesIndexFirst = Array.from(Array(33).keys()).sort((a, b) => b - a);
const imagesIndexSecond = Array.from(Array(13).keys()).sort((a, b) => b - a);

const ImageGallery = () => {
  return (
    <div>
      <div id="gallery" className={styles.grid__layout}>
        {imagesIndexFirst.map((path) => {
          return (
            <div key={path} className={styles.item__circle}>
              <Image
                className={styles.item}
                index={path}
                src={`/gal${path}.jpg`}
                alt="instagram"
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
