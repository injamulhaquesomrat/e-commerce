import Image from "next/image";
import React from "react";

const ArticleCard = ({ article }) => {
  const { headline, content, publish_by, subject, published_date } = article;

  return (
    <div className="flex flex-col px-6 py-4 min-h-full rounded">
      <div>
        <Image
          className="aspect-video rounded-md"
          src="https://placehold.co/1024x576/png"
          alt="Articles banner"
          height={576}
          width={1024}
        />
      </div>
      <div className="space-y-3 pt-5">
        <small className="">
          By {publish_by} in {subject} on {published_date}
        </small>
        <h6 className="text-xl ">{headline}</h6>
        <p className="text-sm md:text-base line-clamp-4">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
