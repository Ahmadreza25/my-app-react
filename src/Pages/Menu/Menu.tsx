import HeadMenu from "./HeadMenu";
import ListMenu from "../../Components/ListMenu/ListMenu";
import ItemsMenu from "./ItemsMenu";
import DivItemMenu from "./StyledMenu/DivItemMenu";
import BodyContainer from "./StyledMenu/BodyContainer";
import SectionTitle from "./StyledMenu/SectionTitle";

const Menu = () => {
  return (
    <div>
      <>
        <SectionTitle>
          <HeadMenu />
        </SectionTitle>
        <BodyContainer>
          <DivItemMenu>
            <ListMenu />
          </DivItemMenu>
          <DivItemMenu>
            <ItemsMenu />
          </DivItemMenu>
        </BodyContainer>
      </>
    </div>
  );
};

export default Menu;
