import img1 from "../../Images/imagerewards/1.jpg"
import img2 from "../../Images/imagerewards/2.jpg"
import img3 from "../../Images/imagerewards/3.jpg"
const Benefits = () => {
  return (
    <div>
        <div className="flex items-center justify-center flex-col mt-[100px]">
            <div className="flex items-center flex-col">
                <h1 className="font-[700] text-[35px]">
                Endless Extras
                </h1>
                <p className="mt-[50px] w-[660px] text-center font-[600]">
                Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-[400px] h-[400px] flex items-center justify-center flex-col text-center m-[30px]">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={img1} alt="" />
                    </div>
                    <div className="mt-[20px]">
                        <h2 className="font-[600] text-[20px]">
                            Fun freebies
                        </h2>
                        <p className="font-[500] mt-[10px]">
                            Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
                        </p>
                        <button className="border-b-2 border-green-700 font-[600] mt-[20px] text-green-700">
                        Learn more
                        </button>
                    </div>
                </div>
                <div className="w-[400px] h-[400px] flex items-center justify-center flex-col text-center m-[30px]">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={img2} alt="" />
                    </div>
                    <div className="mt-[20px]">
                        <h2 className="font-[600] text-[20px]">
                            Order & pay ahead
                        </h2>
                        <p className="font-[500] mt-[10px]">
                            Master the art of ordering ahead with saved favorites and payment methods.
                        </p>
                        <button className="border-b-2 border-green-700 font-[600] mt-[20px] text-green-700">
                        Learn more
                        </button>
                    </div>
                </div>
                <div className="w-[400px] h-[400px] flex items-center justify-center flex-col text-center m-[30px]">
                    <div className="w-[100px] h-[100px] rounded-[50%]">
                        <img src={img3} alt="" />
                    </div>
                    <div className="mt-[20px]">
                        <h2 className="font-[600] text-[20px]">
                            Get to free faster
                        </h2>
                        <p className="font-[500] mt-[10px]">
                            Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                        </p>
                        <button className="border-b-2 border-green-700 font-[600] mt-[20px] text-green-700">
                        Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits