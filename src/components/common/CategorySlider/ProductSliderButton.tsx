import React from 'react';
import {className} from "postcss-selector-parser";

interface ProductSliderButtonProps {
    direction: 'left' | 'right';
    className?: string;
    onClick: () => void;
}
const ProductSliderButton: React.FC<ProductSliderButtonProps> = ({ direction, onClick , className}) => {
    const buttonIcon = direction === 'left' ? '<' : '>';

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {buttonIcon}
        </button>
    );
};

export default ProductSliderButton;
