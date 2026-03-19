import React, { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'

function Home() {
  // state to store filtered food items (default = all items)
  let [cate,setCate]=useState(food_items)
  // function to filter food items based on category
  function filter(category){
        // if "All" clicked → show all items

    if(category==="All"){
      setCate(food_items)
    }else{
            // convert category into backend format (lowercase + underscore)

      const normalizedCategory = category.toLowerCase().replace(/\s+/g, "_")
            // filter items based on category match

      let newList = food_items.filter((item)=>(
        item.food_category===normalizedCategory
      ))
            // update state with filtered list

      setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full min-h-screen '>
      <Nav />

      <div className='flex flex-wrap items-center justify-center gap-5 w-[100%] '>
        {Categories.map((item)=>{
            return <div className='w-[140px] h-[150px] bg-white flex items-start gap-5 p-5 flex-col justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)} >
                {item.icon}
                {item.name}
                </div>
        })}
      </div>

      <div className='flex flex-wrap gap-4 px-5 justify-center items-center pt-8 pb-8'>
        {cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
        ))}
      </div>
    </div>
  )
}

export default Home
