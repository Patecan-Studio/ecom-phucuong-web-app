import React from "react";
import './styles.scss'
import BlogTitle from "./BlogTitle";
import BlogContentDesktop from "./BlogContentDesktop";


// always get only top 3 items
const blogList = [
  {
    id: 1,
    type: "Xu hướng và phong cách",
    title: "5 gợi ý thiết kế nội thất hiện đại sang trọng cho căn hộ của bạn",
    link: "https://www.google.com/",
    image: "https://picsum.photos/200/300",
    date: "10/05/2000",
  },
  {
    id: 2,
    type: "Xu hướng và phong cách",
    title: "Gặp gỡ thương hiệu cao cấp, nội thất ngoài trời, chỉ có tại Buildy",
    link: "https://www.google.com/",
    image: "https://picsum.photos/200/300",
    date: "10/05/2000",
  },
  {
    id: 3,
    type: "Xu hướng và phong cách",
    title: "Khám phá xu hướng nội thất mây – nét Việt Nam đương đại",
    link: "https://www.google.com/",
    image: "https://picsum.photos/200/300",
    date: "10/05/2000",
  },
]

const Blog = () => {
  return <div className="blog">
    <BlogTitle title="Tin tức & sự kiện"/>
    <BlogContentDesktop blogs={blogList} blogType={blogList[0].type}/>
  </div>;
};

export default Blog;
