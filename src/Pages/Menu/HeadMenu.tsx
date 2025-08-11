const HeadMenu = () => {
  return (
    <div>
        <div className="w-[100%] h-[60px]  bg-slate-100 flex items-center justify-left">
            <ul className="flex items-center ml-[140px]">
                <li className="ml-[25px] text-[15px] font-[400]">
                    Menu
                </li>
                <li className="ml-[25px] text-[15px] font-[400]">
                    Featured
                </li>
                <li className="ml-[25px] text-[15px] font-[400]">
                    Previous
                </li>
                <li className="ml-[25px] text-[15px] font-[400]">
                    Favorites
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HeadMenu