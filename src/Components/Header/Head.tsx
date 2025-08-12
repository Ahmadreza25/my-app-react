import makan from "../../Images/icons/makan.png"

const Head = () => {
  return (
    <div>
        <div className="flex items-center justify-between mr-[20px]">
            <div> 
                <button className="flex items-center hover:text-green-700 mr-[20px]">
                    <img src={makan} alt="" className="w-[20px] mr-[10px]"/>
                    <p className="font-medium">Find a store</p>
                </button>
            </div>
            <div> 
                <button 
                    className="
                    w-[80px] h-[32px] border-[1px] 
                    border-slate-900 rounded-[50px] 
                    font-medium text-[14px] mr-[20px] 
                    hover:bg-amber-50 
                    ">
                    sign in
                </button>
            </div>
            <div>
                <button className="                    
                     w-[100px] h-[30px] border-[1px] 
                    border-slate-900 rounded-[50px] 
                    font-medium text-[14px] mr-[20px] 
                    hover:bg-slate-700 text-slate-100 bg-slate-900">
                        join now
                </button>
            </div>
        </div>  
    </div>
  )
}

export default Head