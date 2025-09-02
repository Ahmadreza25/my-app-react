import Drinks from "./Item/Drinks";
import Food from "./Item/Food";
import HomeCoffee from "./Item/HomeCoffee";
import MainContainer from "./StyledMenu/MainContainer";
import ListContainer from "./StyledMenu/ListContainer";
import TitleItem from "./StyledMenu/TitleItem";
import Line from "./StyledMenu/Line";
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
          <Line />
          <div>
            <Drinks />
          </div>
        </ListContainer>
        <ListContainer width="100%" height="600px">
          <TitleItem margintop="50px">Food</TitleItem>
          <Line />
          <div>
            <Food />
          </div>
        </ListContainer>
        <ListContainer width="100%" height="600px">
          <TitleItem margintop="50px">At Home Coffee</TitleItem>
          <Line />
          <div>
            <HomeCoffee />
          </div>
        </ListContainer>
      </MainContainer>
    </div>
  );
};

export default ItemsMenu;
