import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Rewards from './Pages/Rewards/Rewards';
import PageMain from './Pages/PageMain/PageMain';
import PageGift from './Pages/PageGift/PageGift';
import PageSignIn from './Pages/PageSignIn/PageSignIn';
function App() {

  return (
    <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<PageMain />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/Rewards' element={<Rewards />}/>
      <Route path='/Gift' element={<PageGift/>} />
      <Route path='/signin' element={<PageSignIn />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
