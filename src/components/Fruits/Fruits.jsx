import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage bannerTitle = "Fruits & Vegies" bannerBg = {bgFruits}/>
    </div>
    
  )
}

export default Fruits