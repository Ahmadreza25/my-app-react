import { Link, useLocation } from "react-router-dom";
import makan from "../../Images/icons/makan.png";
import BtnJoin from "./StyledHeader/BtnJoin";
import BtnSignIn from "./StyledHeader/BtnSignIn";
import NavBar from "./StyledHeader/NavBar";
import Map from "./StyledHeader/Map";
import IconMap from "./StyledHeader/IconMap";
import TitleMap from "./StyledHeader/TitleMap";

const Head = () => {
  const location = useLocation();

  const pagehidd = ["/signin", "/createaccount"];

  if (pagehidd.includes(location.pathname)) {
    return null;
  }
  return (
    <div>
      {
        <NavBar>
          <>
            <Map>
              <IconMap src={makan} alt="Map" />
              <TitleMap>Find a store</TitleMap>
            </Map>
          </>
          <>
            <Link to="/signin">
              <BtnSignIn>sign in</BtnSignIn>
            </Link>
          </>
          <>
            <Link to="/createaccount">
              <BtnJoin>join now</BtnJoin>
            </Link>
          </>
        </NavBar>
      }
    </div>
  );
};

export default Head;
