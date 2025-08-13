import Drinks from "./Item/Drinks";
import Food from "./Item/Food";
import HomeCoffee from "./Item/HomeCoffee";
import MainContainer from "./StyledMenu/MainContainer";

const ItemsMenu = () => {
  return (
    <div>
      <MainContainer width="1000px" height="800px">
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
      </MainContainer>
    </div>
  );
};

export default ItemsMenu;
