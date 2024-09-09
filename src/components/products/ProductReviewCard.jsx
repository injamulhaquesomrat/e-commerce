import React from "react";
import StarRating from "../global/StarRating";
import moment from "moment";

const ProductReviewCard = ({ review }) => {
  return (
    <div className="border rounded-md p-4 my-8">
      <h6 className="text-sm">{review?.reviewerName}</h6>
      <small>{review?.reviewerEmail}</small>
      <p className="text-md">{review?.comment}</p>
      <StarRating defaultRating={review?.rating} />
      <p> {moment(review?.date).fromNow()} </p>
    </div>
  );
};

export default ProductReviewCard;
