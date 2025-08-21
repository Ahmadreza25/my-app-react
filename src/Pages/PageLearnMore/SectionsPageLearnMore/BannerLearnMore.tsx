import banner from "../../../Images/imageLearnMore/Banner.png";
import DivMargin from "./StyledSections/DivMargin";
import Title from "./StyledSections/Title";
import ContainerBanner from "./StyledSections/ContainerBanner";
import FormBox from "./StyledSections/FormBox";
import ButtonMerch from "./StyledSections/ButtonMerch";
import StyledImage from "./StyledSections/StyledImage";

const BannerLearnMore = () => {
  return (
    <div>
      <ContainerBanner>
        <FormBox width="750px" height="700px">
          <DivMargin marginleft="50px" margintop="50px">
            <ButtonMerch>Cups & Merch</ButtonMerch>
            <Title
              margintop="50px"
              font="700"
              size="45px"
              width="500px"
              color="#4a4a4a"
            >
              From sketchbook to Starbucks: The story behind the newest artist
              collaboration merch
            </Title>
            <Title
              size="18px"
              width="600px"
              font="500"
              margintop="20px"
              color="#4a4a4a"
            >
              Meet artist Shadé Akanbi, the print and textile designer behind
              Starbucks latest merchandise collaboration, available in U.S.
              Starbucks stores starting July 8.
            </Title>
            <Title font="300" margintop="20px" color="#4a4a4a">
              By Heidi Peiper
            </Title>
          </DivMargin>
        </FormBox>
        <FormBox width="750px" height="700px">
          <StyledImage width="100%" height="100%" src={banner} />
        </FormBox>
      </ContainerBanner>
    </div>
  );
};

export default BannerLearnMore;
