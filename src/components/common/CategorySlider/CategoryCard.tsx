import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div className="category-card">
      <div className="category-card__content">
        <Link href={path}
          draggable={false}
        >
          <img
            className="category-card__image"
            src={imageUrl}
            alt={altText}
            draggable={false}
          />
          <h2 className="category-card__text">{productName}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
