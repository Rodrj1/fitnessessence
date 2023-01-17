import { useState } from "react";

export const useStarContainer = () => {
  const [hoverPosition, setHoverPosition] = useState(0);
  const [rating, setRating] = useState<number | undefined>(undefined);

  const handleHoverPosition = (starIndex: number) => {
    setHoverPosition(starIndex);
  };

  const removeHoverPosition = () => {
    setHoverPosition(0);
  };

  const handleRating = () => {
    setRating(hoverPosition);
  };

  return {
    rating,
    hoverPosition,
    handleHoverPosition,
    removeHoverPosition,
    handleRating,
  };
};
