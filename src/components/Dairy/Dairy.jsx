import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CategoryPage bannerTitle= "Dairy & Eggs" bannerBg = {bgDairy} />
    </div>
  )
}

export default Dairy