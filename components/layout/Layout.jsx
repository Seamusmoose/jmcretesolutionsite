import NavBar from "../navbar/NavBar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
    </div>
  );
};

export default Layout;
