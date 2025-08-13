import {useState} from 'react'
import imageItem from "../../../Images/imagemnue/product-placeholder.png"
import DivMain from './StyledItem/DivMain'
import DivBox from './StyledItem/DivBox'
import DivImg from './StyledItem/DivImg'
import ImgItem from './StyledItem/ImgItem'
import TitleItem from './StyledItem/TitleItem'
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
      <DivMain>
        {items.map((item) => (
          <DivBox>
            <DivImg>
              <ImgItem src={item.img} alt=""/>
            </DivImg>
            <TitleItem>{item.title}</TitleItem>
          </DivBox>
        ))}
      </DivMain>
    </div>
  )
}

export default Food