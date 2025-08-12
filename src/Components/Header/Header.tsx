import Logo from "./Logo"
import Head from "./Head"

const Header = () => {
  return (
    <div>
        <header className='w-[100%] h-[90px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] flex items-center justify-between'>
            <div>
                <Logo />
            </div>
            <div>
                <Head />
            </div>
        </header> 
    </div>
  )
}

export default Header