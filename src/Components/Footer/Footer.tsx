import { useLocation } from "react-router-dom";
import ListBtn from "./ListBtn";
import IconFooter from "./IconFooter";
import AppFooter from "./StyledFooter/AppFooter";
import ItemsFooter from "./StyledFooter/ItemsFooter";
import Line from "./StyledFooter/Line";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.toLowerCase() !== "/learnmore" && (
        <AppFooter>
          <ItemsFooter>
            <ListBtn />
          </ItemsFooter>
          <Line />
          <ItemsFooter>
            <IconFooter />
          </ItemsFooter>
        </AppFooter>
      )}
    </>
  );
};

export default Footer;
