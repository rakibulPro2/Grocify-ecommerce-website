import React from 'react'

const Banner = ({bannerTitle, bannerBg}) => {
  return (
    <div className='md:h-[50vh] h-[25vh] md:mt-5 mt-3 flex justify-center items-center bg-center bg-cover' style={{backgroundImage: `url(${bannerBg})`, backgroundRepeat: 'no-repeat'}}>
        <h2 className='md:text-5xl text-2xl font-bold text-zinc-800 bg-white md:p-5 p-2 rounded-md'>{bannerTitle}</h2>
    </div>
  )
}

export default Banner