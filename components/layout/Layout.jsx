import NavBar from "../navbar/NavBar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return <div className="containerMain">{children}</div>;
};

export default Layout;
