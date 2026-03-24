import React from 'react'
import image1 from "../assets/image1.avif";

function Card2() {
  return (
    <div className='w-[full] h-[120px] bg-red-300 p-2'>
      <div className='w-[60%] h-full bg-slate-400 '>
        <div className='w-[50%] h-full overflow-hidden'><img src={image1} alt="" /></div>
        <div>
            <div>Name</div>
            <div>Quantity: 5</div>
        </div>
      </div>
      <div>
        <div>Price</div>
        <div>Rs 100/-</div>
      </div>
    </div>
  )
}

export default Card2
