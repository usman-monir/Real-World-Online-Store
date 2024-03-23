import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  const stars = [];
  const totalStars = 5;
  for (let i = 1; i <= totalStars; i++) {
    if (i <= value) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 === value) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return (
    <div className="rating">
      {stars}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
