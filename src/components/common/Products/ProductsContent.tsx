import React from 'react'
import { ProductCard } from './Product'


const ProductsContent = () => {
  return (
    <div className="products__content">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductsContent