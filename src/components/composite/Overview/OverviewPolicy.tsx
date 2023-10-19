import CheckIcon from "@/components/common/Icons/CheckIcon";
import MoneyHandIcon from "@/components/common/Icons/MoneyHandIcon";
import PackageIcon from "@/components/common/Icons/PackageIcon";
import TwentyFourHourIcon from "@/components/common/Icons/TwentyFourHourIcon";
import React from "react";
import { OverviewPolicyProps } from "./types";

const OverviewPolicy = ({ className }: OverviewPolicyProps) => {
  const policies = [
    {
      id: "1",
      title: "Mua hàng tiết kiệm",
      description: "Tiết kiệm lên đến 10 - 30% khi mua hàng",
      icon: <MoneyHandIcon />,
    },
    {
      id: "2",
      title: "Cam kết chính hãng",
      description: "Sản phẩm chính hãng và được bảo hành",
      icon: <CheckIcon />,
    },
    {
      id: "3",
      title: "Giao hàng 24h",
      description: "Giao hàng nhanh chóng chỉ trong 24h",
      icon: <TwentyFourHourIcon />,
    },
    {
      id: "4",
      title: "Đổi trả dễ dàng",
      description: "Đổi trả trong 2 ngày đầu tiên sau khi mua",
      icon: <PackageIcon />,
    },
  ];

  return (
    <div className={`overview__policy ${className}`}>
      {policies.map((policy) => (
        <div className="overview__policy__item" key={policy.id}>
          <div className="overview__policy__image">{policy.icon}</div>
          <div className="overview__policy__text">
            <h3>{policy?.title || ""}</h3>
            <p>{policy?.description || ""}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewPolicy;
