import React from "react";

interface CategoryCardProps {
  imageUrl: string;
  altText: string;
  productName: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  altText,
  productName,
}) => {
  return (
    <div className="category-card">
      <div className="category-card__content">
        <img
          className="category-card__image"
          src={imageUrl}
          alt={altText}
          draggable={false}
        />
        <h2 className="category-card__text">{productName}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
