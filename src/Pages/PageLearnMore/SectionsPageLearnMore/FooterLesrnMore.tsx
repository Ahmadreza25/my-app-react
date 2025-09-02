import i1 from "../../../Images/icons/Flash.png";
import i2 from "../../../Images/icons/instagram.png"
import i3 from "../../../Images/icons/link2.png"
import i4 from "../../../Images/icons/tik-tok.png"
import i5 from "../../../Images/icons/youtube.png"
import logo from "../../../Images/logo/logo-header.png"
const FooterLesrnMore = () => {
  return (
    <div>
      <div className="w-[100%] h-[900px] bg-green-950 mt-[100px] felx items-center justify-center flex-col">
        <div className="w-[100%] h-[200px] flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-[200px]">
              <p className="text-center font-[800] text-slate-100 text-[20px]">
                THE STARBUCHS COFFEE COMPANY
              </p>
            </div>
            <div className="w-[300px] ml-[50px] flex items-center">
              <div className="w-[40px] h-[40px] border-[1px] border-slate-100 flex items-center justify-center rounded-[100%]">
                <img src={i1} alt="" className="w-[20px]" />
              </div>
              <div className="ml-[10px]">
                <p className="font-[600] text-slate-100">
                  Our Values & Commitments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[1100px] bg-slate-100 rounded-t-[50px] flex items-center justify-center flex-col">
          <div className="w-[1400px] h-[450px] flex items-center justify-center">
            <div className="w-[700px] h-[450px] mr-[20px]">
              <p className="font-[800] text-[30px] text-green-950">Stay In Touch</p>
              <p className="mt-[30px] w-[600px] font-[600] text-[20px] text-green-950">
                Subscribe to all the latest Starbucks stories and news delivered
                right to your inbox.
              </p>
              <div className="flex flex-col mt-[50px]">
                <p className="font-[700] text-slate-800">Email Address</p>
                <div className="flex items-center mt-[10px]">
                  <div>
                    <input type="text" className="w-[500px] h-[50px] border-[1px] border-green-950 outline-none bg-slate-100 pl-[10px] rounded-[50px]" />
                  </div>
                  <div className="ml-[20px]">
                    <button 
                    className="w-[110px] h-[50px] text-slate-100 bg-green-800 font-[700] rounded-[50px]
                    hover:bg-slate-100 hover:text-green-700 hover:border-[1px] hover:border-green-800
                    transition-all duration-300 ease-in-out
                    ">Sign Up</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-[50px]">
                <div className="w-[45px] h-[45px] rounded-[100%] border-[1px] border-green-900 flex items-center justify-center">
                  <img src={i2} alt="" className="w-[18px]"/>
                </div>
                <div className="w-[45px] h-[45px] rounded-[100%] border-[1px] border-green-900 flex items-center justify-center ml-[20px]">
                  <img src={i3} alt="" className="w-[18px]"/>
                </div>
                <div className="w-[45px] h-[45px] rounded-[100%] border-[1px] border-green-900 flex items-center justify-center ml-[20px]">
                  <img src={i4} alt="" className="w-[18px]"/>
                </div>
                <div className="w-[45px] h-[45px] rounded-[100%] border-[1px] border-green-900 flex items-center justify-center ml-[20px]">
                  <img src={i5} alt="" className="w-[18px]"/>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[450px] ml-[20px]">
              <p className="font-[800] text-[30px] text-green-950">Press Center</p>
              <p className="mt-[30px] w-[600px] font-[600] text-[20px] text-green-950">All the latest company news and leadership perspectives.</p>
              <div className="mt-[50px]">
                <ul>
                  <li className="font-[700] text-[16px] text-green-700 border-b border-green-700 w-[110px]">Press Releases</li>
                  <li className="font-[700] text-[16px] text-green-700 mt-[10px] border-b border-green-700 w-[120px]">Company News</li>
                  <li className="font-[700] text-[16px] text-green-700 mt-[10px] border-b border-green-700 w-[195px]">Starbucks For The Record</li>
                  <li className="font-[700] text-[16px] text-green-700 mt-[10px] border-b border-green-700 w-[85px]">Leadership</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[100%] h-[100px]">
            <div className="w-[600px] h-[1px] bg-slate-900"></div>
            <div><img src={logo} alt="" className="w-[70px]"/></div>
            <div className="w-[600px] h-[1px] bg-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLesrnMore;
