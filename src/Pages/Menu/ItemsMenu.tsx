import Drinks from "./Item/Drinks";
import Food from "./Item/Food";
import HomeCoffee from "./Item/HomeCoffee";
const ItemsMenu = () => {
  return (
    <div>
      <div className="w-[1000px] h-[800px] flex flex-col">
        <div className="w-[100%] h-[800px]">
          <div className=" mt-[20px]">
            <h2 className="font-[700] text-[30px]">Menu</h2>
            <h2 className="font-[700] text-[30px] mt-[50px]">Drinks</h2>
          </div>
          <div className="w-[900px] h-[1px] bg-slate-400 mt-[40px]"></div>
          <div>
            <Drinks />
          </div>
        </div>
        <div className="w-[100%] h-[600px]">
            <h2 className="font-[700] text-[30px] mt-[50px]">
                Food
            </h2>
            <div className="w-[900px] h-[1px] bg-slate-400 mt-[40px]"></div>
            <div>
                <Food />
            </div>
        </div>
        <div className="w-[100%] h-[600px]">
            <h2 className="font-[700] text-[30px] mt-[50px]">
              At Home Coffee
            </h2>
            <div className="w-[900px] h-[1px] bg-slate-400 mt-[40px]"></div>
            <div>
                <HomeCoffee />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsMenu;
