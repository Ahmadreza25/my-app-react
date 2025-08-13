import NavItem from "./StyledMenu/NavItem"
const HeadMenu = () => {
  return (
    <div>
        <div className="w-[100%] h-[60px]  bg-slate-100 flex items-center justify-left">
            <ul className="flex items-center ml-[140px]">
                <NavItem>
                    Menu
                </NavItem>
                <NavItem>
                    Featured
                </NavItem>
                <NavItem>
                    Previous
                </NavItem>
                <NavItem>
                    Favorites
                </NavItem>
            </ul>
        </div>
    </div>
  )
}

export default HeadMenu