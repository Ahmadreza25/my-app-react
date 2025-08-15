import a1 from "../../Images/image-gift/a1.jpg";
import a2 from "../../Images/image-gift/a2.jpg";
import a3 from "../../Images/image-gift/a3.jpg";
import a4 from "../../Images/image-gift/a4.jpg";
import a5 from "../../Images/image-gift/a5.jpg";
import a6 from "../../Images/image-gift/a6.jpg";
import a7 from "../../Images/image-gift/a7.jpg";
import a8 from "../../Images/image-gift/a8.jpg";
import a9 from "../../Images/image-gift/a9.jpg";
import a10 from "../../Images/image-gift/a10.jpg";
import a11 from "../../Images/image-gift/a11.jpg";
import a12 from "../../Images/image-gift/a12.jpg";
import a13 from "../../Images/image-gift/a13.jpg";
import a14 from "../../Images/image-gift/a14.jpg";
import a15 from "../../Images/image-gift/a15.jpg";
import a17 from "../../Images/image-gift/a17.jpg";
import a19 from "../../Images/image-gift/a19.jpg";
import a20 from "../../Images/image-gift/a20.jpg";
import a21 from "../../Images/image-gift/a21.jpg";
import a22 from "../../Images/image-gift/a22.jpg";
import DivContainer from "./StyledPageGift/DivContainer";
import DivMargin from "./StyledPageGift/DivMargin";
import BodyContainer from "./StyledPageGift/BodyContainer";
import TitleSection from "./StyledPageGift/TitleSection";
import CardContainer from "./StyledPageGift/CardContainer";
import ImageCart from "./StyledPageGift/ImageCart";

const ItemGift = () => {
  return (
    <div>
      <DivContainer width="100%" height="2500px">
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Birthday</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a1} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a2} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Thank You</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a3} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a4} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a5} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Celebration</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a6} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a7} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Summer</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a8} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Back To School</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a9} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a10} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Celebration</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a11} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a12} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a13} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Encouragement</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a14} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a15} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Workplace</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a21} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a17} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
        <DivMargin margintop="50px" marginleft="80px">
          <TitleSection>Celebration</TitleSection>
          <BodyContainer>
            <CardContainer>
              <ImageCart src={a19} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a20} alt="" />
            </CardContainer>
            <CardContainer marginleft="20px">
              <ImageCart src={a22} alt="" />
            </CardContainer>
          </BodyContainer>
        </DivMargin>
      </DivContainer>
    </div>
  );
};

export default ItemGift;
