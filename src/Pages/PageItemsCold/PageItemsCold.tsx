import { useState } from "react";
import imgitem from "../../Images/imagemnue/product-placeholder.png";
import ListMenu from "../../Components/ListMenu/ListMenu";
import LainDiv from "./StyledPageItemsCold/LainDiv";
import Title from "./StyledPageItemsCold/Title";
import GridContainer from "./StyledPageItemsCold/GridContainer";
import HeadMenu from "../Menu/HeadMenu";
import StickyWrapper from "./StyledPageItemsCold/StickyWrapper";
import FlexItems from "./StyledPageItemsCold/FlexItem";
import FormBox from "./StyledPageItemsCold/FormBox";
import DivImage from "./StyledPageItemsCold/DivImage";
import ImageItems from "./StyledPageItemsCold/ImageItems";
import BoxItem from "./StyledPageItemsCold/BoxItem";
import DivTitle from "./StyledPageItemsCold/DivTitle";
const PageItemsCold = () => {
  const [product, setProduct] = useState([
    {
      image: imgitem,
      title: "Cold Brew",
    },
    {
      image: imgitem,
      title: "Raspberry Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Vanilla Sweet Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Salted Caramel Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Chocolate Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Nondairy Vanilla Sweet Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Nondairy Salted Caramel Cream Cold Brew",
    },
    {
      image: imgitem,
      title: "Cold Brew with Nondairy Vanilla Sweet Cream Cold Foam",
    },
    {
      image: imgitem,
      title: "Nondairy Chocolate Cream Cold Brew",
    },
  ]);
  return (
    <div>
      <StickyWrapper>
        <HeadMenu />
      </StickyWrapper>
      <FlexItems>
        <FormBox width="450px" height="900px">
          <ListMenu />
        </FormBox>
        <FormBox width="800px" height="900px" margintop="50px">
          <>
            <Title font="600" color="#475569">
              Menu / Cold Coffee / Cold Brew
            </Title>
            <Title font="700" size="25px" margintop="30px">
              Cold Coffee
            </Title>
            <Title font="700" size="23px" margintop="20px">
              Cold Brew
            </Title>
          </>
          <LainDiv></LainDiv>
          <GridContainer>
            {product.map((item) => (
              <BoxItem>
                <DivImage>
                  <ImageItems src={item.image}/>
                </DivImage>
                <DivTitle>
                  <Title font="600">{item.title}</Title>
                </DivTitle>
              </BoxItem>
            ))}
          </GridContainer>
        </FormBox>
      </FlexItems>
    </div>
  );
};

export default PageItemsCold;
