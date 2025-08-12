import {useState} from "react";
import imageItem from "../../../Images/imagemnue/product-placeholder.png";
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
  );
};

export default Drinks;
