import React from 'react'
import NextImage from 'next/image'

const ProductLogo = () => {
  return (
    <a className="product__logo" href="#">
      <NextImage 
        src="/images/product-images/caesar-logo.png"
        alt="Picture of the author"
        layout="fill"
        objectFit='contain'
      />
    </a>
  )
}

export default ProductLogo