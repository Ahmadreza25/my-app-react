import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Rewards from './Pages/Rewards/Rewards';
import PageMain from './Pages/PageMain/PageMain';
import PageGift from './Pages/PageGift/PageGift';
import PageSignIn from './Pages/PageSignIn/PageSignIn';
import PageCreateAccount from './Pages/PageCreateAccount/PageCreateAccount';
import PageOrder from './Pages/PageOrder/PageOrder';
import PageItemsCold from './Pages/PageItemsCold/PageItemsCold';
import PageLearnMore from './Pages/PageLearnMore/PageLearnMore';
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
      <Route path='/createaccount' element={<PageCreateAccount />}/>
      <Route path='/order' element={<PageOrder />}/>
      <Route path='/itemscold'element={<PageItemsCold />}/>
      <Route path='/learnmore' element={<PageLearnMore />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
