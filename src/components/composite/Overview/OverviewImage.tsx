import { CustomImage } from "@/components/common";
import React from "react";

const OverviewImage = ({ src }: any) => {
  return (
    <div className="overview__image">
      <CustomImage
        src={src}
        alt="Editor Desktop"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default OverviewImage;
