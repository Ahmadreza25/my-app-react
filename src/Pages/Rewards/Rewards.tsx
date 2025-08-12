import HeadRewards from "./HeadRewards";
import Benefits from "./Benefits";
import Score from "./Score";
import image from "../../Images/imageItem/B.png";
import imgitem from "../../Images/imagerewards/25.png"

const Rewards = () => {
  return (
    <div>
      <div>
        <div className="sticky top-0 z-50">
          <HeadRewards />
        </div>
        <div className="w-[1500px] h-[450px] flex items-center bg-amber-100">
          <div className="w-[750px] h-[450px]">
                <div className="flex flex-col ml-[200px]">
                    <h2 className="font-[600] text-[45px] w-[450px] mt-[30px] text-green-900">It’s a great day for free coffee</h2>
                    <h4 className="font-bold text-[17px] text-green-900 mt-[30px]">Sign up and start enjoying the perks of Starbucks® Rewards.</h4>
                    <button className="mt-[50px] w-[100px] h-[35px] bg-green-900 text-slate-50 rounded-[50px]">Join now</button>
                    <p className="mt-[20px]">It's even better with the app.</p>
                </div>
          </div>
          <div className="w-[750px] h-[450px]">
            <img src={image} alt="" className="h-[100%] w-[100%]"/>
          </div>
        </div>
        <div className="w-[100%] h-[600px] flex items-center justify-center flex-col mt-[100px]">
            <div>
                <div className="text-center">
                    <h1 className="font-[700] text-[30px]">Getting started is easy</h1>
                    <h3 className="font-[600] mt-[20px]">Earn Stars and get rewarded in a few easy steps.</h3>
                </div>
                <div className="flex items-center judtify-center mt-[100px]">
                    <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                        <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                            <h2 className="text-green-800 font-[800] text-[25px]">
                                1
                            </h2>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <h2 className="mt-[20px] font-[700] text-[20px]">
                            Create an account
                            </h2>
                            <p className="text-center mt-[20px]">
                            To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.
                            </p>
                        </div>
                    </div>      
                    <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                        <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                            <h2 className="text-green-800 font-[800] text-[25px]">
                                2
                            </h2>
                        </div>  
                        <div className="flex items-center justify-center flex-col">
                            <h2 className="mt-[20px] font-[700] text-[20px]">
                            Order and pay how you’d like
                            </h2>
                            <p className="text-center mt-[20px]">
                            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col w-[400px] h-[400px] m-[30px]">
                        <div className="w-[50px] h-[50px] border-2 border-green-800 rounded-[50%] flex items-center justify-center">
                            <h2 className="text-green-800 font-[800] text-[25px]">
                                3
                            </h2>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <h2 className="mt-[20px] font-[700] text-[20px]">
                            Earn Stars, get Rewards
                            </h2>
                            <p className="text-center mt-[20px]">
                            As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[100%] h-[200px] bg-green-50 flex items-center justify-center flex-col">
            <h2 className="font-[800] text-[25px] text-slate-800 mt-[30px]">Get your favorites for free</h2>
            <ul className="flex items-center mt-[40px]">
                <li className="m-[30px] font-[700] text-[30px]">
                    25⭐
                </li>
                <li className="m-[30px] font-[700] text-[30px]">
                    100⭐
                </li>
                <li className="m-[30px] font-[700] text-[30px]">
                    200⭐
                </li>
                <li className="m-[30px] font-[700] text-[30px]">
                    300⭐
                </li>
                <li className="m-[30px] font-[700] text-[30px]">
                    400⭐
                </li>
            </ul>
        </div>
        <div className="w-[100%] h-[300px] bg-slate-300 flex items-center justify-center">
            <div className="w-[50%]">
                <img src={imgitem} alt="" className="w-[350px] ml-[400px]"/>
            </div>
            <div className="w-[50%]">
                <h2 className="text-[25px] font-[600]">
                Customize your drink
                </h2>
                <p className="mt-[20px] w-[330px] font-[400]">
                Make your drink just right with an extra espresso shot or a dash of your favorite syrup.
                </p>
            </div>
        </div>
        <div className="w-[100%] h-[600px]">
            <Benefits />
        </div>
        <div>
            <Score />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
