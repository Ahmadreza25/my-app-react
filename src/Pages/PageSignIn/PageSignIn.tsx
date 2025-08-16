import Container from "./StyledPageSignIn/Container";
import FlexBox from "./StyledPageSignIn/FlexBox";
import Title from "./StyledPageSignIn/Title";
import Box from "./StyledPageSignIn/Box";
import FormBox from "./StyledPageSignIn/FormBox";
import DivMargin from "./StyledPageSignIn/DivMargin";
import Badge from "./StyledPageSignIn/Badge";
import TextInput from "./StyledPageSignIn/TextInput";
import FlexItems from "./StyledPageSignIn/FlexItems";
import CheckInput from "./StyledPageSignIn/CheckInput";
import SignInButton from "./StyledPageSignIn/SignInButton";
import DivTexts from "./StyledPageSignIn/DivTexts";
import Description from "./StyledPageSignIn/Description";
const PageSignIn = () => {
  return (
    <div>
      <Container>
        <FlexBox>
          <Title font="700" text="25px">
            Sign in or create an account
          </Title>
          <Box>
            <FormBox width="500px" height="550px">
              <Title>* indicates required field</Title>
              <DivMargin margintop="50px">
                <DivMargin margintop="10px">
                  <Title>
                    UserName
                    <Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                </DivMargin>
                <DivMargin margintop="30px">
                  <Title>
                    Password
                    <Badge>*</Badge>
                  </Title>
                  <TextInput type="text" />
                </DivMargin>
              </DivMargin>
              <FlexItems margintop="30px">
                <DivMargin marginleft="10px">
                  <CheckInput type="checkbox" />
                </DivMargin>
                <DivMargin marginleft="20px">
                  <Title>
                    Keep me signed in.
                    <Badge>Details</Badge>
                  </Title>
                </DivMargin>
              </FlexItems>
              <DivTexts>
                <Description>Forgot your username?</Description>
                <Description margintop="10px">
                  Forgot your password?
                </Description>
              </DivTexts>
              <DivMargin marginleft="380px" margintop="50px">
                <SignInButton>Sign in</SignInButton>
              </DivMargin>
            </FormBox>
          </Box>
        </FlexBox>
      </Container>
    </div>
  );
};

export default PageSignIn;
