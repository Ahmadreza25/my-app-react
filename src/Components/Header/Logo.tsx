import logo from "../../Images/logo/logo-header.png"

const Logo = () => {
  return (
    <div>
        <div className="flex items-center justify-center ml-[50px]">
            <div className="w-[60px] h-[60px] border-[50%]">
                <img src={logo} alt=""/>
            </div>
            <div className="ml-[30px]">
                <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">MENU</button>
                <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">REWARDS</button>
                <button className="text-[15px] font-bold ml-[25px] hover:text-green-700">GIFT CARDS</button>
            </div>
        </div>
    </div>
  )
}

export default Logo