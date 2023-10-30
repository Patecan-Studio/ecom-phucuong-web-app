import ArrowRightIcon from "@/components/common/Icons/ArrowRightIcon";
import React from "react";

const BlogItem = ({ blog }: any) => {
  return (
    <div className="blog__item">
      <div className="blog__item__image">
        <img src={blog.image} alt="" />
      </div>
      <div className="blog__item__texts">
        <h4 className="blog__item__type">{blog.type}</h4>
        <h3 className="blog__item__title">
          <a href={blog.link}>{blog.title}</a>
        </h3>
        <p className="blog__item__date">
          {blog.date} <ArrowRightIcon width={50} height={50} />
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
