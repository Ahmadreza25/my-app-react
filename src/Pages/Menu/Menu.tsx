import HeadMenu from "./HeadMenu";
import ListBtnMenu from "./ListBtnMenu";
import ItemsMenu from "./ItemsMenu";
import DivItemMenu from "./StyledMenu/DivItemMenu";
import BodyContainer from "./StyledMenu/BodyContainer";

const Menu = () => {
  return (
    <div>
      <>
        <div className="sticky top-0 z-50">
          <HeadMenu />
        </div>
        <BodyContainer>
          <DivItemMenu>
            <ListBtnMenu />
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
