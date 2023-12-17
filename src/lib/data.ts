interface IMenuItem {
  title: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: "Tin tức",
    href: "/bai-dang/tin-tuc",
  },
  {
    title: "Đánh giá",
    href: "/bai-dang/danh-gia",
  },
  {
    title: "Về Chúng tôi",
    href: "/bai-dang/ve-chung-toi",
  },
  {
    title: "Liên hệ",
    href: "/bai-dang/lien-he",
  },
];

export const siteInfo = {
  title: "Phu Cuong",
  description: "Phu Cuong Magazine",
};
