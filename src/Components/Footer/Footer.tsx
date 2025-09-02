import { useLocation } from "react-router-dom";
import ListBtn from "./ListBtn";
import IconFooter from "./IconFooter";
import FooterTag from "./StyledFooter/FooterStayle";
import DivBox from "./StyledFooter/DivBox";
import Line from "./StyledFooter/Line";

const Footer = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.toLowerCase() !== "/learnmore" &&(
        <FooterTag>
          <DivBox>
            <ListBtn />
          </DivBox>
          <Line />
          <DivBox>
            <IconFooter />
          </DivBox>
        </FooterTag>
      )}
    </div>
  );
};

export default Footer;
