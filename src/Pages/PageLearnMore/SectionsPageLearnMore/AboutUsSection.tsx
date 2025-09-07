import DivMargin from "./StyledSections/DivMargin";
import i1 from "../../../Images/icons/download.png";
import i2 from "../../../Images/icons/facebook.png";
import i3 from "../../../Images/icons/link.png";
import i4 from "../../../Images/icons/linkedin.png";
import image1 from "../../../Images/imageLearnMore/image1.png";
import image2 from "../../../Images/imageLearnMore/image2.png";
import image6 from "../../../Images/imageLearnMore/image6.png";
import image7 from "../../../Images/imageLearnMore/image7.png";
import FlexItems from "./StyledSections/FlexItems";
import FormBox from "./StyledSections/FormBox";
import ContainerColumn from "./StyledSections/ContainerColumn";
import CenteredBox from "./StyledSections/CenteredBox";
import DivIcon from "./StyledSections/DivIcon";
import Icon from "./StyledSections/Icon";
import ButtonDownload from "./StyledSections/ButtonDownload";
import TimeBar from "./StyledSections/TimeBar";
import Line from "./StyledSections/Line";
import Title from "./StyledSections/Title";
import ColorSpan from "./StyledSections/ColorSpan";
import Image from "./StyledSections/Image";
import DivText from "./StyledSections/DivText";
import NumberedList from "./StyledSections/NumberedList";
import ListItem from "./StyledSections/ListItem";
import CenteredSection from "./StyledSections/CenteredSection";
import ButtonMerch from "./StyledSections/ButtonMerch";
const AboutUsSection = () => {
  return (
    <div>
      <DivMargin margintop="100px">
        <FlexItems width="1500px" height="2500px">
          <ContainerColumn width="500px" height="2500px">
            <FlexItems className="flex items-center">
              <DivIcon>
                <Icon src={i2} alt="" width="20px" />
              </DivIcon>
              <DivIcon>
                <Icon src={i3} alt="" width="20px" />
              </DivIcon>
              <DivIcon>
                <Icon src={i4} alt="" width="20px" />
              </DivIcon>
            </FlexItems>
            <DivMargin margintop="20px">
              <ButtonDownload className="flex items-center font-[300]">
                Download Assets{" "}
                <Icon src={i1} alt="" width="18px" marginleft="20px" />
              </ButtonDownload>
            </DivMargin>
          </ContainerColumn>
          <FormBox
            width="1000px"
            height="2500px"
            className="w-[1000px] h-[2500px] "
          >
            <TimeBar>
              <Title font="300" size="15px" color="#64748b">
                3 min read
              </Title>
              <Line width="1px" height="100%" bg="#cbd5e1" marginleft="30px" marginright="30px" />
              <Title font="300" size="15px" color="#64748b">
                July 7, 2025
              </Title>
            </TimeBar>
            <FlexItems margintop="50px" width="700px" height="400px">
              <FormBox width="400px" height="400px">
                <Title font="600" size="20px" width="320px">
                  Shadé Akanbi found herself in a creative rut during the midst
                  of the pandemic. As a{" "}
                  <ColorSpan>print and textile designer</ColorSpan> who draws
                  inspiration from global travel, she found the confinement of
                  COVID creatively stifling. She started a “Pattern of the Dae”
                  daily art practice and posted each one to her followers on
                  social media.
                </Title>
                T
              </FormBox>
              <FormBox width="300px" height="400px">
                <Image width="300px" height="100%" src={image1} />
              </FormBox>
            </FlexItems>
            <FormBox width="700px" height="300px" margintop="50px">
              <Title font="500" size="18px">
                “So much of what I create comes from my cultural background and
                my travels,” Akanbi said. “During quarantine, I needed to keep
                my creative muscles toned and moving.”
              </Title>
              <Title margintop="30px" font="600" size="17px">
                She gave herself three rules:
              </Title>
              <NumberedList>
                <ListItem>Once I start sketching, I have to finish. </ListItem>
                <ListItem margintop="10px">I do one every day. </ListItem>
                <ListItem margintop="10px">There are no mistakes. </ListItem>
              </NumberedList>
            </FormBox>
            <CenteredBox width="700px" height="150px">
              <FormBox width="1px" height="100%" bgColor="#39414F"></FormBox>
              <FormBox width="700px" height="150px">
                <Title
                  margintop="-100px"
                  font="900"
                  size="8rem"
                  color="#047857"
                >
                  ،،
                </Title>
                <DivText>
                  <Title font="600" size="18px">
                    “Art has always been my anchor. It was a grounding
                    exercise.”
                  </Title>
                  <Title margintop="20px" size="13px">
                    Shadé Akanbi
                  </Title>
                </DivText>
              </FormBox>
            </CenteredBox>
            <FormBox margintop="50px" width="700px" height="400px">
              <Title font="600" size="18px">
                Each day, Akanbi opened a new page of her sketchbook. She would
                start with a ruler for geometric patterns but would often just
                keep going freehand – filling both sides with colorful patterns
                using paint pens, gouache and markers.
              </Title>
              <Title margintop="30px" font="600" size="18px">
                “People got really into it and started tagging me with their own
                patterns,” she said. “It created a community.”
              </Title>
              <Title margintop="30px" font="600" size="18px">
                Akanbi, who is second-generation Nigerian American, grew up in
                the San Francisco Bay Area in a home filled with colorful
                textiles and patterns. Her first trip to Nigeria as a teenager
                was transformative, and she has returned to the continent time
                and time again.
              </Title>
            </FormBox>
            <FlexItems width="700px" height="700px">
              <FormBox width="350px" height="100%">
                <Image width="100%" height="100%" src={image2} />
              </FormBox>
              <FormBox width="350px" height="100%">
                <FormBox bgColor="#ffedd5" width="100%" height="550px">
                  <DivMargin marginleft="50px">
                    <Title font="900" size="8rem" color="#047857">
                      ،،
                    </Title>
                    <Title width="250px" font="300" size="25px" color="#39414F">
                      I love going back to the [African] continent – I’ve
                      traveled to the west, east, north and south,” she said.
                      “We’re more alike than different, and art connects us.”{" "}
                    </Title>
                  </DivMargin>
                </FormBox>
              </FormBox>
            </FlexItems>
            <FormBox width="700px" height="500px" margintop="50px">
              <Title margintop="20px" font="600" size="18px">
                With every visit, she spent time in markets and workshops and
                saw textile weavers and beaders at work. She watched as they
                created patterns that go back hundreds of years, passed down
                over the generations by conversation and connection.{" "}
              </Title>
              <Title margintop="30px" font="600" size="18px">
                “In my art, there are so many little pieces of me and stories of
                places I’ve been. I hope this collection sparks the curiosity to
                travel more or taps into a memory, like it does for me,” she
                said.{" "}
              </Title>
              <Title margintop="30px" font="600" size="18px">
                Akanbi’s collection of drinkware is available at participating
                U.S. stores for a limited time, while supplies last.{" "}
              </Title>
            </FormBox>
          </FormBox>
        </FlexItems>
        <CenteredSection>
          <Title font="900" size="45px" margintop="50px" marginleft="100px" color="#052e16">
            More like this
          </Title>
          <FlexItems width="100%" height="100%">
            <ContainerColumn width="400px" height="400px" marginleft="100xp" className="w-[400px] h-[400px] flex items-center flex-col ml-[100px]">
              <FormBox width="100%" height="250px">
                <Image width="100%" height="100%" src={image6} alt=""/>
              </FormBox>
              <FormBox width="100%" height="150px">
                <ButtonMerch>
                  Cups & Merch
                </ButtonMerch>
                <Title font="700" margintop="20px">
                  New Starbucks Fall Merchandise{" "}
                </Title>
                <Title font="300" margintop="20px">3 min read</Title>
              </FormBox>
            </ContainerColumn>
            <ContainerColumn width="400px" height="400px" marginleft="50px">
              <FormBox width="100%" height="250px">
                <Image width="100%" height="100%" src={image7} alt="" />
              </FormBox>
              <FormBox width="100%" height="150px">
                <ButtonMerch>
                  Cups & Merch
                </ButtonMerch>
                <Title font="700" margintop="20px">
                  From sketchbook to Starbucks: The story behind the newest
                  artist collaboration merch{" "}
                </Title>
                <Title margintop="20px" font="300">3 min read</Title>
              </FormBox>
            </ContainerColumn>
          </FlexItems>
        </CenteredSection>
      </DivMargin>
    </div>
  );
};

export default AboutUsSection;
