import logo from "../../Images/logo/logo-header.png";
import { Link, useLocation } from "react-router-dom";
import NavHeader from "./StyledHeader/NavHeader";
import NavList from "./StyledHeader/NavList";
import Circle from "./StyledHeader/Circle";
import ImageLogo from "./StyledHeader/ImageLogo";
import ItemNav from "./StyledHeader/ItemNav";

const Logo = () => {
  const location = useLocation();

  const pagehidd = ["/signin", "/createaccount"];

  return (
    <div>
      <NavHeader>
        <Link to="/">
          <Circle>
            <ImageLogo src={logo} alt="Logo" />
          </Circle>
        </Link>
        {!pagehidd.includes(location.pathname.toLowerCase()) && (
          <NavList>
            <Link to="/Menu">
              <ItemNav>MENU</ItemNav>
            </Link>
            <Link to="/Rewards">
              <ItemNav>REWARDS</ItemNav>
            </Link>
            <Link to="/Gift">
              <ItemNav>GIFT CARDS</ItemNav>
            </Link>
          </NavList>
        )}
      </NavHeader>
    </div>
  );
};

export default Logo;
