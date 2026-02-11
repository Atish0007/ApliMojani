
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from './components/Header'
import Home from "./components/pages/Home"
import Services from "./components/pages/Services";
import Process from "./components/pages/Process";
import Sevashetra from "./components/pages/Sevashetra";
import About from "./components/pages/About"
import WhoApply from "./components/pages/WhoApply";
import Problems from "./components/pages/Problems";
import Footer from "./components/Footer";

function App() {
  
const location = useLocation();
  return (
    <>
      <Header/>
      <main className="page-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="Process" element={<Process />} />
                <Route path="Sevashetra" element={<Sevashetra />} />
                <Route path="about" element={<About />} />
                <Route path="whoapply" element={<WhoApply />} />
                <Route path="problems" element={<Problems />}/>
            </Routes>
            {location.pathname === "/" && <Services />}
            {location.pathname === "/" && <Process />}
            {location.pathname === "/" && <Sevashetra />}
            {/* {location.pathname === "/" && <About />}
            {location.pathname === "/" && <WhoApply />}
            {location.pathname === "/" && <Problems />} */}
      </main>
      <Footer />
       
      
    </>
  )
}

export default App
