import {useState} from "react";
import imageItem from "../../../Images/imagemnue/product-placeholder.png";
import DivMain from "./StyledItem/DivMain"; 
import DivBox from "./StyledItem/DivBox";
import DivImg from "./StyledItem/DivImg";
import ImgItem from "./StyledItem/ImgItem";
const Drinks = () => {
    const [items, useItems] = useState([
        {
          img: imageItem,
          title: "Hot Coffee",
        },
        {
          img: imageItem,
          title: "Cold Coffee",
        },
        {
          img: imageItem,
          title: "Hot Tea",
        },
        {
          img: imageItem,
          title: "Cold Tea",
        },
        {
          img: imageItem,
          title: "Frappuccino® Blended Beverage",
        },
        {
          img: imageItem,
          title: "Hot Chocolate, Lemonade & More",
        },
        {
          img: imageItem,
          title: "Bottled Beverages",
        },
        {
          img: imageItem,
          title: "Refreshers",
        },
      ]);
  return (
    <div>
      <DivMain>
        {items.map((item) => (
          <DivBox>
            <DivImg>
              <ImgItem src={item.img} alt=""/>
            </DivImg>
            <h1 className="ml-[20px] font-[600] text-[20px]">{item.title}</h1>
          </DivBox>
        ))}
      </DivMain>
    </div>
  );
};

export default Drinks;
