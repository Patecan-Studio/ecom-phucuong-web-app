import { cloudflareLoader } from "@/share/utils/cloudflare/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  imageUrl: string;
  altText: string;
  productName: string;
  path: string;
  isDragging: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  altText,
  productName,
  path,
  isDragging,
}) => {
  return (
    <div className="category-card">
      <div className="category-card__content">
        <Link
          href={path}
          draggable={false}
          style={{ pointerEvents: isDragging ? "none" : "auto" }}
        >
          <Image
            className="category-card__image"
            src={imageUrl}
            alt={altText}
            draggable={false}
            loader={() =>
              cloudflareLoader({
                src: imageUrl,
                width: 300,
              })
            }
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <p className="category-card__text" draggable={false}>
            {productName}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
