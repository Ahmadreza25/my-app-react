import Drinks from "./Item/Drinks";
import Food from "./Item/Food";
import HomeCoffee from "./Item/HomeCoffee";
import MainContainer from "./StyledMenu/MainContainer";
import ListContainer from "./StyledMenu/ListContainer";
import TitleItem from "./StyledMenu/TitleItem";
import Lain from "./StyledMenu/Lain";
import DivMargin from "./StyledMenu/DivMargin";

const ItemsMenu = () => {
  return (
    <div>
      <MainContainer width="1000px" height="800px">
        <ListContainer width="100%" height="800px">
          <DivMargin margintop="20px">
            <TitleItem margintop="10px">Menu</TitleItem>
            <TitleItem margintop="50px">Drinks</TitleItem>
          </DivMargin>
          <Lain></Lain>
          <div>
            <Drinks />
          </div>
        </ListContainer>
        <ListContainer width="100%" height="600px">
          <TitleItem margintop="50px">Food</TitleItem>
          <Lain></Lain>
          <div>
            <Food />
          </div>
        </ListContainer>
        <ListContainer width="100%" height="600px">
          <TitleItem margintop="50px">At Home Coffee</TitleItem>
          <Lain></Lain>
          <div>
            <HomeCoffee />
          </div>
        </ListContainer>
      </MainContainer>
    </div>
  );
};

export default ItemsMenu;
