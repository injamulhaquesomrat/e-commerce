import React from "react";
import StarRating from "../global/StarRating";
import moment from "moment";

const ProductReviewCard = ({ review }) => {
  return (
    <div className="border rounded p-4 my-8">
      <h6 className="text-sm font-bold">{review?.reviewerName}</h6>
      <small className="line-clamp-1">{review?.reviewerEmail}</small>
      <p className="text-md py-3">{review?.comment}</p>
      <StarRating defaultRating={review?.rating} />
      <p className="text-xs"> {moment(review?.date).fromNow()} </p>
    </div>
  );
};

export default ProductReviewCard;
