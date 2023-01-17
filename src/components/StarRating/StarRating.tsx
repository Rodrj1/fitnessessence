interface Props {
  handleHoverPosition: (starIndex: number) => void;
  removeHoverPosition: () => void;
  handleRating: () => void;
  hoverPosition: number;
  index: number;
}

const StarRating = ({
  handleHoverPosition,
  removeHoverPosition,
  handleRating,
  hoverPosition,
  index,
}: Props) => {
  return (
    <div onMouseOver={() => handleHoverPosition(index)}>
      {hoverPosition >= index ? (
        <i
          className="fa-solid fa-star fa-2xl hoveredStar"
          onClick={handleRating}
          onMouseLeave={removeHoverPosition}
        />
      ) : (
        <i className="fa-solid fa-star fa-2xl" />
      )}
    </div>
  );
};

export default StarRating;
