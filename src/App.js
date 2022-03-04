import { Routes, Route, } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Footer from './Footer/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Clientele from "./Pages/Clientele";
import Projects from "./Pages/Projects";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import './App.css';



function App() {
  window.onload = function(){
  document.querySelector(".loader").style.display = "none";
}
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={< About/>} />
      <Route path="/Services" element={< Services/>} />
      <Route path="/Clientele" element={< Clientele/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Contact" element={<Contact />} />
      <Route  path="*" element={<h1>404 ErrorPage</h1>} />
    </Routes>
    <Footer/>
  </>
  );
}
export default App;
