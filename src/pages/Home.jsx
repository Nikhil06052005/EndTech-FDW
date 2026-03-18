import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'

function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen '>
      <Nav />
      <div className='flex flex-wrap items-center justify-center gap-5 w-[100%] '>
        {Categories.map((item)=>{
            return <div className='w-[140px] h-[150px] bg-white flex items-start gap-5 p-5 flex-col justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'>
                {item.icon}
                {item.name}
                </div>
        })}
      </div>
    </div>
  )
}

export default Home
