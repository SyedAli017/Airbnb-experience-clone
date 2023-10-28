import "./card.css";
import Star from "/images/star.png";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card-image" />
      <div className="card-stats">
        <img src={Star} className="card-star" alt="star" />
        <span className="card-rating">{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-details">
        <span className="card-price">From ${props.item.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
