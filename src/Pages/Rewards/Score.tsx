import a1 from "../../Images/imagerewards/1A.png"
import a2 from "../../Images/imagerewards/2A.png"
import b1 from "../../Images/imagerewards/1B.png"
import b2 from "../../Images/imagerewards/2B.png"
const Score = () => {
  return (
    <div>
        <div className='w-[100%] h-[800px] flex items-center justify-center flex-col'>
            <div className="text-center">
                <h2 className="font-[700] text-[25px]">
                Cash or card, you earn Stars
                </h2>
                <h4 className="font-[500]">
                No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
                </h4>
            </div>
            <div className="flex flex-col mt-[50px]">
                <div className="flex items-center justify-center w-[1200px] h-[300px] ml-[-50px]">
                    <div className="w-[400px]">
                        <div>
                            <h2 className="font-[700] text-[25px]">1★Star per dollar</h2>
                            <p className="font-[500] text-[16px]">Pay as you go</p>
                        </div>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <img src={a1} alt="" className="w-[120px]"/>
                        </div>
                        <div className="ml-[30px]">
                            <h3 className="font-[700] text-[20px]">Scan and pay separately</h3>
                            <h4 className="w-[300px] mt-[10px]">Use cash or credit/debit card at the register.</h4>
                        </div>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <img src={b1} alt="" className="w-[120px]" />
                        </div>
                        <div className="ml-[30px]">
                            <h3 className="font-[700] text-[20px]">Save payment in the app</h3>
                            <h4 className="w-[300px] mt-[10px]">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</h4>
                        </div>
                    </div>
                </div>
                <div className="w-[1000px] h-[1px] bg-slate-700"></div>
                <div className="flex items-center justify-center w-[1400px] h-[300px] ml-[-50px]">
                    <div className="w-[400px]">
                        <div>
                            <h2 className="font-[700] text-[25px]">
                            2★Stars per dollar
                            </h2>
                            <p className="font-[500] text-[16px]">Add funds in the app</p>
                        </div>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <img src={a2} alt="" className="w-[120px]"/>
                        </div>
                        <div className="ml-[30px]">
                            <h3 className="font-[700] text-[20px]">Preload</h3>
                            <h4 className="w-[300px] mt-[10px]">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</h4>
                        </div>
                    </div>
                    <div className="w-[600px] h-[300px] flex items-center">
                        <div>
                            <img src={b2} alt="" className="w-[120px]"/>
                        </div>
                        <div className="ml-[30px]">
                            <h3 className="font-[700] text-[20px]">Register your gift card</h3>
                            <h4 className="w-[300px] mt-[10px]">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Score