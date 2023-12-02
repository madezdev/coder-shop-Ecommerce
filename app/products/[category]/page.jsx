import React, { Suspense } from 'react'
import ProductList from '@/app/components/product/ProductList'

const CategoryPage = ( {params} ) => {
  const { category } = params
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList category={category} />
      </Suspense>
    </>
  )
}

export default CategoryPage