import React from "react";
import BlogItem from "./BlogItem";

const BlogContentMobile = ({ blogs }: any) => {
  return (
    <div className="blog__content--mobile">
      <BlogItem blog={blogs[0]} />
      <BlogItem blog={blogs[1]} />
      <BlogItem blog={blogs[2]} />
    </div>
  );
};

export default BlogContentMobile;
