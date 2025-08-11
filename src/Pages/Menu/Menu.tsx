import HeadMenu from "./HeadMenu"
import ListBtnMenu from "./ListBtnMenu"
const Menu = () => {
  return (
    <div>
        <div>
            <div><HeadMenu /></div>
            <div className="flex items-center">
                <div><ListBtnMenu /></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Menu