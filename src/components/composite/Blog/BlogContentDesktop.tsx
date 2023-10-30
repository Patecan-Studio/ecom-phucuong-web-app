import Link from "next/link";
import React from "react";
import BlogItem from "./BlogItem";

const BlogContentDesktop = ({ blogs }: any) => {
  return (
    <div className="blog__content--desktop">
      <div className="blog__left">
        <BlogItem blog={blogs[0]} />
      </div>
      <div className="blog__right">
        <BlogItem blog={blogs[1]} />
        <BlogItem blog={blogs[2]} />
      </div>
    </div>
  );
};

export default BlogContentDesktop;
