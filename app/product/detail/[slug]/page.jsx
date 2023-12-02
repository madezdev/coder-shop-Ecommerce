import React from 'react'
import { ParsedUrlQuery } from "querystring";
import ProductDetail from '@/app/components/product/ProductDetail';



const DetailPage = ( { params } ) => {

    const { slug } = params || { slug: 'all' };


  return (
    <section>
        <ProductDetail slug={slug}/>
    </section>
  )
}

export default DetailPage