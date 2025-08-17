import Container from "./StyledCreateAccount/Container";
import FlexBox from "./StyledCreateAccount/FlexBox";
import DivText from "./StyledCreateAccount/DivText";
import DivMargin from "./StyledCreateAccount/DivMargin";
import Box from "./StyledCreateAccount/Box";
import Badge from "./StyledCreateAccount/Badge";
import Title from "./StyledCreateAccount/Title";
import FormBox from "./StyledCreateAccount/FormBox";
import TextInput from "./StyledCreateAccount/TextInput";
import CreateAccountButton from "./StyledCreateAccount/CreateAccountButton";
import Description from "./StyledCreateAccount/Description";
import FlexItems from "./StyledCreateAccount/FlexItems";
import CheckInput from "./StyledCreateAccount/CheckInput";
const PageCreateAccount = () => {
  return (
    <div>
      <Container>
        <FlexBox>
          <DivText>
            <Title font="700" text="25px">
              Create an account
            </Title>
            <Title text="17px" font="700" margintop="20px" color="#475569">
              Starbucks® Rewards
            </Title>
            <Title width="550px" color="#475569" margintop="20px">
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and
              moremore.
            </Title>
          </DivText>
          <Box>
            <FormBox width="450px" height="1050px">
              <Title>* indicates required field</Title>
              <DivMargin margintop="50px">
                <Title font="700" text="18px">
                  Personal Information
                </Title>
                <DivMargin margintop="20px">
                  <Title>
                    First name<Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                </DivMargin>
                <DivMargin margintop="20px">
                  <Title>
                    Last name<Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                </DivMargin>
              </DivMargin>
              <DivMargin margintop="50px">
                <Title font="700" text="18px">
                  Account Security
                </Title>
                <DivMargin margintop="20px">
                  <Title>
                    Email address<Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                  <Title>This will be your username</Title>
                </DivMargin>
                <DivMargin margintop="20px">
                  <Title>
                    Password<Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                  <Title className="w-[350px]">
                    Create a password 8 to 25 characters long that includes at
                    least 1 uppercase and 1 lowercase letter, 1 number and 1
                    special character like an exclamation point or asterisk.
                  </Title>
                </DivMargin>
              </DivMargin>
              <DivMargin margintop="30px">
                <Description>Already have a Starbucks gift card?</Description>
                <Title margintop="20px" color="#475569">
                  Collect more Stars & Earn Rewards
                </Title>
                <Title margintop="20px">
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
                </Title>
                <FlexItems margintop="30px">
                  <CheckInput type="checkbox" className="w-[30px] h-[30px]" />
                  <Title marginleft="20px">
                    Yes, I’d like email from Starbucks
                  </Title>
                </FlexItems>
              </DivMargin>
              <DivMargin marginleft="230px" margintop="30px">
                <CreateAccountButton className="w-[160px] h-[50px] text-slate-50 bg-green-700 text-[18px] font-[700] rounded-[50px]">
                  Create account
                </CreateAccountButton>
              </DivMargin>
            </FormBox>
          </Box>
        </FlexBox>
      </Container>
    </div>
  );
};

export default PageCreateAccount;
