interface IMenuItem {
  title: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: "Tin tức",
    href: "/bai-dang/topic/tin-tuc",
  },
  {
    title: "Đánh giá",
    href: "/bai-dang/topic/danh-gia",
  },
  {
    title: "Về Chúng tôi",
    href: "/bai-dang/topic/ve-chung-toi",
  },
  {
    title: "Liên hệ",
    href: "/bai-dang/topic/lien-he",
  },
];

export const siteInfo = {
  title: "Phu Cuong",
  description: "Phu Cuong Magazine",
};
