import { Routes, Route } from "react-router-dom";
import Hirenow from "./pages/Hirenow";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Nopage from "./pages/Nopage";
import Footer from "./components/Footer"
import Contact from './pages/Contact'
import { Box } from "@mui/material";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/hirenow" element={<Hirenow />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
       
        <Route path="*" element={<Nopage />} />
      </Routes>
      <div >
        <Box >
        <Footer/>

        </Box>
     

      </div>
     
    </div>
  );
};

export default App;
