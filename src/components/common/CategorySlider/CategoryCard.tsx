import React from 'react';

interface ProductCardProps {
    imageUrl: string;
    altText: string;
    productName: string;

}

const ProductCard: React.FC<ProductCardProps> = ({
                                                     imageUrl,
                                                     altText,
                                                     productName,

                                                 }) => {
    return (
        <div className="flex-none w-48 hover:bg-white transition duration-300 ease-in-out m-2 rounded-2xl">
            <div className="p-2 rounded-lg overflow-hidden flex-none">

                    <img src={imageUrl} alt={altText} />

                <div className="mt-auto p-2">
                    <h2 className="text-md text-center font-semibold text-gray-800">{productName}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
