import ListMenu from "../../Components/ListMenu/ListMenu";
import imgitem from "../../Images/imagemnue/product-placeholder.png";
import HeadMenu from "../Menu/HeadMenu";
const PageOrder = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <HeadMenu />
      </div>
      <div className="flex items-center">
        <div className="h-[1000px]">
          <ListMenu />
        </div>
        <div className="h-[1000px] mt-[50px]">
          <div>
            <p className="font-[600] text-slate-600">
              Menu / Frappuccino® Blended Beverage / Strato Frappuccino®
            </p>
            <p className="mt-[30px] font-[700] text-[23px]">
              Frappuccino® Blended Beverage
            </p>
            <p className="mt-[30px]">Strato Frappuccino®</p>
          </div>
          <div className="w-[800px] h-[1px] bg-slate-600 mt-[70px]"></div>
          <div className="flex items-center mt-[100px]">
            <div className="flex items-center justify-center flex-col w-[250px] h-[300px]">
              <div className="w-[100px] h-[100px] rounded-[50%]">
                <img src={imgitem} alt="" className="rounded-[50%]" />
              </div>
              <div className="w-[100%] h-[200px] flex items-center justify-center">
                <ul className="text-center">
                  <li>Brown Sugar</li>
                  <li>Strato™</li>
                  <li>Frappuccino®</li>
                  <li>Blended Beverage</li>
                </ul>
              </div>
            </div>
            <div className="m-[20px] flex items-center justify-center flex-col w-[250px] h-[300px]">
              <div className="w-[100px] h-[100px] rounded-[50%]">
                <img src={imgitem} alt="" className="rounded-[50%]" />
              </div>
              <div className="w-[100%] h-[200px] flex items-center justify-center">
                <ul className="text-center">
                  <li>Strawberry Matcha</li>
                  <li>Strato™</li>
                  <li>Frappuccino®</li>
                  <li>Blended Beverage</li>
                </ul>
              </div>
            </div>
            <div className="m-[20px] flex items-center justify-center flex-col w-[250px] h-[300px]">
              <div className="w-[100px] h-[100px] rounded-[50%]">
                <img src={imgitem} alt="" className="rounded-[50%]" />
              </div>
              <div className="w-[100%] h-[200px] flex items-center justify-center">
                <ul className="text-center">
                  <li>Salted Caramel</li>
                  <li>Mocha Strato™ Frappuccino®</li>
                  <li>Blended Beverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOrder;
