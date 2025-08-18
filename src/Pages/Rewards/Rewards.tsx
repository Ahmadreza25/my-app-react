import HeadRewards from "./HeadRewards";
import Benefits from "./Benefits";
import Score from "./Score";
import image from "../../Images/imageItem/B.png";
import imgitem from "../../Images/imagerewards/25.png";
import ContentWrapper from "./StyledRewards/ContentWrapper";
import LayoutBox from "./StyledRewards/LayoutBox";
import TitleItem from "./StyledRewards/TitleItem";
import ImageItem from "./StyledRewards/ImageItem";
import StickyWrapper from "./StyledRewards/StickyWrapper";

const Rewards = () => {
  return (
    <div>
      <div>
        <StickyWrapper>
          <HeadRewards />
        </StickyWrapper>
        <ContentWrapper>
          <LayoutBox width="750px" height="450px">
            <div className="flex flex-col ml-[200px]">
              <h2 className="font-[600] text-[45px] w-[450px] mt-[30px] text-green-900">
                It’s a great day for free coffee
              </h2>
              <h4 className="font-bold text-[17px] text-green-900 mt-[30px]">
                Sign up and start enjoying the perks of Starbucks® Rewards.
              </h4>
              <button className="mt-[50px] w-[100px] h-[35px] bg-green-900 text-slate-50 rounded-[50px]">
                Join now
              </button>
              <TitleItem margintop="20px">It's even better with the app.</TitleItem>
            </div>
          </LayoutBox>
          <LayoutBox width="750px" height="450px">
            <ImageItem width="100%" src={image} alt="Banerr" className="h-[450px]"/>
          </LayoutBox>
        </ContentWrapper>
        <div className="w-[100%] h-[600px] flex items-center justify-center flex-col mt-[100px]">
          <div>
            <div className="text-center">
              <TitleItem font="700" size="30px">
                Getting started is easy
              </TitleItem>
              <TitleItem font="600" margintop="20px">
                Earn Stars and get rewarded in a few easy steps.
              </TitleItem>
            </div>
            <div className="flex items-center judtify-center mt-[100px]">
              <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                  <h2 className="text-green-800 font-[800] text-[25px]">1</h2>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <TitleItem margintop="20px" font="700" size="20px">
                    Create an account
                  </TitleItem>
                  <p className="text-center mt-[20px]">
                    To get started, join now. You can also Join in the app to
                    get access to the full range of Starbucks® Rewards benefits.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                  <h2 className="text-green-800 font-[800] text-[25px]">2</h2>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <TitleItem margintop="20px" font="700" size="20px">
                    Order and pay how you’d like
                  </TitleItem>
                  <p className="text-center mt-[20px]">
                    Use cash, credit/debit card or save some time and pay right
                    through the app. You’ll collect Stars all ways. Learn how
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                  <h2 className="text-green-800 font-[800] text-[25px]">3</h2>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <TitleItem margintop="20px" font="700" size="20px">
                    Earn Stars, get Rewards
                  </TitleItem>
                  <p className="text-center mt-[20px]">
                    As you earn Stars, you can redeem them for Rewards—like free
                    food, drinks, and more. Start redeeming with as little as 25
                    Stars!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[200px] bg-green-50 flex items-center justify-center flex-col">
          <h2 className="font-[800] text-[25px] text-slate-800 mt-[30px]">
            Get your favorites for free
          </h2>
          <ul className="flex items-center mt-[40px]">
            <li className="m-[30px] font-[700] text-[30px]">25⭐</li>
            <li className="m-[30px] font-[700] text-[30px]">100⭐</li>
            <li className="m-[30px] font-[700] text-[30px]">200⭐</li>
            <li className="m-[30px] font-[700] text-[30px]">300⭐</li>
            <li className="m-[30px] font-[700] text-[30px]">400⭐</li>
          </ul>
        </div>
        <div className="w-[100%] h-[300px] bg-slate-300 flex items-center justify-center">
          <LayoutBox width="50%">
            <ImageItem width="350px" className="ml-[400px]" src={imgitem} alt="Banerr"/>
          </LayoutBox>
          <LayoutBox width="50%">
            <TitleItem size="25px" font="600">Customize your drink</TitleItem>
            <p className="mt-[20px] w-[330px] font-[400]">
              Make your drink just right with an extra espresso shot or a dash
              of your favorite syrup.
            </p>
          </LayoutBox>
        </div>
        <LayoutBox width="100%" height="600px">
          <Benefits />
        </LayoutBox>
        <div>
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
