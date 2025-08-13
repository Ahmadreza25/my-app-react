import HeadMenu from "./HeadMenu";
import ListBtnMenu from "./ListBtnMenu";
import ItemsMenu from "./ItemsMenu";
import DivMain from "./StyledMenu/DivMain";
import DivItemMenu from "./StyledMenu/DivItemMenu";

const Menu = () => {
  return (
    <div>
      <>
        <div className="sticky top-0 z-50">
          <HeadMenu />
        </div>
        <DivMain>
          <DivItemMenu>
            <ListBtnMenu />
          </DivItemMenu>
          <DivItemMenu>
            <ItemsMenu />
          </DivItemMenu>
        </DivMain>
      </>
    </div>
  );
};

export default Menu;
