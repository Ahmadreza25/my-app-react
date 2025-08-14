import a1 from "../../Images/imagerewards/1A.png"
import a2 from "../../Images/imagerewards/2A.png"
import b1 from "../../Images/imagerewards/1B.png"
import b2 from "../../Images/imagerewards/2B.png"
import LayoutBox from "./StyledRewards/LayoutBox"
import TitleItem from "./StyledRewards/TitleItem"
import DivMargin from "./StyledRewards/DivMargin"
import ImageItem from "./StyledRewards/ImageItem"
const Score = () => {
  return (
    <div>
        <div className='w-[100%] h-[800px] flex items-center justify-center flex-col'>
            <div className="text-center">
                <TitleItem font="700" size="25px">
                Cash or card, you earn Stars
                </TitleItem>
                <TitleItem font="500">
                No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
                </TitleItem>
            </div>
            <div className="flex flex-col mt-[50px]">
                <div className="flex items-center justify-center w-[1200px] h-[300px] ml-[-50px]">
                    <LayoutBox width="400px">
                        <TitleItem font="700" size="25px">1★Star per dollar</TitleItem>
                        <TitleItem font="500" size="16px" >Pay as you go</TitleItem>
                    </LayoutBox>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <ImageItem width="120px" src={a1} alt="Icon"/>
                        </div>
                        <DivMargin marginleft="30px">
                            <TitleItem font="700" size="20px">Scan and pay separately</TitleItem>
                            <h4 className="w-[300px] mt-[10px]">Use cash or credit/debit card at the register.</h4>
                        </DivMargin>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <ImageItem width="120px" src={b1} alt="Icon"/>
                        </div>
                        <DivMargin marginleft="30px">
                            <TitleItem font="700" size="20px">Save payment in the app</TitleItem>
                            <h4 className="w-[300px] mt-[10px]">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</h4>
                        </DivMargin>
                    </div>
                </div>
                <div className="w-[1000px] h-[1px] bg-slate-700"></div>
                <div className="flex items-center justify-center w-[1400px] h-[300px] ml-[-50px]">
                    <LayoutBox width="400px">
                            <TitleItem font="700" size="25px">
                            2★Stars per dollar
                            </TitleItem>
                            <TitleItem font="500" size="16px">Add funds in the app</TitleItem>
                    </LayoutBox>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <ImageItem width="120px" src={a2} alt="Icon"/>
                        </div>
                        <DivMargin marginleft="30px">
                            <TitleItem font="700" size="20px">Preload</TitleItem>
                            <h4 className="w-[300px] mt-[10px]">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</h4>
                        </DivMargin>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <ImageItem width="120px" src={b2} alt="Icon"/>
                        </div>
                        <DivMargin marginleft="30px">
                            <TitleItem font="700" size="20px">Register your gift card</TitleItem>
                            <h4 className="w-[300px] mt-[10px]">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</h4>
                        </DivMargin>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Score