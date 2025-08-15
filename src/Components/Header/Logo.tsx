import logo from "../../Images/logo/logo-header.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center justify-center ml-[50px]">
        <Link to="/">
          <div className="w-[60px] h-[60px] border-[50%]">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="ml-[30px]">
          <Link to="/Menu">
            <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">
              MENU
            </button>
          </Link>
          <Link to="/Rewards">
            <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">
              REWARDS
            </button>
          </Link>
          <Link to="/Gift">
            <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">
              GIFT CARDS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
