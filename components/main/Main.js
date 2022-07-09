import styles from "./main.module.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [renderType, setRenderType] = useState("one");

  useEffect(() => {
    console.log("render");
  }, [renderType]);

  return (
    <div className={styles.container}>
      <button onClick={() => setRenderType("one")}>One</button>
      <button onClick={() => setRenderType("two")}>Two</button>
      <button onClick={() => setRenderType("three")}>Three</button>
      <div className={styles.containerText}>
        <h1>Welcome to JMCrete Solutions. </h1>
        <p>
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
