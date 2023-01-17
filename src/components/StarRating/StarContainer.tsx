import StarRating from "./StarRating";
import { useStarContainer } from "../../features/StarContainer/useStarContainer";
import StarRatingCSS from "./StarRating.module.scss";

const StarContainer = () => {
  const {
    rating,
    hoverPosition,
    handleHoverPosition,
    removeHoverPosition,
    handleRating,
  } = useStarContainer();
  const stars = [1, 2, 3, 4, 5];
  const displayStars = stars.map((index) => (
    <StarRating
      key={index}
      handleHoverPosition={handleHoverPosition}
      removeHoverPosition={removeHoverPosition}
      handleRating={handleRating}
      hoverPosition={hoverPosition}
      index={index}
    />
  ));
  return (
    <section className={StarRatingCSS.section}>
      <div className={StarRatingCSS.container}>
        {rating && <p>You rated {rating} stars!</p>}
        <h1>
          Get Started With <span>Fitness Essence?</span>
        </h1>
        <p>Sent an email to fitnessessenceplaceholder@gmail.com</p>

        <h3>What would you rate it?</h3>

        {displayStars}
      </div>
    </section>
  );
};

export default StarContainer;
