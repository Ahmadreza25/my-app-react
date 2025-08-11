import ListBtn from "./ListBtn"
import IconFooter from "./IconFooter"
const Footer = () => {
  return (
    <div>
        <footer className="w-[100%] h-[1000px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] mt-[100px] flex items-center justify-center flex-col">
            <div className="w-[100%] h-[450px]">
                <ListBtn />
            </div>
            <div className="w-[1450px] h-[1.5px] bg-slate-400"></div>
            <div className="w-[100%] h-[450px]">
                <IconFooter />
            </div>  
        </footer>
    </div>
  )
}

export default Footer