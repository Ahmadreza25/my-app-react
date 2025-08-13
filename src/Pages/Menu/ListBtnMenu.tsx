import MenuItem from "../Menu/StyledMenu/MenuItem"
import UlList from "./StyledMenu/UlList"
import DivMargin from "./StyledMenu/DivMargin"
import MainContainer from "./StyledMenu/MainContainer"

const ListBtnMenu = () => {
  return (
    <div>
        <MainContainer width="450px" height="1000px">
            <DivMargin marginleft="80px" margintop="30px">
                <h1 className="font-[700] text-[18px]">Drinks</h1>
                <UlList>
                    <MenuItem>Hot Coffee</MenuItem>
                    <MenuItem>Cold Coffee</MenuItem>
                    <MenuItem>Hot Tea</MenuItem>
                    <MenuItem>Cold Tea</MenuItem>
                    <MenuItem>Refreshers</MenuItem>
                    <MenuItem>Frappuccino® Blended Beverage</MenuItem>
                    <MenuItem>Hot Chocolate, Lemonade & More</MenuItem>
                    <MenuItem>Bottled Beverages</MenuItem>
                </UlList>
            </DivMargin>
            <DivMargin marginleft="80px" margintop="30px">
                <h1 className="font-[700] text-[18px]">Food</h1>
                <UlList>
                    <MenuItem>Breakfast</MenuItem>
                    <MenuItem>Bakery</MenuItem>
                    <MenuItem>Treats</MenuItem>
                    <MenuItem>Lunch</MenuItem>
                    <MenuItem>Snacks</MenuItem>
                </UlList>
            </DivMargin>
            <DivMargin marginleft="80px" margintop="30px">
                <h1 className="font-[700] text-[18px]">At Home Coffee</h1>
                <UlList>
                    <MenuItem>Whole Bean</MenuItem>
                    <MenuItem>VIA® Instant</MenuItem>
                    <MenuItem>Shopping Bag</MenuItem>
                </UlList>
            </DivMargin>
        </MainContainer>
    </div>
  )
}

export default ListBtnMenu