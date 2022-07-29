import styles from "./main.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Character from "../../public/urban-line-builder-in-helmet-holds-drawing.png";
import headerLogo from "../../public/white_logo_transparent_background.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className={styles.main__container}>
      <div id="main"></div>
      <div className={styles.container__layout}>
        <div data-aos="fade-right" className={styles.contact}>
          <a>Contact</a>
          <div>
            <a>Email: jmcretesolutions@gmail.com</a>
            <a>Phone: 0422 293 113</a>
          </div>
        </div>
        <div className={styles.image__container} data-aos="flip-left">
          <Image
            src={Character}
            height={320}
            width={190}
            layout="intrinsic"
            alt="Concrete-Character"
            priority
          />
        </div>
        <div className={styles.container__text}>
          <Image
            data-aos="fade-left"
            src={headerLogo}
            height={100}
            width={350}
            layout="intrinsic"
            alt="header-logo"
            priority
          />
          <p data-aos="fade-left">
            We are a concreting business located in Indooroopilly servicing the
            greater Brisbane area. We cover all areas from North Brisbane to
            Gold Coast, from East Brisbane to Ipswich and all inbetween. We
            specialise in all aspects of concreting and can help you with
            whatever job you need. Including slabs, patios, footpaths,
            driveways, shed slabs, steelfixing, formwork, commercial slabs and
            more. We provide professional quotes and we are sure to leave you
            satisfied with the job. Feel free to contact us anytime for a quote
            and we look forward to hearing from you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
