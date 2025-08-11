import DivList from "./StyledFooter/DivList"
import Li from "./StyledFooter/Li"
const ListBtn = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <DivList>
                <h1 className="font-semibold text-[18px]">
                    About Us
                </h1>
                <ul className="mt-[20px]">
                    <Li>Our Company</Li>
                    <Li>Our Coffee</Li>
                    <Li>About Starbucks</Li>
                    <Li>Starbucks Archive</Li>
                    <Li>Investor Relations</Li>
                    <Li>Customer Service</Li>
                    <Li>Contact Us</Li>
                </ul>
            </DivList>
            <DivList>
                <h1 className="font-semibold text-[18px]">
                    Careers
                </h1>
                <ul className="mt-[20px]">
                    <Li>Culture and Values</Li>
                    <Li>Belonging at Starbucks</Li>
                    <Li>College Achievement Plan</Li>
                    <Li>Alumni Community</Li>
                    <Li>U.S. Careers</Li>
                    <Li>International Careers</Li>
                </ul>
            </DivList>
            <DivList>
                <h1 className="font-semibold text-[18px]">
                    Social Impact
                </h1>
                <ul className="mt-[20px]">
                    <Li>Communities</Li>
                    <Li>Starbucks Foundation</Li>
                    <Li>Sustainability</Li>
                    <Li>Environmental and Social Impact Reporting</Li>
                </ul>
            </DivList>
            <DivList>
                <h1 className="font-semibold text-[18px]">
                    For Business Partners
                </h1>
                <ul className="mt-[20px]">
                    <Li>Landlord Support Center</Li>
                    <Li>Suppliers</Li>
                    <Li>Corporate Gift Card Sales</Li>
                    <Li>Office and Foodservice Coffee</Li>
                </ul>
            </DivList>
            <DivList>
                <h1 className="font-semibold text-[18px]">
                    Order and Pick Up
                </h1>
                <ul className="mt-[20px]">
                    <Li>Order on the App</Li>
                    <Li>Order on the Web</Li>
                    <Li>Delivery</Li>
                    <Li>Order and Pick Up Options</Li>
                    <Li>Explore and Find Coffee for Home</Li>
                </ul>
            </DivList>
        </div>
    </div>
  )
}

export default ListBtn
