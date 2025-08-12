import {useState} from 'react'
import imageItem from "../../../Images/imagemnue/product-placeholder.png"
const Food = () => {
const [items , useItems] = useState([
    {
        img:imageItem,
        title:"Breakfast"
    },
    {
        img:imageItem,
        title:"Bakery"
    },
    {
        img:imageItem,
        title:"Treats"
    },
    {
        img:imageItem,
        title:"Lunch"
    },
    {
        img:imageItem,
        title:"Snacks"
    },
])
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-[50px]">
        {items.map((item) => (
          <div className="flex items-center">
            <div className="w-[120px] h-[120px] rounded-[100%]">
              <img src={item.img} alt="" className="w-[100%] rounded-[100%]" />
            </div>
            <h1 className="ml-[20px] font-[600] text-[20px]">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food