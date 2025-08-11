import ListBtn from "./ListBtn"
import IconFooter from "./IconFooter"
import FooterTag from "./StyledFooter/FooterStayle"
import DivBox from "./StyledFooter/DivBox"
const Footer = () => {
  return (
    <div>
        <FooterTag>
            <DivBox>
                <ListBtn />
            </DivBox>
            <div className="w-[1450px] h-[1.5px] bg-slate-400"></div>
            <DivBox>
                <IconFooter />
            </DivBox>  
        </FooterTag>
    </div>
  )
}

export default Footer