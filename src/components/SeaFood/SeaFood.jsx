import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeafood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <CategoryPage bannerTitle = "Meat & SeaFood" bannerBg = {bgSeafood} />
    </div>
  )
}

export default SeaFood