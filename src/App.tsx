import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PageMain from './Pages/PageMain/PageMain';
import Menu from './Pages/Menu/Menu';
import Rewards from './Pages/Rewards/Rewards';
function App() {

  return (
    <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<PageMain />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/Rewards' element={<Rewards />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
