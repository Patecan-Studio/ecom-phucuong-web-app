"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondary = () => {
    const initialPath = '/products'

    function createCategoryPath(categoryId: string): string {
        return `${initialPath}?category=${categoryId}`
    }

    const menu = [
        {label: "Sản phẩm mới", path: createCategoryPath('')},
        {
            label: "Sản phẩm",
            path: "/products",
            dropdownMenu: [
                {
                    label: "Phòng khách",
                    list: [
                        {name: "Ghế sofa 2 và 3 chỗ ngồi", path: createCategoryPath('')},
                        {name: "Ghế sofa mô đun", path: createCategoryPath('')},
                        {name: "Giường sofa", path: createCategoryPath('')},
                    ],
                },
                {
                    label: "Phòng ngủ",
                    list: [
                        {name: "Chiếc ghế bành", path: createCategoryPath('')},
                        {name: "Chiếc tựa", path: createCategoryPath('')},
                        {name: "Tình yêu ghế", path: createCategoryPath('')},
                        {name: "Băng ghế", path: createCategoryPath('')},
                        {name: "Giường ban ngày", path: createCategoryPath('')},
                        {name: "Ghế điều dưỡng", path: createCategoryPath('')},
                    ],
                },
                {
                    label: "Phòng ăn",
                    list: [
                        {name: "Bàn cafe", path: createCategoryPath('')},
                        {name: "Bàn trà", path: createCategoryPath('')},
                        {name: "Bàn ăn", path: createCategoryPath('')},
                        {name: "Bàn bên", path: createCategoryPath('')},
                        {name: "Tủ và kệ sách", path: createCategoryPath('')},
                        {name: "Tủ và quầy bar", path: createCategoryPath('')},
                        {name: "Bảng điều khiển", path: createCategoryPath('')},
                    ],
                },
            ],
        },
        {
            label: "Nội thất", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Phòng khách",
                    list: [
                        {name: "Ghế sofa", path: createCategoryPath('653b4ce985e86f091c56cb0a')},
                        {name: "Ghế thư giãn", path: createCategoryPath('653b4d0085e86f091c56cb0e')},
                        {name: "Bàn góc", path: createCategoryPath('653b4d1385e86f091c56cb12')},
                        {name: "Bàn trà", path: createCategoryPath('653b4d2485e86f091c56cb16')},
                        {name: "Bàn coffee", path: createCategoryPath('653b4d3785e86f091c56cb1a')},
                        {name: "Table side", path: createCategoryPath('653b4d4685e86f091c56cb1e')},
                        {name: "Kệ tivi", path: createCategoryPath('653b4d5d85e86f091c56cb22')},
                        {name: "Tủ đa năng", path: createCategoryPath('653b4d6b85e86f091c56cb26')},
                    ],
                },
                {
                    label: "Phòng ngủ",
                    list: [
                        {name: "Giường", path: createCategoryPath('653b4e1a85e86f091c56cb2e')},
                        {name: "Tab đầu giường", path: createCategoryPath('653b4e2885e86f091c56cb32')},
                        {name: "Hộp lưu trữ", path: createCategoryPath('653b4e3885e86f091c56cb36')},
                        {name: "Bàn trang điểm", path: createCategoryPath('653b4e4885e86f091c56cb3a')},
                        {name: "Tủ quần áo", path: createCategoryPath('653b4e5485e86f091c56cb3e')}
                    ],
                },
                {
                    label: "Phòng ăn",
                    list: [
                        {name: "Bàn ăn", path:createCategoryPath('653b4e7485e86f091c56cb46')},
                        {name: "Ghế ăn", path: createCategoryPath('653b4e8485e86f091c56cb4a')},
                        {name: "Ghế Bar", path: createCategoryPath('653b4e8f85e86f091c56cb4e')},
                        {name: "Ghế nhựa", path: createCategoryPath('653b4e9b85e86f091c56cb52')},
                        {name: "Ghế gỗ", path: createCategoryPath('653b4eaa85e86f091c56cb56')}
                    ],
                },
                {
                    label: "Phòng làm việc",
                    list: [
                        {name: "Bàn làm việc", path: createCategoryPath('653b4ec485e86f091c56cb5e')},
                        {name: "Bàn nâng hạ", path: createCategoryPath('653b4ed385e86f091c56cb62')},
                        {name: "Ghế lưới", path: createCategoryPath('653b4ee285e86f091c56cb66')},
                        {name: "Ghế công thái học", path: createCategoryPath('653b4eee85e86f091c56cb6a')},
                        {name: "Ghế gaming", path: createCategoryPath('653b4efb85e86f091c56cb6e')},
                        {name: "Tủ sách", path: createCategoryPath('653b4f0d85e86f091c56cb72')}
                    ],
                },
                {
                    label: "Sofa",
                    list: [
                        {name: "Sofa đơn", path: createCategoryPath('653b4f2b85e86f091c56cb7a')},
                        {name: "Sofa băng", path: createCategoryPath('653b4f3785e86f091c56cb7e')},
                        {name: "Sofa góc", path:createCategoryPath('653b4f4485e86f091c56cb82')},
                        {name: "Sofa bed", path: createCategoryPath('653b4f5085e86f091c56cb86')},
                        {name: "Đôn sofa", path: createCategoryPath('653b4f5c85e86f091c56cb8a')}
                    ],
                },

                {
                    label: "Module tủ bếp",
                    list: [
                        {name: "Tủ bếp trên", path: createCategoryPath('653b4f8185e86f091c56cb92')},
                        {name: "Tủ bếp dưới", path: createCategoryPath('653b4f8c85e86f091c56cb96')},
                        {name: "Tủ bếp mini", path: createCategoryPath('653b4f9785e86f091c56cb9a')},
                        {name: "Kệ nhà bếp", path: createCategoryPath('653b4fa385e86f091c56cb9e')}
                    ],
                },
            ]
        },


        {
            label: "Thiết bị vệ sinh", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Bồn cầu",
                    list: [
                        {name: "Bồn cầu liền khối", path: createCategoryPath('653b558e90f7fb2f9cfdd174')},
                        {name: "Bồn cầu 2 khối", path: createCategoryPath('653b55b690f7fb2f9cfdd178')},
                        {name: "Bồn cầu xả thẳng", path: createCategoryPath('653b55c590f7fb2f9cfdd17c')},
                        {name: "Bồn cầu xả xoáy", path: createCategoryPath('653b55d490f7fb2f9cfdd180')},
                        {name: "Bồn cầu xả vành rim", path: createCategoryPath('653b55e690f7fb2f9cfdd184')},
                        {name: "Bồn cầu treo tường", path: createCategoryPath('653b55ff90f7fb2f9cfdd188')},
                    ],
                },
                {
                    label: "Bồn tiểu nam",
                    list: [],
                },
                {
                    label: "Lavabo",
                    list: [
                        {name: "Lavabo treo tường", path: createCategoryPath('653b563890f7fb2f9cfdd194')},
                        {name: "Lavabo đặt bàn", path: createCategoryPath('653b564590f7fb2f9cfdd198')},
                        {name: "Lavabo âm bàn", path: createCategoryPath('653b565290f7fb2f9cfdd19c')}
                    ],
                },
                {
                    label: "Vòi lavabo",
                    list: [],
                },
                {
                    label: "Vòi sen",
                    list: [
                        {name: "Vòi sen chậu rửa mặt", path: createCategoryPath('653b568f90f7fb2f9cfdd1a8')},
                        {name: "Sen tắm", path: createCategoryPath('653b56e890f7fb2f9cfdd1ac')},
                        {name: "Sen cây", path: createCategoryPath('653b56f690f7fb2f9cfdd1b0')},
                        {name: "Sen âm tường", path: createCategoryPath('653b570d90f7fb2f9cfdd1b4')},
                        {name: "Sen an toàn nhiệt", path: createCategoryPath('653b5c4990f7fb2f9cfdd250')},
                        {name: "Vòi âm tường", path: createCategoryPath('653b5c5790f7fb2f9cfdd254')}
                    ],
                },
                {
                    label: "Bồn tắm",
                    list: [
                        {name: "Bồn tắm nằm", path: createCategoryPath('653b5c8790f7fb2f9cfdd25c')},
                        {name: "Bồn tắm Massage", path: createCategoryPath('653b5c9690f7fb2f9cfdd260')},
                        {name: "Bồn tắm đứng", path: createCategoryPath('653b5ca690f7fb2f9cfdd264')}
                    ],
                },
                {
                    label: "Năp bồn cầu",
                    list: [],
                },
            ]
        },
        {
            label: "Điện máy gia dụng", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Điện tử",
                    list: [
                        {name: "Tivi", path: createCategoryPath('653b5dfa90f7fb2f9cfdd270')},
                        {name: "Loa", path: createCategoryPath('653b5e1490f7fb2f9cfdd274')},
                    ],
                },
                {
                    label: "Điện lạnh",
                    list: [
                        {name: "Tủ Lạnh", path: createCategoryPath('653b5e9790f7fb2f9cfdd27c')},
                        {name: "Máy giặt", path: createCategoryPath('653b5ea290f7fb2f9cfdd280')},
                        {name: "Máy sấy quần áo", path: createCategoryPath('653b5eb090f7fb2f9cfdd284')},
                        {name: "Máy rửa chén bát", path: createCategoryPath('653b5ebd90f7fb2f9cfdd288')},
                        {name: "Bình nóng lạnh", path: createCategoryPath('653b5ec890f7fb2f9cfdd28c')},
                    ],
                },
                {
                    label: "Điều hòa",
                    list: [],
                },
                {
                    label: "Điện gia dụng",
                    list: [
                        {name: "Quạt treo tường", path: createCategoryPath('653b5f0390f7fb2f9cfdd298')},
                        {name: "Quạt cây", path: createCategoryPath('653b5f1590f7fb2f9cfdd29c')},
                        {name: "Quạt thông gió", path: createCategoryPath('653b5f2390f7fb2f9cfdd2a0')},
                        {name: "Máy lọc không khí", path: createCategoryPath('653b5f2d90f7fb2f9cfdd2a4')},
                        {name: "Máy tạo ẩm", path: createCategoryPath('653b5f3990f7fb2f9cfdd2a8')},
                        {name: "Máy hút ẩm", path: createCategoryPath('653b5f4490f7fb2f9cfdd2ac')},
                    ],
                },
            ]
        },
        {
            label: "Thiết bị bếp", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Bếp",
                    list: [
                        {name: "Bếp điện", path: createCategoryPath('653b610390f7fb2f9cfdd32c')},
                        {name: "Bếp từ", path: createCategoryPath('653b610f90f7fb2f9cfdd330')},
                        {name: "Bếp gas", path: createCategoryPath('653b611c90f7fb2f9cfdd334')},
                        {name: "Bếp kết hợp", path: createCategoryPath('653b612790f7fb2f9cfdd338')},
                        {name: "Hút mùi", path: createCategoryPath('653b613390f7fb2f9cfdd33c')},
                        {name: "Lò vi sóng", path: createCategoryPath('653b614390f7fb2f9cfdd340')},
                        {name: "Lò nướng", path: createCategoryPath('653b615090f7fb2f9cfdd344')},
                        {name: "Máy rửa chén", path: createCategoryPath('653b615a90f7fb2f9cfdd348')},
                        {name: "Máy sấy chén", path: createCategoryPath('653b616690f7fb2f9cfdd34c')}
                    ],
                },
                {
                    label: "Phụ kiện bếp",
                    list: [
                        {name: "Giá bát đũa", path: createCategoryPath('653b617790f7fb2f9cfdd350')},
                        {name: "Giá xoong nồi", path: createCategoryPath('653b618790f7fb2f9cfdd354')},
                        {name: "Giá dao thớt - gia vị", path: createCategoryPath('653b619390f7fb2f9cfdd358')}
                    ],
                },
            ]
        },
        {
            label: "Vật liệu hoàn thiện", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Gạch ốp lát",
                    list: [
                        {name: "Gạch giả gỗ", path: createCategoryPath('653b61e590f7fb2f9cfdd35c')},
                        {name: "Gạch giả đá", path: createCategoryPath('653b61f690f7fb2f9cfdd360')},
                        {name: "Gạch vân", path: createCategoryPath('653b620290f7fb2f9cfdd364')},
                        {name: "Gạch men", path: createCategoryPath('653b620d90f7fb2f9cfdd368')},
                        {name: "Gạch thẻ", path: createCategoryPath('653b621f90f7fb2f9cfdd36c')},
                    ],
                },
                {
                    label: "Gạch trang trí",
                    list: [
                        {name: "Gạch bê tông 3D", path: createCategoryPath('653b623190f7fb2f9cfdd370')},
                        {name: "Gạch bông", path: createCategoryPath('653b623b90f7fb2f9cfdd374')},
                        {name: "Gạch tranh 3D", path: createCategoryPath('653b624590f7fb2f9cfdd378')},
                        {name: "Gạch ốp tường", path: createCategoryPath('653b625090f7fb2f9cfdd37c')},
                        {name: "Gạch thông gió", path: createCategoryPath('653b625a90f7fb2f9cfdd380')}
                    ],
                },
                {
                    label: "Đá",
                    list: [
                        {name: "Đá sân vườn", path: createCategoryPath('653b628f90f7fb2f9cfdd384')},
                        {name: "Đá ốp tường", path: createCategoryPath('653b629990f7fb2f9cfdd388')},
                        {name: "Đá tự nhiên", path: createCategoryPath('653b62a590f7fb2f9cfdd38c')}
                    ],
                },
                {
                    label: "Sơn",
                    list: [
                        {name: "Sơn lót", path: createCategoryPath('653b62ba90f7fb2f9cfdd390')},
                        {name: "Bột bả Dulux", path: createCategoryPath('653b62c590f7fb2f9cfdd394')}
                    ],
                },
                {
                    label: "Gỗ công nghiệp",
                    list: [
                        {name: "Gỗ MDF", path: createCategoryPath('653b62d590f7fb2f9cfdd398')},
                        {name: "Gỗ MFC", path: createCategoryPath('653b62df90f7fb2f9cfdd39c')}
                    ],
                }, {
                    label: "Sàn và tường",
                    list: [
                        {name: "Sàn gác lửng", path: createCategoryPath('653b62f290f7fb2f9cfdd3a0')},
                        {name: "Sàn nâng", path: createCategoryPath('653b62fd90f7fb2f9cfdd3a4')},
                        {name: "Tường chịu ẩm chống cháy", path: createCategoryPath('653b630790f7fb2f9cfdd3a8')},
                        {name: "Tường chống cháy", path: createCategoryPath('653b631190f7fb2f9cfdd3ac')},
                        {name: "Tường ốp tấm vân gỗ", path: createCategoryPath('653b631d90f7fb2f9cfdd3b0')}
                    ],
                },
            ]
        },
        {
            label: "Phụ kiện trang trí", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Kệ treo tường",
                    list: [],
                },
                {
                    label: "Thảm",
                    list: [],
                },
                {
                    label: "Đệm ngồi",
                    list: [],
                },
                {
                    label: "Gương",
                    list: [],
                },
                {
                    label: "Tranh treo tường",
                    list: [],
                }, {
                    label: "Rèm",
                    list: [],
                },
                {
                    label: "Phụ kiện khác",
                    list: [],
                },
            ]
        },
        {
            label: "Đèn trang trí", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Đèn chiếu sáng nội thất",
                    list: [
                        {name: "Đèn năng lượng mặt trời", path: createCategoryPath('653b633790f7fb2f9cfdd3b4')}
                    ],
                },
                {
                    label: "Đèn chiếu sáng ngoại thất",
                    list: [
                        {name: "Đèn âm đất", path: createCategoryPath('653b634390f7fb2f9cfdd3b8')},
                        {name: "Đèn âm nước", path: createCategoryPath('653b634f90f7fb2f9cfdd3bc')},
                        {name: "Đèn rọi", path: createCategoryPath('653b635a90f7fb2f9cfdd3c0')},
                        {name: "Đèn trụ", path: createCategoryPath('653b636590f7fb2f9cfdd3c4')},
                        {name: "Đèn vách ngoài trời", path: createCategoryPath('653b636f90f7fb2f9cfdd3c8')}
                    ],
                },
                {
                    label: "Đèn trang trí nội thất",
                    list: [
                        {name: "Đèn bàn - sàn ", path: createCategoryPath('653b638090f7fb2f9cfdd3cc')},
                        {name: "Đèn sân vườn", path: createCategoryPath('653b638b90f7fb2f9cfdd3d0')},
                        {name: "Đèn tường", path: createCategoryPath('653b639690f7fb2f9cfdd3d4')},
                        {name: "Đèn led", path: createCategoryPath('653b63a290f7fb2f9cfdd3d8')},
                        {name: "Đèn thông tầng", path: createCategoryPath('653b63ac90f7fb2f9cfdd3dc')},
                        {name: "Đèn ốp trần", path: createCategoryPath('653b63c090f7fb2f9cfdd3e0')},
                        {name: "Đèn trùm", path: createCategoryPath('653b63cc90f7fb2f9cfdd3e4')}
                    ],
                }
            ]
        },
        {
            label: "Chăn ga gói nệm", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Sản phẩm ga",
                    list: [
                        {name: "Ga chun", path: createCategoryPath('')},
                        {name: "Ga chun chần", path: createCategoryPath('')},
                        {name: "Ga phủ", path: createCategoryPath('')}
                    ],
                },
                {
                    label: "Sản phẩm chăn",
                    list: [
                        {name: "Chăn hè", path: createCategoryPath('')},
                        {name: "Vỏ chăn", path: createCategoryPath('')},
                        {name: "Chăn bốn mùa", path: createCategoryPath('')}
                    ],
                },
                {
                    label: "Sản phẩm gối",
                    list: [
                        {name: "Gối tựa", path: createCategoryPath('')},
                        {name: "Vỏ gối", path: createCategoryPath('')}
                    ],
                }, {
                    label: "Sản phẩm ruột",
                    list: [
                        {name: "Ruột gối", path: createCategoryPath('')},
                        {name: "Ruột chăn", path: createCategoryPath('')}
                    ],
                }, {
                    label: "Sản phẩm nệm",
                    list: [
                        {name: "Nệm cao su thiên nhiên", path: createCategoryPath('')},
                        {name: "Nệm cao su liên kết", path: createCategoryPath('')},
                        {name: "Nệm cao su tổng hợp", path: createCategoryPath('')},
                        {name: "Nệm lò xo", path: createCategoryPath('')},
                        {name: "Nệm bông ép", path: createCategoryPath('')},
                        {name: "Nệm đa tầng", path: createCategoryPath('')},
                        {name: "Nệm foam", path: createCategoryPath('')},
                        {name: "Nệm xơ dừa", path: createCategoryPath('')}
                    ],
                },
            ]
        },
        {
            label: "Trẻ em", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Bàn học sinh",
                    list: []
                }, {
                    label: "Ghế học sinh",
                    list: []
                }, {
                    label: "Giường trẻ em",
                    list: []
                }
            ]
        },
        {
            label: "Thiết kế - Thi Công", path: createCategoryPath(''), dropdownMenu: [
                {
                    label: "Nhà ở",
                    list: []
                }, {
                    label: "Văn phòng",
                    list: []
                }, {
                    label: "Giáo dục",
                    list: []
                }, {
                    label: "Y tế",
                    list: []
                }, {
                    label: "Chung cư",
                    list: []
                }
            ]
        },
    ];

    return (
        <div className="tabbar--secondary-container">
            <div className="tabbar--secondary">
                {menu.map((item) => (
                    <div key={item.label}>
                        <div className="tabbar--secondary__item">
                            <Link className="tabbar--secondary__link" href={item.path}>
                                {item.label}
                            </Link>
                        </div>
                        {item.dropdownMenu && (
                            <TabbarDropdown dropdownMenu={item.dropdownMenu}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabbarSecondary;
