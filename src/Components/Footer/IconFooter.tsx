import a from "../../Images/iconsfooter/A.png"
import b from "../../Images/iconsfooter/B.png"
import c from "../../Images/iconsfooter/C.png"
import d from "../../Images/iconsfooter/D.png"
import e from "../../Images/iconsfooter/E.png"
import f from "../../Images/iconsfooter/F.png"
const IconFooter = () => {
  return (
    <div>
        <div className="w-[450px] h-[450px] ml-[70px]">
            <div className="flex items-center mt-[50px] ">
                <img src={a} alt="" className="w-[35px] m-[10px]" />
                <img src={b} alt="" className="w-[35px] m-[10px]" />
                <img src={c} alt="" className="w-[35px] m-[10px]" />
                <img src={d} alt="" className="w-[35px] m-[10px]"/>
                <img src={e} alt="" className="w-[35px] m-[10px]"/>
                <img src={f} alt="" className="w-[35px] m-[10px]"/>
            </div>
            <div className="mt-[30px]">
                <ul>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[110px]">Privacy Notice</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[240px]">Consumer Health Privacy Notice</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[100px]">Terms of Use</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[290px]">Do Not Share My Personal Information</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[160px]">CA Supply Chain Act</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[90px]">Accessibility</li>
                    <li className="font-semibold mt-[15px] text-slate-800 hover:border-b-2 hover:border-slate-800 w-[140px]">Cookie Preferences</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default IconFooter