import ShortcutList from "./StyledFooter/ShortcutList";
import Shortcut from "./StyledFooter/Shortcut";
import Title from "./StyledFooter/Title";
import NavList from "./StyledFooter/NavList";
import NavItem from "./StyledFooter/NavItem";
const ListBtn = () => {
  return (
    <>
      <Shortcut>
        <ShortcutList>
          <Title>About Us</Title>
          <NavList>
            <NavItem>Our Company</NavItem>
            <NavItem>Our Coffee</NavItem>
            <NavItem>About Starbucks</NavItem>
            <NavItem>Starbucks Archive</NavItem>
            <NavItem>Investor Relations</NavItem>
            <NavItem>Customer Service</NavItem>
            <NavItem>Contact Us</NavItem>
          </NavList>
        </ShortcutList>
        <ShortcutList>
          <Title>Careers</Title>
          <NavList>
            <NavItem>Culture and Values</NavItem>
            <NavItem>Belonging at Starbucks</NavItem>
            <NavItem>College Achievement Plan</NavItem>
            <NavItem>Alumni Community</NavItem>
            <NavItem>U.S. Careers</NavItem>
            <NavItem>International Careers</NavItem>
          </NavList>
        </ShortcutList>
        <ShortcutList>
          <Title>Social Impact</Title>
          <NavList>
            <NavItem>Communities</NavItem>
            <NavItem>Starbucks Foundation</NavItem>
            <NavItem>Sustainability</NavItem>
            <NavItem>Environmental and Social Impact Reporting</NavItem>
          </NavList>
        </ShortcutList>
        <ShortcutList>
          <Title>For Business Partners</Title>
          <NavList>
            <NavItem>Landlord Support Center</NavItem>
            <NavItem>Suppliers</NavItem>
            <NavItem>Corporate Gift Card Sales</NavItem>
            <NavItem>Office and Foodservice Coffee</NavItem>
          </NavList>
        </ShortcutList>
        <ShortcutList>
          <Title>Order and Pick Up</Title>
          <NavList>
            <NavItem>Order on the App</NavItem>
            <NavItem>Order on the Web</NavItem>
            <NavItem>Delivery</NavItem>
            <NavItem>Order and Pick Up Options</NavItem>
            <NavItem>Explore and Find Coffee for Home</NavItem>
          </NavList>
        </ShortcutList>
      </Shortcut>
    </>
  );
};

export default ListBtn;
