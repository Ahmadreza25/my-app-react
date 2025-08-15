import { useState } from "react";
import s1 from "../../Images/imageSlyder/s1.png";
import s2 from "../../Images/imageSlyder/s2.png";
import s3 from "../../Images/imageSlyder/s3.png";
import s4 from "../../Images/imageSlyder/s4.png";
import s5 from "../../Images/imageSlyder/s5.png";
import s6 from "../../Images/imageSlyder/s6.png";
import s7 from "../../Images/imageSlyder/s7.png";
import s8 from "../../Images/imageSlyder/s8.png";
import FlexBox from "./StyledPageGift/FlexBox";
import MainDivSlayder from "./StyledPageGift/MainDivSlayder";

const images = [s1, s2, s3, s4, s5, s6, s7, s8];

const Slider = () => {
  const [item, setitem] = useState(0);
  const product = 2;

  const handilePrev = () => {
    setitem((prev) => (prev === 0 ? product - 1 : prev - 1));
  };

  const handilnext = () => {
    setitem((prev) => (prev === product - 1 ? 0 : prev + 1));
  };

  const items = item * 4;
  const products = images.slice(items, items + 4);

  return (
    <div>
      <FlexBox>
        <MainDivSlayder>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((img, index) => (
              <div className="w-[300px] hover:mt-[-8px] transition-[margin-top] duration-300 ease-in-out">
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${items + index}`}
                  className="w-[100%] h-48 object-cover rounded-lg transition-all duration-500"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handilePrev}
            className="absolute top-1/2 left-[-50px] -translate-y-1/2 bg-slate-100 text-slate-500 
            w-[40px] h-[40px] font-[700] text-[20px]  rounded-full hover:bg-slate-400 z-10 flex items-center justify-center"
          >
            {"<"}
          </button>
          <button
            onClick={handilnext}
            className="absolute top-1/2 right-[-50px] -translate-y-1/2 bg-slate-100 text-slate-500 
            w-[40px] h-[40px] font-[700] text-[20px]  rounded-full hover:bg-slate-400 z-10 flex items-center justify-center"
          >
            {">"}
          </button>
        </MainDivSlayder>
      </FlexBox>
    </div>
  );
};

export default Slider;
