import React from 'react'
import HeadinLine from '../HeadinLine/HeadinLine'
import FruitsCatImg from '../../assets/fruits-and-veggies.png'
import DairyEggsCatImg from '../../assets/dairy-and-eggs.png'
import MeatSeafoodCatImg from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'




const Category = () => {

  const renderCard = categories.map((cat, index) =>{
    return(
      <div className='flex-1 shadow-xl rounded-xl'>
        <div>
          <img src={cat.image} alt="" />
        </div>
        <div className='bg-zinc-100  pt-16 p-8'>
          <h4 className='text-zinc-800 text-xl font-semibold text-center mb-4'>{cat.title}</h4>
          <p>{cat.description}</p>
          <Button content= "See All" />
        </div>
      </div>
    )
  })

  return (
    <section>
        <div className="max-w-[1300px] mx-auto px-10 py-20">
          <HeadinLine highlight = "Shop" heading = "by Category" />

        {/* Category cards */}
        <div className="flex items-center justify-center gap-12">
          {renderCard}
        </div>
        </div>
    </section>
  )
}

export default Category

const categories = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitsCatImg
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: DairyEggsCatImg
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: MeatSeafoodCatImg
  }

]