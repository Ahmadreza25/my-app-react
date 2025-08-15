import { Link, useLocation } from "react-router-dom";
import makan from "../../Images/icons/makan.png";

const Head = () => {
  const location = useLocation();

  const pagehidd = ["/signin", "/createaccount"];

  if (pagehidd.includes(location.pathname)) {
    return null;
  }
  return (
    <div>
      {
        <div className="flex items-center justify-between mr-[20px]">
          <div>
            <button className="flex items-center hover:text-green-700 mr-[20px]">
              <img src={makan} alt="" className="w-[20px] mr-[10px]" />
              <p className="font-medium">Find a store</p>
            </button>
          </div>
          <div>
            <Link to="/signin">
              <button
                className="
                    w-[80px] h-[32px] border-[1px] 
                    border-slate-900 rounded-[50px] 
                    font-medium text-[14px] mr-[20px] 
                    hover:bg-amber-50 
                    "
              >
                sign in
              </button>
            </Link>
          </div>
          <div>
            <Link to="/createaccount">
              <button
                className="                    
                     w-[100px] h-[30px] border-[1px] 
                    border-slate-900 rounded-[50px] 
                    font-medium text-[14px] mr-[20px] 
                    hover:bg-slate-700 text-slate-100 bg-slate-900"
              >
                join now
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Head;
