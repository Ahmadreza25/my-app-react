import Slider from "./Slayder";
import imgbanerr from "../../Images/image-gift/img-banerr.png";
import ItemGift from "./ItemGift";
import banerrgift from "../../Images/image-gift/banerrGift.jpg";
import FlexBox from "./StyledPageGift/FlexBox";
import DivContainer from "./StyledPageGift/DivContainer";
import DivMargin from "./StyledPageGift/DivMargin";
const PageGift = () => {
  return (
    <div>
      <DivContainer margintop="50px" height="400px">
        <h2 className="ml-[100px] font-[700] text-[30px]">Gift cards</h2>
        <p className="ml-[100px] mt-[50px] font-[600] text-[18px]">Featured</p>
        <Slider />
      </DivContainer>
      <FlexBox height="150px" width="100%">
        <div className="w-[90%] h-[100px] bg-slate-200 rounded-[10px] flex items-center">
          <img src={imgbanerr} alt="" className="w-[70px] ml-[20px]" />
          <h2 className="ml-[20px] font-[700]">
            Effortlessly send up to 10 eGifts per purchase. Select a design to
            start!
          </h2>
        </div>
      </FlexBox>
      <div className="w-[100%] h-[150px] bg-green-100 flex items-center judtify-center flex-col">
        <div className="w-[100%] h-[100px] flex items-center justify-center ml-[-500px]">
          <h2 className="font-[800] text-[23px]">Received a gift card?</h2>
          <p className="font-[600] text-[18px] text-slate-500 ml-[20px]">
            Earns 2★Stars per $1
          </p>
          <button className="w-[130px] h-[32px] border-2 border-slate-900 text-slate-900 font-[600] rounded-[50px] ml-[20px]">
            Add or Reload
          </button>
          <button className="w-[130px] h-[32px] bg-slate-950 text-slate-50 rounded-[50px] ml-[20px]">
            Check balance
          </button>
        </div>
        <DivMargin marginright="-1000px">
          <h2 className="font-[600] text-[17px] text-green-800">
            Card Terms & Conditions
          </h2>
        </DivMargin>
      </div>
      <div>
        <ItemGift />
      </div>
      <div className="w-[100%] h-[450px] bg-slate-50 mt-[100px] flex items-center">
        <div className="w-[400px] ml-[100px]">
          <img src={banerrgift} alt="" />
        </div>
        <div className="w-[400px] flex flex-col ml-[30px]">
          <h3 className="font-[600] text-[18px]">
            Business gifting — simplified
          </h3>
          <p className="font-[500] text-slate-600 mt-[20px]">
            Bulk send physical or digital Starbucks Cards to gift, reward,
            incentivize, or show appreciation towards your customers, clients
            and team members. Minimum 15 cards per order.
          </p>
          <button className="w-[120px] h-[33px] border-2 border-slate-800  mt-[20px] font-[600] rounded-[50px]">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageGift;
