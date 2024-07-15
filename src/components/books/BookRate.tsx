import { Rating, Typography } from "@mui/material";
import React from "react";

type Props = {
  rating?: number;
};

/**
 * Round rating below 0 to 0 and above 5 to 5
 * @param rating number
 * @returns number
 */
const roundRating = (rating: number) => {
  const integerRating = Math.round(rating);
  if (integerRating < 0) return 0;
  if (integerRating > 5) return 5;
  return integerRating;
};

export const BookRate = (props: Props) => {
  return (
    <div className="max-h-6 min-h-6 flex items-center">
      {props.rating ? (
        <Rating name="read-only" value={roundRating(props.rating)} readOnly />
      ) : (
        <Typography variant="h6">No Rating</Typography>
      )}
    </div>
  );
};
