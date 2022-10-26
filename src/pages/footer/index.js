import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Footerimg from "../../static/images/Footerimg.png";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div>
        <Link className={styles.headerTitle}>PokéStore</Link>
      </div>
      <div>
        <img className= {styles.footerImg}src={Footerimg} alt="pokemon"/>
      </div>
      <div>
        <h2>Home</h2>
      </div>
        <div>
        <h2>Help</h2>
        <a>Contacts</a>
        </div>
    </div>
  );
};
export default Footer;
