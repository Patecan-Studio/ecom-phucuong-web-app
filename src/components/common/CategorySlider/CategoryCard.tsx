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
    // <div className="category-card flex-none w-48 rounded-2xl">
    //     <div className="p-2 rounded-lg overflow-hidden flex-none">

    //             <img src={imageUrl} alt={altText} />

    //         <div className="mt-auto p-2">
    //             <h2 className="text-md text-center font-semibold text-gray-800">{productName}</h2>
    //         </div>
    //     </div>
    // </div>
    <div className="category-card">
      <img
        className="category-card__image"
        src={imageUrl}
        alt={altText}
        draggable={false}
      />
      <h2 className="category-card__text">{productName}</h2>
    </div>
  );
};

export default CategoryCard;
