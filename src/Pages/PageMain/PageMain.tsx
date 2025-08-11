import a from "../../Images/imageItem/A.png"
import b from "../../Images/imageItem/B.png"

const PageMain = () => {
  return (
    <div>
        <div className="flex items-center justify-center flex-col">
            <div className="w-[1400px] h-[650px] bg-orange-100 mt-[50px] flex items-center">
              <div className="w-[700px] h-[650px]">
                <img src={a} alt="" className="h-[100%] w-[100%]"/>
              </div>
              <div className="w-[700px] h-[650px] text-center flex items-center flex-col">
                  <h1 className="w-[500px] text-[50px] text-center font-bold text-green-800 mt-[100px]">
                    Raspberry’s finally back (for now)
                  </h1>
                  <h3 className="w-[450px] font-[600] text-[25px] text-green-800 mt-[50px]">
                    Add raspberry syrup to your favorite drinks for a very limited time. Plus try the new Raspberry Cream Cold Brew.
                  </h3>
                  <button className="mt-[50px] w-[120px] h-[35px] text-slate-50 bg-green-800 font-bold rounded-[50px]">
                    Order now
                  </button>
              </div>
            </div>
            <div className="w-[1400px] h-[400px] mt-[50px] flex items-center bg-slate-300 ">
              <div className="w-[700px] h-[400px] text-center flex items-center flex-col">
                <h1 className="font-bold text-[25px] mt-[50px]">
                  Free drink? Yes, please.
                </h1>
                <h2 className="text-[17px] w-[300px] text-center mt-[50px]">
                  Enjoy a <span className="font-bold">free handcrafted drink</span> when you make a qualifying purchase during your first week as a Starbucks® Rewards member.*
                </h2>
                <button className="mt-[50px] w-[120px] h-[35px] border-[1px] border-slate-900 rounded-[50px] font-bold hover:bg-slate-400 transition-colors duration-300 ease">
                  Join & order 
                </button>
              </div>
              <div className="w-[700px] h-[400px]">
                <img src={b} alt="" className="w-[100%] h-[100%]"/>
              </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default PageMain