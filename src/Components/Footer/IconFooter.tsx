import a from "../../Images/iconsfooter/A.png";
import b from "../../Images/iconsfooter/B.png";
import c from "../../Images/iconsfooter/C.png";
import d from "../../Images/iconsfooter/D.png";
import e from "../../Images/iconsfooter/E.png";
import f from "../../Images/iconsfooter/F.png";
import Icon from "./StyledFooter/Icon";
import ListIcon from "./StyledFooter/ListIcon";
import MediaList from "./StyledFooter/MediaList";
import PrivacySettings from "./StyledFooter/PrivacySettings";
import BtnPrivacy from "./StyledFooter/BtnPrivacy";
const IconFooter = () => {
  return (
    <>
      <MediaList>
        <ListIcon>
          <Icon src={a} alt="Icon" />
          <Icon src={b} alt="Icon" />
          <Icon src={c} alt="Icon" />
          <Icon src={d} alt="Icon" />
          <Icon src={e} alt="Icon" />
          <Icon src={f} alt="Icon" />
        </ListIcon>
        <PrivacySettings>
          <BtnPrivacy width="60px">Privacy </BtnPrivacy>
          <BtnPrivacy width="240px">Consumer Health Privacy Notice</BtnPrivacy>
          <BtnPrivacy width="100px">Terms of Use</BtnPrivacy>
          <BtnPrivacy width="290px">
            Do Not Share My Personal Information
          </BtnPrivacy>
          <BtnPrivacy width="160px">CA Supply Chain Act</BtnPrivacy>
          <BtnPrivacy width="90px">Accessibility</BtnPrivacy>
          <BtnPrivacy width="140px">Cookie Preferences</BtnPrivacy>
        </PrivacySettings>
      </MediaList>
    </>
  );
};

export default IconFooter;
