import Logo from "./Logo";
import Head from "./Head";
import { useLocation } from "react-router-dom";
import HeaderWrapper from "./StyledHeader/HeaderWrapper";
const Header = () => {
  const location = useLocation();

  const locationPages = ["/learnmore"];

  if (locationPages.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      {
        <HeaderWrapper>
          <Logo />
          <Head />
        </HeaderWrapper>
      }
    </>
  );
};

export default Header;
