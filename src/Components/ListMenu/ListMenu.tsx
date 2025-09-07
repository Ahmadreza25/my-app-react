import MenuItem from "./StyledListMenu/MenuItem";
import List from "./StyledListMenu/List";
import ContainerList from "./StyledListMenu/ContainerList";
import MainContainer from "./StyledListMenu/MainContainer";
import SectionTitle from "./StyledListMenu/SectionTitle";

const ListMenu = () => {
  return (
    <>
      <MainContainer>
        <ContainerList>
          <SectionTitle>Drinks</SectionTitle>
          <List>
            <MenuItem>Hot Coffee</MenuItem>
            <MenuItem>Cold Coffee</MenuItem>
            <MenuItem>Hot Tea</MenuItem>
            <MenuItem>Cold Tea</MenuItem>
            <MenuItem>Refreshers</MenuItem>
            <MenuItem>Frappuccino® Blended Beverage</MenuItem>
            <MenuItem>Hot Chocolate, Lemonade & More</MenuItem>
            <MenuItem>Bottled Beverages</MenuItem>
          </List>
        </ContainerList>
        <ContainerList>
          <SectionTitle>Food</SectionTitle>
          <List>
            <MenuItem>Breakfast</MenuItem>
            <MenuItem>Bakery</MenuItem>
            <MenuItem>Treats</MenuItem>
            <MenuItem>Lunch</MenuItem>
            <MenuItem>Snacks</MenuItem>
          </List>
        </ContainerList>
        <ContainerList>
          <SectionTitle>At Home Coffee</SectionTitle>
          <List>
            <MenuItem>Whole Bean</MenuItem>
            <MenuItem>VIA® Instant</MenuItem>
            <MenuItem>Shopping Bag</MenuItem>
          </List>
        </ContainerList>
      </MainContainer>
    </>
  );
};

export default ListMenu;
