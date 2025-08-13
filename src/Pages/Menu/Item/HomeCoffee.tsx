import {useState} from 'react'
import imageItem from "../../../Images/imagemnue/product-placeholder.png"
import DivMain from './StyledItem/DivMain'
import DivBox from './StyledItem/DivBox'
import DivImg from './StyledItem/DivImg'
import ImgItem from './StyledItem/ImgItem'
import TitleItem from './StyledItem/TitleItem'
const HomeCoffee = () => {
const [items , useItems] = useState([
    {
        img:imageItem,
        title:"Whole Bean"
    },
    {
        img:imageItem,
        title:"VIA® Instant"
    },
    {
        img:imageItem,
        title:"Shopping Bag"
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

export default HomeCoffee