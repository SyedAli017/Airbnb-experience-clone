import "./card.css";
import Star from "/images/star.png";

const Card = (props) => {
  return (
  
      <div className="card">
        <img src={`../images/${props.img}`} className="card-image" />
        <div className="card-stats">
          <img src={Star} className="card-star" alt="star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
  );
};

export default Card;
