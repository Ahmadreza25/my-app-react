import { useState } from "react";

import ListMenu from "../../Components/ListMenu/ListMenu";
import imgitem from "../../Images/imagemnue/product-placeholder.png";
import HeadMenu from "../Menu/HeadMenu";
import StickyWrapper from "./StyledPageOrder/StickyWrapper";
import FormBox from "./StyledPageOrder/FormBox";
import FlexItems from "./StyledPageOrder/FlexItems";
import LainDiv from "./StyledPageOrder/LainDiv";
import ListTitle from "./StyledPageOrder/ListTitles";
import Title from "./StyledPageOrder/Title";
import ListItems from "./StyledPageOrder/ListItems";
import ImageItems from "./StyledPageOrder/ImageItems";
import BoxItem from "./StyledPageOrder/BoxItem";
import DivImage from "./StyledPageOrder/DivImage";
const PageOrder = () => {
  const [product, setProduct] = useState([
    {
      image: imgitem,
      title1: "Brown Sugar",
      title2: "Strato™",
      title3: "Frappuccino®",
      title4: "Blended Beverage",
    },
    {
      image: imgitem,
      title1: "Strawberry Matcha",
      title2: "Strato™",
      title3: "Frappuccino®",
      title4: "Blended Beverage",
    },
    {
      image: imgitem,
      title1: "Salted Caramel",
      title2: "Mocha Strato™ Frappuccino®",
      title3: "Blended Beverage",
    },
  ]);
  return (
    <div>
      <StickyWrapper>
        <HeadMenu />
      </StickyWrapper>
      <FlexItems>
        <FormBox height="1000px">
          <ListMenu />
        </FormBox>
        <FormBox height="1000px" margintop="50px">
          <div>
            <Title color="#475569" font="600">
              Menu / Frappuccino® Blended Beverage / Strato Frappuccino®
            </Title>
            <Title
              margintop="30px"
              font="700"
              size="23px"
              className="mt-[30px] font-[700] text-[23px]"
            >
              Frappuccino® Blended Beverage
            </Title>
            <Title margintop="30px">Strato Frappuccino®</Title>
          </div>
          <LainDiv></LainDiv>
          <FlexItems margintop="100px">
            {product.map((item) => (
              <BoxItem>
                <DivImage>
                  <ImageItems src={item.image} alt="" />
                </DivImage>
                <FlexItems width="100%" height="200px" justify="center">
                  <ListTitle>
                    <ListItems>{item.title1}</ListItems>
                    <ListItems>{item.title2}</ListItems>
                    <ListItems>{item.title3}</ListItems>
                    <ListItems>{item.title4}</ListItems>
                  </ListTitle>
                </FlexItems>
              </BoxItem>
            ))}
          </FlexItems>
        </FormBox>
      </FlexItems>
    </div>
  );
};

export default PageOrder;
