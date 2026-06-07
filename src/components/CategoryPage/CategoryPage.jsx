import React from 'react'
import Banner from '../Banner/Banner'
import productsData from '../../assets/ProductsData/ProductsData'
import Product from "../Product/Product";

const CategoryPage = ({bannerTitle, bannerBg}) => {
    const renderProducts = productsData.map((product) =>{
        return (
            <Product name={product.name} image = {product.image} price={product.price} />
        )
    })
  return (
    <div>
        <Banner bannerTitle = {bannerTitle} bannerBg =  {bannerBg} />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-9 mt-15 max-w-[1300px] mx-auto px-10">
            {renderProducts}
        </div>
    </div>
  )
}

export default CategoryPage