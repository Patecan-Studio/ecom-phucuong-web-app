"use client";

import React, { useState } from "react";
import TabbarLogo from "./TabbarLogo";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import "./style.scss";
import TabbarSecondaryMobile from "./TabbarSecondaryMobile";
const initialPath = "/products";

const Tabbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  function createCategoryPath(categoryId: string): string {
    return `${initialPath}?category=${categoryId}`;
  }

  const menu = [
    { label: "Sản phẩm mới", path: createCategoryPath("") },
    {
      label: "Nội thất",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Phòng khách",
            path: createCategoryPath("653b4c7085e86f091c56cb06"),
          },
          list: [
            {
              name: "Ghế sofa",
              path: createCategoryPath("653b4ce985e86f091c56cb0a"),
            },
            {
              name: "Ghế thư giãn",
              path: createCategoryPath("653b4d0085e86f091c56cb0e"),
            },
            {
              name: "Bàn góc",
              path: createCategoryPath("653b4d1385e86f091c56cb12"),
            },
            {
              name: "Bàn trà",
              path: createCategoryPath("653b4d2485e86f091c56cb16"),
            },
            {
              name: "Bàn coffee",
              path: createCategoryPath("653b4d3785e86f091c56cb1a"),
            },
            {
              name: "Kệ tivi",
              path: createCategoryPath("653b4d5d85e86f091c56cb22"),
            },
            {
              name: "Tủ đa năng",
              path: createCategoryPath("653b4d6b85e86f091c56cb26"),
            },
          ],
        },
        {
          label: {
            name: "Phòng ngủ",
            path: createCategoryPath("653b4e0d85e86f091c56cb2a"),
          },
          list: [
            {
              name: "Giường",
              path: createCategoryPath("653b4e1a85e86f091c56cb2e"),
            },
            {
              name: "Tab đầu giường",
              path: createCategoryPath("653b4e2885e86f091c56cb32"),
            },
            {
              name: "Bàn trang điểm",
              path: createCategoryPath("653b4e4885e86f091c56cb3a"),
            },
            {
              name: "Tủ quần áo",
              path: createCategoryPath("653b4e5485e86f091c56cb3e"),
            },
          ],
        },
        {
          label: {
            name: "Phòng ăn",
            path: createCategoryPath("653b4e6385e86f091c56cb42"),
          },
          list: [
            {
              name: "Bàn ăn",
              path: createCategoryPath("653b4e7485e86f091c56cb46"),
            },
            {
              name: "Ghế ăn",
              path: createCategoryPath("653b4e8485e86f091c56cb4a"),
            },
            {
              name: "Ghế Bar",
              path: createCategoryPath("653b4e8f85e86f091c56cb4e"),
            },
            {
              name: "Ghế nhựa",
              path: createCategoryPath("653b4e9b85e86f091c56cb52"),
            },
            {
              name: "Ghế gỗ",
              path: createCategoryPath("653b4eaa85e86f091c56cb56"),
            },
          ],
        },
        {
          label: {
            name: "Phòng làm việc",
            path: createCategoryPath("653b4eb685e86f091c56cb5a"),
          },
          list: [
            {
              name: "Bàn làm việc",
              path: createCategoryPath("653b4ec485e86f091c56cb5e"),
            },
            {
              name: "Bàn nâng hạ",
              path: createCategoryPath("653b4ed385e86f091c56cb62"),
            },
            {
              name: "Ghế lưới",
              path: createCategoryPath("653b4ee285e86f091c56cb66"),
            },
            {
              name: "Ghế công thái học",
              path: createCategoryPath("653b4eee85e86f091c56cb6a"),
            },
            {
              name: "Ghế gaming",
              path: createCategoryPath("653b4efb85e86f091c56cb6e"),
            },
            {
              name: "Tủ sách",
              path: createCategoryPath("653b4f0d85e86f091c56cb72"),
            },
          ],
        },
        {
          label: {
            name: "Sofa",
            path: createCategoryPath("653b4f1d85e86f091c56cb76"),
          },
          list: [
            {
              name: "Sofa đơn",
              path: createCategoryPath("653b4f2b85e86f091c56cb7a"),
            },
            {
              name: "Sofa băng",
              path: createCategoryPath("653b4f3785e86f091c56cb7e"),
            },
            {
              name: "Sofa góc",
              path: createCategoryPath("653b4f4485e86f091c56cb82"),
            },
            {
              name: "Sofa Giường",
              path: createCategoryPath("653b4f5085e86f091c56cb86"),
            },
            {
              name: "Đôn sofa",
              path: createCategoryPath("653b4f5c85e86f091c56cb8a"),
            },
          ],
        },

        {
          label: {
            name: "Module tủ bếp",
            path: createCategoryPath("653b4f7585e86f091c56cb8e"),
          },
          list: [
            {
              name: "Tủ bếp trên",
              path: createCategoryPath("653b4f8185e86f091c56cb92"),
            },
            {
              name: "Tủ bếp dưới",
              path: createCategoryPath("653b4f8c85e86f091c56cb96"),
            },
            {
              name: "Tủ bếp mini",
              path: createCategoryPath("653b4f9785e86f091c56cb9a"),
            },
            {
              name: "Kệ nhà bếp",
              path: createCategoryPath("653b4fa385e86f091c56cb9e"),
            },
          ],
        },
      ],
    },

    {
      label: "Thiết bị vệ sinh",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Bồn cầu",
            path: createCategoryPath("653b556090f7fb2f9cfdd170"),
          },
          list: [
            {
              name: "Bồn cầu 1 khối",
              path: createCategoryPath("653b558e90f7fb2f9cfdd174"),
            },
            {
              name: "Bồn cầu 2 khối",
              path: createCategoryPath("653b55b690f7fb2f9cfdd178"),
            },
            {
              name: "Bồn cầu xả thẳng",
              path: createCategoryPath("653b55c590f7fb2f9cfdd17c"),
            },
            {
              name: "Bồn cầu xả xoáy",
              path: createCategoryPath("653b55d490f7fb2f9cfdd180"),
            },
            {
              name: "Bồn cầu xả thông minh",
              path: createCategoryPath("653b55e690f7fb2f9cfdd184"),
            },
            {
              name: "Bồn cầu treo tường",
              path: createCategoryPath("653b55ff90f7fb2f9cfdd188"),
            },
            {
              name: "Nắp bồn cầu",
              path: createCategoryPath("653b5cb890f7fb2f9cfdd268"),
            },
          ],
        },
        {
          label: {
            name: "Bồn tiểu nam",
            path: createCategoryPath("653b561090f7fb2f9cfdd18c"),
          },
          list: [],
        },
        {
          label: {
            name: "Lavabo",
            path: createCategoryPath("653b561e90f7fb2f9cfdd190"),
          },
          list: [
            {
              name: "Lavabo treo tường",
              path: createCategoryPath("653b563890f7fb2f9cfdd194"),
            },
            {
              name: "Lavabo đặt bàn",
              path: createCategoryPath("653b564590f7fb2f9cfdd198"),
            },
            {
              name: "Lavabo âm bàn",
              path: createCategoryPath("653b565290f7fb2f9cfdd19c"),
            },
          ],
        },
        {
          label: {
            name: "Vòi lavabo",
            path: createCategoryPath("653b566790f7fb2f9cfdd1a0"),
          },
          list: [],
        },
        {
          label: {
            name: "Vòi sen",
            path: createCategoryPath("653b567390f7fb2f9cfdd1a4"),
          },
          list: [
            {
              name: "Vòi sen chậu rửa mặt",
              path: createCategoryPath("653b568f90f7fb2f9cfdd1a8"),
            },
            {
              name: "Sen tắm",
              path: createCategoryPath("653b56e890f7fb2f9cfdd1ac"),
            },
            {
              name: "Sen cây",
              path: createCategoryPath("653b56f690f7fb2f9cfdd1b0"),
            },
            {
              name: "Sen âm tường",
              path: createCategoryPath("653b570d90f7fb2f9cfdd1b4"),
            },
            {
              name: "Sen an toàn nhiệt",
              path: createCategoryPath("653b5c4990f7fb2f9cfdd250"),
            },
            {
              name: "Vòi âm tường",
              path: createCategoryPath("653b5c5790f7fb2f9cfdd254"),
            },
          ],
        },
        {
          label: {
            name: "Bồn tắm",
            path: createCategoryPath("653b5c6b90f7fb2f9cfdd258"),
          },
          list: [
            {
              name: "Bồn tắm nằm",
              path: createCategoryPath("653b5c8790f7fb2f9cfdd25c"),
            },
            {
              name: "Bồn tắm Massage",
              path: createCategoryPath("653b5c9690f7fb2f9cfdd260"),
            },
            {
              name: "Bồn tắm đứng",
              path: createCategoryPath("653b5ca690f7fb2f9cfdd264"),
            },
          ],
        },
      ],
    },
    {
      label: "Điện máy gia dụng",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Điện tử",
            path: createCategoryPath("653b5ddf90f7fb2f9cfdd26c"),
          },
          list: [
            {
              name: "Tivi",
              path: createCategoryPath("653b5dfa90f7fb2f9cfdd270"),
            },
            {
              name: "Loa",
              path: createCategoryPath("653b5e1490f7fb2f9cfdd274"),
            },
          ],
        },
        {
          label: {
            name: "Điện lạnh",
            path: createCategoryPath("653b5e7a90f7fb2f9cfdd278"),
          },
          list: [
            {
              name: "Tủ Lạnh",
              path: createCategoryPath("653b5e9790f7fb2f9cfdd27c"),
            },
            {
              name: "Máy giặt",
              path: createCategoryPath("653b5ea290f7fb2f9cfdd280"),
            },
            {
              name: "Máy sấy quần áo",
              path: createCategoryPath("653b5eb090f7fb2f9cfdd284"),
            },
            {
              name: "Máy rửa chén bát",
              path: createCategoryPath("653b5ebd90f7fb2f9cfdd288"),
            },
            {
              name: "Bình nóng lạnh",
              path: createCategoryPath("653b5ec890f7fb2f9cfdd28c"),
            },
          ],
        },
        {
          label: {
            name: "Điều hòa",
            path: createCategoryPath("653b5edd90f7fb2f9cfdd290"),
          },
          list: [],
        },
        {
          label: {
            name: "Điện gia dụng",
            path: createCategoryPath("653b5ee990f7fb2f9cfdd294"),
          },
          list: [
            {
              name: "Quạt treo tường",
              path: createCategoryPath("653b5f0390f7fb2f9cfdd298"),
            },
            {
              name: "Quạt cây",
              path: createCategoryPath("653b5f1590f7fb2f9cfdd29c"),
            },
            {
              name: "Quạt thông gió",
              path: createCategoryPath("653b5f2390f7fb2f9cfdd2a0"),
            },
            {
              name: "Máy lọc không khí",
              path: createCategoryPath("653b5f2d90f7fb2f9cfdd2a4"),
            },
            {
              name: "Máy tạo ẩm",
              path: createCategoryPath("653b5f3990f7fb2f9cfdd2a8"),
            },
            {
              name: "Máy hút ẩm",
              path: createCategoryPath("653b5f4490f7fb2f9cfdd2ac"),
            },
          ],
        },
      ],
    },
    {
      label: "Thiết bị bếp",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Bếp",
            path: createCategoryPath("653b5f5590f7fb2f9cfdd2b0"),
          },
          list: [
            {
              name: "Bếp điện",
              path: createCategoryPath("653b610390f7fb2f9cfdd32c"),
            },
            {
              name: "Bếp từ",
              path: createCategoryPath("653b610f90f7fb2f9cfdd330"),
            },
            {
              name: "Bếp gas",
              path: createCategoryPath("653b611c90f7fb2f9cfdd334"),
            },
            {
              name: "Bếp kết hợp",
              path: createCategoryPath("653b612790f7fb2f9cfdd338"),
            },
          ],
        },
        {
          label: {
            name: "Hút mùi",
            path: createCategoryPath("653b613390f7fb2f9cfdd33c"),
          },
          list: [],
        },
        {
          label: {
            name: "Lò vi sóng",
            path: createCategoryPath("653b614390f7fb2f9cfdd340"),
          },
          list: [],
        },
        {
          label: {
            name: "Lò nướng",
            path: createCategoryPath("653b615090f7fb2f9cfdd344"),
          },
          list: [],
        },
        {
          label: {
            name: "Máy rửa chén",
            path: createCategoryPath("653b615a90f7fb2f9cfdd348"),
          },
          list: [],
        },
        {
          label: {
            name: "Máy sấy chén",
            path: createCategoryPath("653b616690f7fb2f9cfdd34c"),
          },
          list: [],
        },
        {
          label: {
            name: "Phụ kiện bếp",
            path: createCategoryPath("653b5f6190f7fb2f9cfdd2b4"),
          },
          list: [
            {
              name: "Giá bát đũa",
              path: createCategoryPath("653b617790f7fb2f9cfdd350"),
            },
            {
              name: "Giá xoong nồi",
              path: createCategoryPath("653b618790f7fb2f9cfdd354"),
            },
            {
              name: "Giá dao thớt - gia vị",
              path: createCategoryPath("653b619390f7fb2f9cfdd358"),
            },
          ],
        },
      ],
    },
    {
      label: "Vật liệu hoàn thiện",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Gạch ốp lát",
            path: createCategoryPath("653b5f7090f7fb2f9cfdd2b8"),
          },
          list: [
            {
              name: "Gạch giả gỗ",
              path: createCategoryPath("653b61e590f7fb2f9cfdd35c"),
            },
            {
              name: "Gạch giả đá",
              path: createCategoryPath("653b61f690f7fb2f9cfdd360"),
            },
            {
              name: "Gạch vân",
              path: createCategoryPath("653b620290f7fb2f9cfdd364"),
            },
            {
              name: "Gạch men",
              path: createCategoryPath("653b620d90f7fb2f9cfdd368"),
            },
            {
              name: "Gạch thẻ",
              path: createCategoryPath("653b621f90f7fb2f9cfdd36c"),
            },
          ],
        },
        {
          label: {
            name: "Gạch trang trí",
            path: createCategoryPath("653b5f7d90f7fb2f9cfdd2bc"),
          },
          list: [
            {
              name: "Gạch bê tông 3D",
              path: createCategoryPath("653b623190f7fb2f9cfdd370"),
            },
            {
              name: "Gạch bông",
              path: createCategoryPath("653b623b90f7fb2f9cfdd374"),
            },
            {
              name: "Gạch tranh 3D",
              path: createCategoryPath("653b624590f7fb2f9cfdd378"),
            },
            {
              name: "Gạch ốp tường",
              path: createCategoryPath("653b625090f7fb2f9cfdd37c"),
            },
            {
              name: "Gạch thông gió",
              path: createCategoryPath("653b625a90f7fb2f9cfdd380"),
            },
          ],
        },
        {
          label: {
            name: "Đá",
            path: createCategoryPath("653b5f8d90f7fb2f9cfdd2c0"),
          },
          list: [
            {
              name: "Đá sân vườn",
              path: createCategoryPath("653b628f90f7fb2f9cfdd384"),
            },
            {
              name: "Đá ốp tường",
              path: createCategoryPath("653b629990f7fb2f9cfdd388"),
            },
            {
              name: "Đá tự nhiên",
              path: createCategoryPath("653b62a590f7fb2f9cfdd38c"),
            },
          ],
        },
        {
          label: {
            name: "Sơn",
            path: createCategoryPath("653b5f9890f7fb2f9cfdd2c4"),
          },
          list: [
            {
              name: "Sơn lót",
              path: createCategoryPath("653b62ba90f7fb2f9cfdd390"),
            },
            {
              name: "Bột bả Dulux",
              path: createCategoryPath("653b62c590f7fb2f9cfdd394"),
            },
          ],
        },
        {
          label: {
            name: "Gỗ công nghiệp",
            path: createCategoryPath("653b5fa990f7fb2f9cfdd2c8"),
          },
          list: [
            {
              name: "Gỗ MDF",
              path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-mdf",
            },
            {
              name: "Gỗ MFC",
              path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-dam",
            },
            {
              name: "Gỗ HDF",
              path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-hdf",
            },
          ],
        },
        {
          label: {
            name: "Ván sàn",
            path: createCategoryPath("6578989a48c7123cadcd9efe"),
          },
          list: [
            {
              name: "Sàn gỗ",
              path: createCategoryPath("657898bb48c7123cadcd9fbb"),
            },
            {
              name: "Sàn nhựa",
              path: createCategoryPath("657898cd48c7123cadcda07c"),
            },
          ],
        },
      ],
    },
    {
      label: "Phụ kiện trang trí",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Kệ treo tường",
            path: createCategoryPath("653b5fc590f7fb2f9cfdd2d0"),
          },
          list: [],
        },
        {
          label: {
            name: "Thảm",
            path: createCategoryPath("653b5fd090f7fb2f9cfdd2d4"),
          },
          list: [],
        },
        {
          label: {
            name: "Đệm ngồi",
            path: createCategoryPath("653b5fdc90f7fb2f9cfdd2d8"),
          },
          list: [],
        },
        {
          label: {
            name: "Gương",
            path: createCategoryPath("653b5fe990f7fb2f9cfdd2dc"),
          },
          list: [],
        },
        {
          label: {
            name: "Tranh treo tường",
            path: createCategoryPath("653b5ff590f7fb2f9cfdd2e0"),
          },
          list: [],
        },
        {
          label: {
            name: "Rèm",
            path: createCategoryPath("653b600290f7fb2f9cfdd2e4"),
          },
          list: [],
        },
        {
          label: {
            name: "Phụ kiện khác",
            path: createCategoryPath("653b600e90f7fb2f9cfdd2e8"),
          },
          list: [],
        },
      ],
    },
    {
      label: "Đèn trang trí",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Đèn chiếu sáng nội thất",
            path: createCategoryPath("653b601e90f7fb2f9cfdd2ec"),
          },
          list: [
            {
              name: "Đèn năng lượng mặt trời",
              path: createCategoryPath("653b633790f7fb2f9cfdd3b4"),
            },
          ],
        },
        {
          label: {
            name: "Đèn chiếu sáng ngoại thất",
            path: createCategoryPath("653b602a90f7fb2f9cfdd2f0"),
          },
          list: [
            {
              name: "Đèn âm đất",
              path: createCategoryPath("653b634390f7fb2f9cfdd3b8"),
            },
            {
              name: "Đèn âm nước",
              path: createCategoryPath("653b634f90f7fb2f9cfdd3bc"),
            },
            {
              name: "Đèn rọi",
              path: createCategoryPath("653b635a90f7fb2f9cfdd3c0"),
            },
            {
              name: "Đèn trụ",
              path: createCategoryPath("653b636590f7fb2f9cfdd3c4"),
            },
            {
              name: "Đèn vách ngoài trời",
              path: createCategoryPath("653b636f90f7fb2f9cfdd3c8"),
            },
          ],
        },
        {
          label: {
            name: "Đèn trang trí nội thất",
            path: createCategoryPath("653b603890f7fb2f9cfdd2f4"),
          },
          list: [
            {
              name: "Đèn bàn - sàn ",
              path: createCategoryPath("653b638090f7fb2f9cfdd3cc"),
            },
            {
              name: "Đèn sân vườn",
              path: createCategoryPath("653b638b90f7fb2f9cfdd3d0"),
            },
            {
              name: "Đèn tường",
              path: createCategoryPath("653b639690f7fb2f9cfdd3d4"),
            },
            {
              name: "Đèn led",
              path: createCategoryPath("653b63a290f7fb2f9cfdd3d8"),
            },
            {
              name: "Đèn thông tầng",
              path: createCategoryPath("653b63ac90f7fb2f9cfdd3dc"),
            },
            {
              name: "Đèn ốp trần",
              path: createCategoryPath("653b63c090f7fb2f9cfdd3e0"),
            },
            {
              name: "Đèn trùm",
              path: createCategoryPath("653b63cc90f7fb2f9cfdd3e4"),
            },
          ],
        },
      ],
    },
    {
      label: "Chăn ga gói nệm",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Sản phẩm ga",
            path: createCategoryPath("653b604990f7fb2f9cfdd2f8"),
          },
          list: [
            { name: "Ga chun", path: createCategoryPath("") },
            { name: "Ga chun chần", path: createCategoryPath("") },
            { name: "Ga phủ", path: createCategoryPath("") },
          ],
        },
        {
          label: {
            name: "Sản phẩm chăn",
            path: createCategoryPath("653b605690f7fb2f9cfdd2fc"),
          },
          list: [
            { name: "Chăn hè", path: createCategoryPath("") },
            { name: "Vỏ chăn", path: createCategoryPath("") },
            { name: "Chăn bốn mùa", path: createCategoryPath("") },
          ],
        },
        {
          label: {
            name: "Sản phẩm gối",
            path: createCategoryPath("653b606490f7fb2f9cfdd300"),
          },
          list: [
            { name: "Gối tựa", path: createCategoryPath("") },
            { name: "Vỏ gối", path: createCategoryPath("") },
          ],
        },
        {
          label: {
            name: "Sản phẩm ruột",
            path: createCategoryPath("653b606f90f7fb2f9cfdd304"),
          },
          list: [
            { name: "Ruột gối", path: createCategoryPath("") },
            { name: "Ruột chăn", path: createCategoryPath("") },
          ],
        },
        {
          label: {
            name: "Sản phẩm nệm",
            path: createCategoryPath("653b607a90f7fb2f9cfdd308"),
          },
          list: [
            { name: "Nệm cao su thiên nhiên", path: createCategoryPath("") },
            { name: "Nệm cao su liên kết", path: createCategoryPath("") },
            { name: "Nệm cao su tổng hợp", path: createCategoryPath("") },
            { name: "Nệm lò xo", path: createCategoryPath("") },
            { name: "Nệm bông ép", path: createCategoryPath("") },
            { name: "Nệm đa tầng", path: createCategoryPath("") },
            { name: "Nệm foam", path: createCategoryPath("") },
            { name: "Nệm xơ dừa", path: createCategoryPath("") },
          ],
        },
      ],
    },
    {
      label: "Trẻ em",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Bàn học sinh",
            path: createCategoryPath("653b608b90f7fb2f9cfdd30c"),
          },
          list: [],
        },
        {
          label: {
            name: "Ghế học sinh",
            path: createCategoryPath("653b609790f7fb2f9cfdd310"),
          },
          list: [],
        },
        {
          label: {
            name: "Giường trẻ em",
            path: createCategoryPath("653b60a190f7fb2f9cfdd314"),
          },
          list: [],
        },
      ],
    },
    {
      label: "Thiết kế - Thi Công",
      path: "https://ddspace.com.vn/",
    },
    {
      label: "Dịch vụ",
      path: createCategoryPath(""),
      dropdownMenu: [
        {
          label: {
            name: "Bảo hành",
            path: createCategoryPath("653f7a38b1f514ff31bcddb4"),
          },
          list: [],
        },
        {
          label: {
            name: "Bảo trì",
            path: createCategoryPath("653f7a4db1f514ff31bcddb5"),
          },
          list: [],
        },
        {
          label: {
            name: "Vệ sinh",
            path: createCategoryPath("653f7a60b1f514ff31bcddb6"),
          },
          list: [],
        },
      ],
    },
  ];

  const checkExternalLink = (path: string) => {
    return path.startsWith("http");
  };

  const handleBurgerClick = () => {
    setIsMobileActive(!isMobileActive);
  };

  return (
    <div className="tabbar-container">
      <div className="tabbar">
        <TabbarLogo />
        <TabbarSearch
          isMobileActive={isMobileActive}
          onBurgerClick={handleBurgerClick}
        />
        <TabbarMenu />
      </div>
      <div className="tabbar--secondary-container">
        <TabbarSecondary menu={menu} checkExternalLink={checkExternalLink} />
        {isMobileActive && (
          <TabbarSecondaryMobile
            menu={menu}
            checkExternalLink={checkExternalLink}
          />
        )}
      </div>
    </div>
  );
};

export default Tabbar;
