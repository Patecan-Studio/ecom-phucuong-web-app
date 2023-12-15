import React from "react";
import './styles.scss'
import BlogTitle from "./BlogTitle";
import BlogContentDesktop from "./BlogContentDesktop";
import BlogContentMobile from "./BlogContentMobile";


// always get only top 3 items
const blogList = [
  {
    id: 1,
    type: "Xu hướng và phong cách",
    title: "Lấy cảm hứng từ vẻ đẹp tự nhiên của cỏ cây kết hợp với phong cách Tây Âu tạo nên một văn phòng có ấn tượng đặc biệt. Mỗi nơi đều biết cách tỏa sáng, tự làm nổi bật theo cách riêng của mình.\n" +
        "\n" +
        "Nơi làm việc không còn đơn điệu nhàm chán bằng cách sử dụng cây xanh décor. Các chậu cây mini xanh mướt đặt trên giá ngăn vừa mang đến vẻ đẹp cho không gian vừa giúp chia tách không gian hợp lý. ",
    link: "https://www.google.com/",
    image: "/images/blogs/blog-1.jpg",
    date: "14, tháng 07, 2023",
  },
  {
    id: 2,
    type: "Xu hướng và phong cách",
    title: "Các đường thẳng đứng mang lại cho mọi người cảm giác đối xứng thị giác thẩm mỹ. Với đệm mềm và lưng vừa phải, tiện dụng và phù hợp với mọi người. Trong khi người tiêu dùng thưởng thức các món ngon tại nhà hàng đồng thời cũng có thể cảm nhận được sự thoải mái trong cơ thể từ ghế ăn Crane.",
    link: "https://www.google.com/",
    image: "/images/blogs/blog-2.jpg",
    date: "10, tháng 04, 2023",
  },
  {
    id: 3,
    type: "Xu hướng và phong cách",
    title: " Với thiết kế cho phép ánh sáng chiếu trực tiếp vào sảnh,làm cho ánh sáng mặt trời có tầm nhìn tự nhiên.\n" +
        "\n" +
        "Với sự khéo léo của ghế Rabbit và Travertine. Nó xác định lại ranh giới của vật liệu và không gian, truyền tải vẻ đẹp, kết cấu của nghề thủ công.\n" +
        "\n",
    link: "https://www.google.com/",
    image: "/images/blogs/blog-3.jpg",
    date: "10, tháng 05, 2023",
  },
]

const Blog = () => {
  return <div className="blog">
    <BlogTitle title="Tin tức & sự kiện"/>
    <BlogContentDesktop blogs={blogList} blogType={blogList[0].type}/>
    <BlogContentMobile blogs={blogList} blogType={blogList[0].type}/>
  </div>;
};

export default Blog;
