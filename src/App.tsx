import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './Components/Header/Header';
function App() {

  return (
    <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/"/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
