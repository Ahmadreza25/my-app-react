import MenuItem from "./StyledListMenu/MenuItem";
import UlList from "./StyledListMenu/UlList";
import DivMargin from "./StyledListMenu/DivMargin";
import MainContainer from "./StyledListMenu/MainContainer";
import SectionTitle from "./StyledListMenu/SectionTitle";

const ListMenu = () => {
  return (
    <div>
      <MainContainer width="450px" height="1000px">
        <DivMargin marginleft="80px" margintop="30px">
          <SectionTitle>Drinks</SectionTitle>
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
          <SectionTitle>Food</SectionTitle>
          <UlList>
            <MenuItem>Breakfast</MenuItem>
            <MenuItem>Bakery</MenuItem>
            <MenuItem>Treats</MenuItem>
            <MenuItem>Lunch</MenuItem>
            <MenuItem>Snacks</MenuItem>
          </UlList>
        </DivMargin>
        <DivMargin marginleft="80px" margintop="30px">
          <SectionTitle>At Home Coffee</SectionTitle>
          <UlList>
            <MenuItem>Whole Bean</MenuItem>
            <MenuItem>VIA® Instant</MenuItem>
            <MenuItem>Shopping Bag</MenuItem>
          </UlList>
        </DivMargin>
      </MainContainer>
    </div>
  );
};

export default ListMenu;
