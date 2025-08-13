import NavHead from "./StyledMenu/NavHead";
import NavItem from "./StyledMenu/NavItem";
import NavList from "./StyledMenu/NavList";

const HeadMenu = () => {
  return (
    <div>
      <NavHead>
        <NavList>
          <NavItem>Menu</NavItem>
          <NavItem>Featured</NavItem>
          <NavItem>Previous</NavItem>
          <NavItem>Favorites</NavItem>
        </NavList>
      </NavHead>
    </div>
  );
};

export default HeadMenu;
