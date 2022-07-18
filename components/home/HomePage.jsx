import Animation from "../animation/Animation";
import ImageGallery from "../imagegallery/ImageGallery";
import Main from "../main/Main";
import styles from "./home.module.css";

const HomePage = () => {
 
  return (
    <div>
      <Animation />
      <Main />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
