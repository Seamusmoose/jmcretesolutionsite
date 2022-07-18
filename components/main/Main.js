import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Character from "../../public/urban-line-builder-in-helmet-holds-drawing.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className={styles.container__layout}>
      <div className={styles.image__container} data-aos="flip-left">
        <Image
          src={Character}
          height={450}
          width={250}
          layout="intrinsic"
          priority
        />
      </div>
      <div className={styles.container__text}>
        <h1 data-aos="fade-left">Welcome to JMCrete Solutions. </h1>
        <p data-aos="fade-left">
          We are a concreting business located in Indooroopilly servicing the
          greater Brisbane area. We cover all areas from North Brisbane to Gold
          Coast, from East Brisbane to Ipswich and all inbetween. We specialise
          in all aspects of concreting and can help you with whatever job you
          need. Including slabs, patios, footpaths, driveways, shed slabs,
          steelfixing, formwork, commercial slabs and more. We provide
          professional quotes and we are sure to leave you satisfied with the
          job. Feel free to contact us anytime for a quote and we look forward
          to hearing from you
        </p>
      </div>
    </div>
  );
};

export default Main;
