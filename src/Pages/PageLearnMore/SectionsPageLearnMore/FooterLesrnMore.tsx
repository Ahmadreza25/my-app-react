import i1 from "../../../Images/icons/Flash.png";
import i2 from "../../../Images/icons/instagram.png";
import i3 from "../../../Images/icons/link2.png";
import i4 from "../../../Images/icons/tik-tok.png";
import i5 from "../../../Images/icons/youtube.png";
import logo from "../../../Images/logo/logo-header.png";
import CenteredBox from "./StyledSections/CenteredBox";
import FormBox from "./StyledSections/FormBox";
import FlexItems from "./StyledSections/FlexItems";
import DivMargin from "./StyledSections/DivMargin";
import Title from "./StyledSections/Title";
import Icon from "./StyledSections/Icon";
import BoxIcon from "./StyledSections/BoxIcon";
import LinkPress from "./StyledSections/LinkPress";
import Line from "./StyledSections/Line";
import Image from "./StyledSections/Image";
import ListTab from "./StyledSections/ListTab";
import TabItem from "./StyledSections/TabItem";
import BtnSignUp from "./StyledSections/BtnSignUp";
import AddressInput from "./StyledSections/AddressInput";
import PressList from "./StyledSections/PressList";
import ShortcutKey from "./StyledSections/ShortcutKey";
import RegistrationSection from "./StyledSections/RegistrationSection";
import PrivacySection from "./StyledSections/PrivacySection";
import PrivacyButton from "./StyledSections/PrivacyButton";
import Media from "./StyledSections/Media";
import Circle from "./StyledSections/Circle";
import CompanyTitle from "./StyledSections/CompanyTitle";
import Wrapper from "./StyledSections/Wrapper";
const FooterLesrnMore = () => {
  return (
    <div>
      <Wrapper>
        <CenteredBox width="100%" height="200px">
          <CenteredBox>
            <FormBox width="200px">
              <CompanyTitle>THE STARBUCHS COFFEE COMPANY</CompanyTitle>
            </FormBox>
            <FlexItems width="300px" marginleft="50px">
              <Circle>
                <Icon width="20px" src={i1} alt="" />
              </Circle>
              <DivMargin marginleft="10px">
                <Title font="600" color="#f1f5f9">
                  Our Values & Commitments
                </Title>
              </DivMargin>
            </FlexItems>
          </CenteredBox>
        </CenteredBox>
        <Media>
          <CenteredBox width="100%" height="400px">
            <FormBox width="40%" height="400px" marginright="20px">
              <Title font="800" size="30px" color="#052e16">
                Stay In Touch
              </Title>
              <Title
                margintop="30px"
                width="600px"
                font="600"
                size="20px"
                color="#052e16"
              >
                Subscribe to all the latest Starbucks stories and news delivered
                right to your inbox.
              </Title>
              <RegistrationSection>
                <Title font="700" color="#1e293b">
                  Email Address
                </Title>
                <FlexItems margintop="10px">
                  <AddressInput type="text" />
                  <DivMargin marginleft="20px">
                    <BtnSignUp>Sign Up</BtnSignUp>
                  </DivMargin>
                </FlexItems>
              </RegistrationSection>
              <FlexItems margintop="50px">
                <BoxIcon>
                  <Icon width="18px" src={i2} alt="" />
                </BoxIcon>
                <BoxIcon marginleft="20px">
                  <Icon width="18px" src={i3} alt="" />
                </BoxIcon>
                <BoxIcon marginleft="20px">
                  <Icon width="18px" src={i4} alt="" />
                </BoxIcon>
                <BoxIcon marginleft="20px">
                  <Icon width="18px" src={i5} alt="" />
                </BoxIcon>
              </FlexItems>
            </FormBox>
            <FormBox width="40%" height="400px" marginleft="50px">
              <Title font="800" size="30px" color="#052e16">
                Press Center
              </Title>
              <Title
                margintop="30px"
                width="600px"
                font="600"
                size="20px"
                color="#052e16"
              >
                All the latest company news and leadership perspectives.
              </Title>
              <DivMargin margintop="50px">
                <PressList>
                  <LinkPress width="110px">Press Releases</LinkPress>
                  <LinkPress width="120px" margintop="10px">
                    Company News
                  </LinkPress>
                  <LinkPress width="195px" margintop="10px">
                    Starbucks For The Record
                  </LinkPress>
                  <LinkPress width="85px" margintop="10px">
                    Leadership
                  </LinkPress>
                </PressList>
              </DivMargin>
            </FormBox>
          </CenteredBox>
          <CenteredBox width="100%" height="100px">
            <Line width="600px" height="1px" bg="#0f172a" />
            <Image width="70px" src={logo} alt="" />
            <Line width="600px" height="1px" bg="#0f172a" />
          </CenteredBox>
          <DivMargin margintop="20px">
            <ShortcutKey width="200px" height="50px">
              Starbucks.com
            </ShortcutKey>
            <ShortcutKey width="180px" height="50px">
              Career Center
            </ShortcutKey>
            <ShortcutKey width="130px" height="50px">
              Reserve
            </ShortcutKey>
            <ShortcutKey width="130px" height="50px">
              At Home
            </ShortcutKey>
          </DivMargin>
          <CenteredBox width="100%" height="200px" margintop="50px">
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                Canada
              </Title>
              <ListTab margintop="30px">
                <TabItem>English</TabItem>
                <TabItem margintop="20px">Français</TabItem>
              </ListTab>
            </FormBox>
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                USA
              </Title>
              <ListTab margintop="30px">
                <TabItem>English</TabItem>
              </ListTab>
            </FormBox>
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                EMEA
              </Title>
              <ListTab margintop="30px">
                <TabItem>English</TabItem>
              </ListTab>
            </FormBox>
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                Latin America
              </Title>
              <ListTab margintop="30px">
                <TabItem>English</TabItem>
                <TabItem margintop="20px">Español</TabItem>
                <TabItem margintop="20px">Português</TabItem>
              </ListTab>
            </FormBox>
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                Asia
              </Title>
              <ListTab margintop="30px">
                <TabItem>English</TabItem>
              </ListTab>
            </FormBox>
            <FormBox width="200px" height="200px">
              <Title font="700" color="#1e293b">
                Japan
              </Title>
              <ListTab margintop="30px">
                <TabItem>日本語</TabItem>
              </ListTab>
            </FormBox>
          </CenteredBox>
          <PrivacySection>
            <PrivacyButton width="110px">Starbucks.com</PrivacyButton>
            <PrivacyButton width="110px">Accessibility</PrivacyButton>
            <PrivacyButton width="110px">Privacy Notice</PrivacyButton>
            <PrivacyButton width="300px">
              Do Not Share My Personal Information
            </PrivacyButton>
            <PrivacyButton width="150px">Cookie Preferences</PrivacyButton>
            <Title font="400">© 2025 Starbucks Coffee Company</Title>
          </PrivacySection>
        </Media>
      </Wrapper>
    </div>
  );
};

export default FooterLesrnMore;
