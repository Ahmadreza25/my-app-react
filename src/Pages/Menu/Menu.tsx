import HeadMenu from "./HeadMenu"
import ListBtnMenu from "./ListBtnMenu"
import ItemsMenu from "./ItemsMenu"
const Menu = () => {
  return (
    <div>
        <div>
            <div><HeadMenu /></div>
            <div className="flex items-center h-[2000px]">
                <div className="h-[1800px] mt-[-150px]">
                <ListBtnMenu />
                </div>
                <div className="h-[1800px] mt-[-150px]">
                <ItemsMenu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu