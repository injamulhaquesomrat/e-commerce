"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ defaultRating = 0, size = 16 }) => {
  return (
    <div className="inline-flex gap-2">
      <div className="star-rating flex gap-1">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;

          return (
            <FaStar
              key={index}
              size={size}
              color={currentRating <= defaultRating ? "#ffc107" : "#e4e5e9"}
            />
          );
        })}
      </div>
      <small> ({defaultRating})</small>
    </div>
  );
};

export default StarRating;
