"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondary = () => {
    const menu = [
        {label: "Sản phẩm mới", path: "/"},
        {
            label: "Sản phẩm",
            path: "/products",
            dropdownMenu: [
                {
                    label: "Phòng khách",
                    list: [
                        {name: "Ghế sofa 2 và 3 chỗ ngồi", path: "/"},
                        {name: "Ghế sofa mô đun", path: "/"},
                        {name: "Giường sofa", path: "/"},
                    ],
                },
                {
                    label: "Phòng ngủ",
                    list: [
                        {name: "Chiếc ghế bành", path: "/"},
                        {name: "Chiếc tựa", path: "/"},
                        {name: "Tình yêu ghế", path: "/"},
                        {name: "Băng ghế", path: "/"},
                        {name: "Giường ban ngày", path: "/"},
                        {name: "Ghế điều dưỡng", path: "/"},
                    ],
                },
                {
                    label: "Phòng ăn",
                    list: [
                        {name: "Bàn cafe", path: "/"},
                        {name: "Bàn trà", path: "/"},
                        {name: "Bàn ăn", path: "/"},
                        {name: "Bàn bên", path: "/"},
                        {name: "Tủ và kệ sách", path: "/"},
                        {name: "Tủ và quầy bar", path: "/"},
                        {name: "Bảng điều khiển", path: "/"},
                    ],
                },
            ],
        },
        {
            label: "Nội thất", path: "/", dropdownMenu: [
                {
                    label: "Phòng khách",
                    list: [
                        {name: "Ghế sofa", path: "/"},
                        {name: "Ghế thư giãn", path: "/"},
                        {name: "Bàn góc", path: "/"},
                        {name: "Bàn trà", path: "/"},
                        {name: "Bàn coffee", path: "/"},
                        {name: "Table side", path: "/"},
                        {name: "Kệ tivi", path: "/"},
                        {name: "Tủ đa năng", path: "/"},
                    ],
                },
                {
                    label: "Phòng ngủ",
                    list: [
                        {name: "Giường", path: "/"},
                        {name: "Tab đầu giường", path: "/"},
                        {name: "Hộp lưu trữ", path: "/"},
                        {name: "Bàn trang điểm", path: "/"},
                        {name: "Tủ quần áo", path: "/"}
                    ],
                },
                {
                    label: "Phòng ăn",
                    list: [
                        {name: "Bàn ăn", path: "/"},
                        {name: "Ghế ăn", path: "/"},
                        {name: "Ghế Bar", path: "/"},
                        {name: "Ghế nhựa", path: "/"},
                        {name: "Ghế gỗ", path: "/"}
                    ],
                },
                {
                    label: "Phòng làm việc",
                    list: [
                        {name: "Bàn làm việc", path: "/"},
                        {name: "Bàn nâng hạ", path: "/"},
                        {name: "Ghế lưới", path: "/"},
                        {name: "Ghế công thái học", path: "/"},
                        {name: "Ghế gaming", path: "/"},
                        {name: "Tủ sách", path: "/"}
                    ],
                },
                {
                    label: "Sofa",
                    list: [
                        {name: "Sofa đơn", path: "/"},
                        {name: "Sofa băng", path: "/"},
                        {name: "Sofa góc", path: "/"},
                        {name: "Sofa bed", path: "/"},
                        {name: "Đôn sofa", path: "/"}
                    ],
                },

                {
                    label: "Module tủ bếp",
                    list: [
                        {name: "Tủ bếp trên", path: "/"},
                        {name: "Tủ bếp dưới", path: "/"},
                        {name: "Tủ bếp mini", path: "/"},
                        {name: "Kệ nhà bếp", path: "/"}
                    ],
                },
            ]
        },


        {
            label: "Thiết bị vệ sinh", path: "/", dropdownMenu: [
                {
                    label: "Bồn cầu",
                    list: [
                        {name: "Bồn cầu liền khối", path: "/"},
                        {name: "Bồn cầu 2 khối", path: "/"},
                        {name: "Bồn cầu xả thẳng", path: "/"},
                        {name: "Bồn cầu xả xoáy", path: "/"},
                        {name: "Bồn cầu xả vành rim", path: "/"},
                        {name: "Bồn cầu treo tường", path: "/"},
                    ],
                },
                {
                    label: "Bồn tiểu nam",
                    list: [],
                },
                {
                    label: "Lavabo",
                    list: [
                        {name: "Lavabo treo tường", path: "/"},
                        {name: "Lavabo đặt bàn", path: "/"},
                        {name: "Lavabo âm bàn", path: "/"}
                    ],
                },
                {
                    label: "Vòi lavabo",
                    list: [],
                },
                {
                    label: "Vòi sen",
                    list: [
                        {name: "Vòi sen chậu rửa mặt", path: "/"},
                        {name: "Sen tắm", path: "/"},
                        {name: "Sen cây", path: "/"},
                        {name: "Sen âm tường", path: "/"},
                        {name: "Sen an toàn nhiệt", path: "/"},
                        {name: "Vòi âm tường", path: "/"}
                    ],
                },
                {
                    label: "Bồn tắm",
                    list: [
                        {name: "Bồn tắm nằm", path: "/"},
                        {name: "Bồn tắm Massage", path: "/"},
                        {name: "Bồn tắm đứng", path: "/"}
                    ],
                },
                {
                    label: "Năp bồn cầu",
                    list: [],
                },
            ]
        },
        {
            label: "Điện máy gia dụng", path: "/", dropdownMenu: [
                {
                    label: "Điện tử",
                    list: [
                        {name: "Tivi", path: "/"},
                        {name: "Loa", path: "/"},
                    ],
                },
                {
                    label: "Điện lạnh",
                    list: [
                        {name: "Tủ Lạnh", path: "/"},
                        {name: "Máy giặt", path: "/"},
                        {name: "Máy sấy quần áo", path: "/"},
                        {name: "Máy rửa chén bát", path: "/"},
                        {name: "Bình nóng lạnh", path: "/"},
                    ],
                },
                {
                    label: "Điều hòa",
                    list: [],
                },
                {
                    label: "Điện gia dụng",
                    list: [
                        {name: "Quạt treo tường", path: "/"},
                        {name: "Quạt cây", path: "/"},
                        {name: "Quạt thông gió", path: "/"},
                        {name: "Máy lọc không khí", path: "/"},
                        {name: "Máy tạo ẩm", path: "/"},
                        {name: "Máy hút ẩm", path: "/"},
                    ],
                },
            ]
        },
        {
            label: "Thiết bị bếp", path: "/", dropdownMenu: [
                {
                    label: "Bếp",
                    list: [
                        {name: "Bếp điện", path: "/"},
                        {name: "Bếp từ", path: "/"},
                        {name: "Bếp gas", path: "/"},
                        {name: "Bếp kết hợp", path: "/"},
                        {name: "Hút mùi", path: "/"},
                        {name: "Lò vi sóng", path: "/"},
                        {name: "Lò nướng", path: "/"},
                        {name: "Máy rửa chén", path: "/"},
                        {name: "Máy sấy chén", path: "/"}
                    ],
                },
                {
                    label: "Phụ kiện bếp",
                    list: [
                        {name: "Giá bát đũa", path: "/"},
                        {name: "Giá xoong nồi", path: "/"},
                        {name: "Giá dao thớt - gia vị", path: "/"}
                    ],
                },
            ]
        },
        {
            label: "Vật liệu hoàn thiện", path: "/", dropdownMenu: [
                {
                    label: "Gạch ốp lát",
                    list: [
                        {name: "Gạch giả gỗ", path: "/"},
                        {name: "Gạch giả đá", path: "/"},
                        {name: "Gạch vân", path: "/"},
                        {name: "Gạch men", path: "/"},
                        {name: "Gạch thẻ", path: "/"},
                    ],
                },
                {
                    label: "Gạch trang trí",
                    list: [
                        {name: "Gạch bê tông 3D", path: "/"},
                        {name: "Gạch bông", path: "/"},
                        {name: "Gạch tranh 3D", path: "/"},
                        {name: "Gạch ốp tường", path: "/"},
                        {name: "Gạch thông gió", path: "/"}
                    ],
                },
                {
                    label: "Đá",
                    list: [
                        {name: "Đá sân vườn", path: "/"},
                        {name: "Đá ốp tường", path: "/"},
                        {name: "Đá tự nhiên", path: "/"}
                    ],
                },
                {
                    label: "Sơn",
                    list: [
                        {name: "Sơn lót", path: "/"},
                        {name: "Bột bả Dulux", path: "/"}
                    ],
                },
                {
                    label: "Gỗ công nghiệp",
                    list: [
                        {name: "Gỗ MDF", path: "/"},
                        {name: "Gỗ MFC", path: "/"}
                    ],
                }, {
                    label: "Sàn và tường",
                    list: [
                        {name: "Sàn gác lửng", path: "/"},
                        {name: "Sàn nâng", path: "/"},
                        {name: "Tường chịu ẩm chống cháy", path: "/"},
                        {name: "Tường chống cháy", path: "/"},
                        {name: "Tường ốp tấm vân gỗ", path: "/"}
                    ],
                },
            ]
        },
        {
            label: "Phụ kiện trang trí", path: "/", dropdownMenu: [
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
            label: "Đèn trang trí", path: "/", dropdownMenu: [
                {
                    label: "Đèn chiếu sáng nội thất",
                    list: [
                        {name: "Đèn năng lượng mặt trời", path: "/"}
                    ],
                },
                {
                    label: "Đèn chiếu sáng ngoại thất",
                    list: [
                        {name: "Đèn âm đất", path: "/"},
                        {name: "Đèn âm nước", path: "/"},
                        {name: "Đèn rọi", path: "/"},
                        {name: "Đèn trụ", path: "/"},
                        {name: "Đèn vách ngoài trời", path: "/"}
                    ],
                },
                {
                    label: "Đèn trang trí nội thất",
                    list: [
                        {name: "Đèn bàn - sàn ", path: "/"},
                        {name: "Đèn sân vườn", path: "/"},
                        {name: "Đèn tường", path: "/"},
                        {name: "Đèn led", path: "/"},
                        {name: "Đèn thông tầng", path: "/"},
                        {name: "Đèn ốp trần", path: "/"},
                        {name: "Đèn trùm", path: "/"}
                    ],
                }
            ]
        },
        {
            label: "Chăn ga gói nệm", path: "/", dropdownMenu: [
                {
                    label: "Sản phẩm ga",
                    list: [
                        {name: "Ga chun", path: "/"},
                        {name: "Ga chun chần", path: "/"},
                        {name: "Ga phủ", path: "/"}
                    ],
                },
                {
                    label: "Sản phẩm chăn",
                    list: [
                        {name: "Chăn hè", path: "/"},
                        {name: "Vỏ chăn", path: "/"},
                        {name: "Chăn bốn mùa", path: "/"}
                    ],
                },
                {
                    label: "Sản phẩm gối",
                    list: [
                        {name: "Gối tựa", path: "/"},
                        {name: "Vỏ gối", path: "/"}
                    ],
                }, {
                    label: "Sản phẩm ruột",
                    list: [
                        {name: "Ruột gối", path: "/"},
                        {name: "Ruột chăn", path: "/"}
                    ],
                }, {
                    label: "Sản phẩm nệm",
                    list: [
                        {name: "Nệm cao su thiên nhiên", path: "/"},
                        {name: "Nệm cao su liên kết", path: "/"},
                        {name: "Nệm cao su tổng hợp", path: "/"},
                        {name: "Nệm lò xo", path: "/"},
                        {name: "Nệm bông ép", path: "/"},
                        {name: "Nệm đa tầng", path: "/"},
                        {name: "Nệm foam", path: "/"},
                        {name: "Nệm xơ dừa", path: "/"}
                    ],
                },
            ]
        },
        {
            label: "Trẻ em", path: "/", dropdownMenu: [
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
            label: "Thiết kế - Thi Công", path: "/", dropdownMenu: [
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
