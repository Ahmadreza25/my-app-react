import logo from "../../../Images/logo/logo-header.png";
import i1 from "../../../Images/icons/search.png";
import i2 from "../../../Images/icons/world.png";
import HeaderTag from "./StyledSections/HeaderTag";
import DivLogo from "./StyledSections/DivLogo";
import Logo from "./StyledSections/Logo";
import FlexItems from "./StyledSections/FlexItems";
import ButtonHead from "./StyledSections/ButtonHead";
import IconHead from "./StyledSections/IconHead";
const HeaderLesrnMore = () => {
  return (
    <div>
      <HeaderTag>
        <DivLogo>
          <Logo src={logo} alt="" />
        </DivLogo>
        <FlexItems>
          <ButtonHead width="170px">Coffee & Craft</ButtonHead>
          <ButtonHead width="170px">People & Impact</ButtonHead>
          <ButtonHead width="100px">News</ButtonHead>
          <ButtonHead width="100px">Stories</ButtonHead>
        </FlexItems>
        <FlexItems marginright="120px">
          <IconHead src={i1} />
          <IconHead src={i2} />
        </FlexItems>
      </HeaderTag>
    </div>
  );
};

export default HeaderLesrnMore;
