import React from 'react'
import NextImage from 'next/image'

const ProductLogo = () => {
  return (
    <div className="product__logo">
      <NextImage 
        src="/images/product-images/caesar-logo.png"
        alt="Picture of the author"
        layout="fill"
        objectFit='contain'
      />
    </div>
  )
}

export default ProductLogo