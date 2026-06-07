import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import allProductsBanner from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage bannerTitle = "All Products" bannerBg = {allProductsBanner} />
    </div>
  )
}

export default AllProducts