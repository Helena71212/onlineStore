import styles from "./index.module.css";
import Mainhomepage from "../../../static/images/Mainhomepage.jpg";

const Home = () => {
  return (
    <div className={styles.wrapperHome}>
      <div className={styles.background}>
        <img className={styles.image} src={Mainhomepage} alt="pokemon" />
      </div>
      <div className={styles.homeTitle}>
        <h1>Bringing the world together <span>through Pokémon</span> </h1>
        <h2>Our mission</h2>
        <p>The world of Pokémon connects people across the globe, beloved by kids, adults, and every Trainer in between! These incredible creatures have crossed borders and language barriers to reach the hearts of millions for over 25 years, bringing people together through the joy of play and discovery.</p>
      </div>
    </div>
  );
};

export default Home;
