import a from "../../Images/imageItem/A.png";
import b from "../../Images/imageItem/B.png";
import c from "../../Images/imageItem/C.png";
import d from "../../Images/imageItem/D.png";
import e from "../../Images/imageItem/E.png";
import { Link } from "react-router-dom";
import MainContainer from "./StyledPsgeMain/MainContainer";
import BodyContainer from "./StyledPsgeMain/BodyContainer";
import DivImage from "./StyledPsgeMain/DivImage";
import BannerImage from "./StyledPsgeMain/BannerImage";
import BoxTitle from "./StyledPsgeMain/BoxTitle";

const PageMain = () => {
  return (
    <div>
      <MainContainer>
        <BodyContainer height="650px" bg="#ffedd5">
          <DivImage height="650px">
            <BannerImage src={a} alt="" />
          </DivImage>
          <BoxTitle height="650px">
            <h1 className="w-[500px] text-[50px] text-center font-bold text-green-800 mt-[100px]">
              Raspberry’s finally back (for now)
            </h1>
            <h3 className="w-[450px] font-[600] text-[25px] text-green-800 mt-[50px]">
              Add raspberry syrup to your favorite drinks for a very limited
              time. Plus try the new Raspberry Cream Cold Brew.
            </h3>
            <button className="mt-[50px] w-[120px] h-[35px] text-slate-50 bg-green-800 font-bold rounded-[50px]">
              Order now
            </button>
          </BoxTitle>
        </BodyContainer>
        <BodyContainer height="400px" bg="#d1d1aa">
          <BoxTitle height="400px">
            <h1 className="font-bold text-[25px] mt-[50px]">
              Free drink? Yes, please.
            </h1>
            <h2 className="text-[17px] w-[300px] text-center mt-[50px]">
              Enjoy a <span className="font-bold">free handcrafted drink</span>{" "}
              when you make a qualifying purchase during your first week as a
              Starbucks® Rewards member.*
            </h2>
            <Link to="/createaccount">
            <button className="mt-[50px] w-[120px] h-[35px] border-[1px] border-slate-900 rounded-[50px] font-bold hover:bg-slate-400 transition-colors duration-300 ease">
              Join & order
            </button>
            </Link>
          </BoxTitle>
          <DivImage height="400px">
            <BannerImage src={b} alt="" />
          </DivImage>
        </BodyContainer>
        <BodyContainer height="700px" bg="#d1d1aa">
          <DivImage height="700px">
            <BannerImage src={c} alt="" />
          </DivImage>
          <BoxTitle height="700px">
            <h1 className="font-bold text-[35px] w-[400px] text-center mt-[50px]">
              Delightful Strato™ Frappuccino® beverages
            </h1>
            <h2 className="text-[25px] w-[400px] font-[600] text-center mt-[50px]">
              Treat yourself to layers of flavor and rich cold foam, in Brown
              Sugar, Salted Caramel Mocha and Strawberry Matcha. Get them while
              you can—for a limited time.
            </h2>
            <button className="mt-[80px] w-[120px] h-[35px] border-[1px] border-slate-900 rounded-[50px] font-bold hover:bg-slate-400 transition-colors duration-300 ease">
              Order now
            </button>
          </BoxTitle>
        </BodyContainer>
        <BodyContainer height="600px" bg="#d1d1aa">
          <BoxTitle height="600px">
            <h1 className="font-[800] text-[45px] w-[350px] mt-[70px]">
              Our captivating new collection
            </h1>
            <h2 className="font-[700] text-[20px] w-[450px] mt-[50px]">
              Nigerian-American artist Shadé Akanbi blends tradition and
              modernity to create rich prints and patterns. For a limited time.
            </h2>
            <button className="mt-[50px] w-[120px] h-[35px] border-[1px] border-slate-900 rounded-[50px] font-bold hover:bg-slate-400 transition-colors duration-300 ease">
              Learn more
            </button>
          </BoxTitle>
          <DivImage height="600px">
            <BannerImage src={d} alt="" />
          </DivImage>
        </BodyContainer>
        <BodyContainer height="400px" bg="#1e1e1e">
          <DivImage height="400px">
            <BannerImage src={e} alt="" />
          </DivImage>
          <BoxTitle height="400px" className="text-slate-50">
            <h1 className="font-bold text-[25px] mt-[50px]">
              A Private Concert in NYC
            </h1>
            <h2 className="font-bold text-[18px] text-center w-[400px] mt-[50px]">
              Win exclusive access to see singer-songwriter Alex Warren live at
              the Starbucks Reserve® Roastery NYC on 9/27/25.**
            </h2>
            <button className="mt-[80px] w-[180px] h-[35px] border-[1px] border-slate-50 rounded-[50px] font-bold hover:bg-slate-400 transition-colors duration-300 ease">
              Enter Sweepstakes
            </button>
          </BoxTitle>
        </BodyContainer>
        <div className="w-[100%] h-[300px] mt-[100px] text-center flex items-center flex-col">
          <h3 className="font-[400] w-[530px] text-[14px]">
            *Valid for new Starbucks Rewards members for 7 days from sign up.
            Coupon will be available in the offers tab of your Starbucks app
            following sign up and may take up to 48 hours to arrive. Good at
            participating U.S. stores for a handcrafted menu-sized beverage ($8
            max value) with qualifying purchase. Qualifying purchase excludes
            alcohol, Starbucks Card and Card reloads. Limit one. Cannot be
            combined with other offers or discounts. Excludes delivery services.
            Sign up by 9/28/2025.
          </h3>
          <h2 className="font-[600] w-[530px] mt-[50px] font-[400] text-[14px]">
            **No purchase necessary. 21+ in 50 US/DC. Ends 11:59 PM ET on
            8/13/25. Eligibility/Rules:
            https://JoinMarriottBonvoy.com/AlexWarrenAtStarbucks. Starbucks is
            not responsible for the administration of this Sweepstakes.
          </h2>
        </div>
      </MainContainer>
    </div>
  );
};

export default PageMain;
