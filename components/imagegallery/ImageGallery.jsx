import styles from "./ImageGallery.module.css";
import Image from "next/image";
// import { imageList } from "../../pages/brandImages";

const ImageGallery = () => {
  return (
    <div>
      <div id="gallery" className={styles.grid__layout}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
          (path) => {
            return (
              <div key={path} className={styles.item__circle}>
                <Image
                  className={styles.item}
                  index={path}
                  src={`/${path}.jpg`}
                  alt="instagram"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
