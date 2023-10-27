import "./hero.css";
import imageGrid from "../../images/image-grid.png";

const hero = () => {
  return (
    <div className="hero-container">
      <img className="image-grid" src={imageGrid} alt="Image Grid" />
      <div className="hero-heading">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default hero;
