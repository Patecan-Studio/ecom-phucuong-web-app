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
          <img
            className="category-card__image"
            src={imageUrl}
            alt={altText}
            draggable={false}
          />
          <h2 className="category-card__text" draggable={false}>
            {productName}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
