import img1 from "../../Images/imagerewards/1.jpg"
import img2 from "../../Images/imagerewards/2.jpg"
import img3 from "../../Images/imagerewards/3.jpg"
import DivMargin from "./StyledRewards/DivMargin"
import ImageItem from "./StyledRewards/ImageItem"
import MoreButton from "./StyledRewards/MoreButton"
import TitleItem from "./StyledRewards/TitleItem"
import DivImg from "./StyledRewards/DivImg"
import BodyContainer from "./StyledRewards/BodyContainer"
const Benefits = () => {
  return (
    <div>
        <div className="flex items-center justify-center flex-col mt-[100px]">
            <div className="flex items-center flex-col">
                <TitleItem font="700" size="35px">
                Endless Extras
                </TitleItem>
                <p className="mt-[50px] w-[660px] text-center font-[600]">
                Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <BodyContainer>
                    <DivImg>
                        <ImageItem src={img1} alt="" />
                    </DivImg>
                    <DivMargin margintop="20px">
                        <TitleItem font="600" size="20px">
                            Fun freebies
                        </TitleItem>
                        <TitleItem font="500" margintop="10px">
                            Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
                        </TitleItem>
                        <MoreButton>
                        Learn more
                        </MoreButton>
                    </DivMargin>
                </BodyContainer>
                <BodyContainer>
                    <DivImg>
                        <ImageItem src={img2} alt="" />
                    </DivImg>
                    <DivMargin margintop="20px">
                        <TitleItem font="600" size="20px">
                            Order & pay ahead
                        </TitleItem>
                        <TitleItem font="500" margintop="10px">
                            Master the art of ordering ahead with saved favorites and payment methods.
                        </TitleItem>
                        <MoreButton>
                        Learn more
                        </MoreButton>
                    </DivMargin>
                </BodyContainer>
                <BodyContainer>
                    <DivImg>
                        <ImageItem src={img3} alt="" />
                    </DivImg>
                    <DivMargin margintop="20px">
                        <TitleItem font="600" size="20px">
                            Get to free faster
                        </TitleItem>
                        <TitleItem font="500" margintop="10px">
                            Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                        </TitleItem>
                        <MoreButton>
                        Learn more
                        </MoreButton>
                    </DivMargin>
                </BodyContainer>
            </div>
        </div>
    </div>
  )
}

export default Benefits