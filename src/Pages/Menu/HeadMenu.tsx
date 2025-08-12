import LiHead from "./StyledMenu/LiHead"
const HeadMenu = () => {
  return (
    <div>
        <div className="w-[100%] h-[60px]  bg-slate-100 flex items-center justify-left">
            <ul className="flex items-center ml-[140px]">
                <LiHead>
                    Menu
                </LiHead>
                <LiHead>
                    Featured
                </LiHead>
                <LiHead>
                    Previous
                </LiHead>
                <LiHead>
                    Favorites
                </LiHead>
            </ul>
        </div>
    </div>
  )
}

export default HeadMenu