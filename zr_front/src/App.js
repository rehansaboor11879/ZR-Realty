import './App.css';
import Header from './homePage/Header/Header.js';
import Video from './homePage/vision/videoWIthText.js';
import Services from './homePage/Services/services.js';
import ProjectSlider from './homePage/projectSlider/Projects';
import { Route, Routes } from 'react-router-dom';
import Projects from './projects/ProjectsDetail';
import Team from './team/Team';
import Blog from './blog/Blog';
import BuyersGuide from './buyerGuide/BuyersGuide';
import AboutUs from './aboutUs/AboutUs';
import ContactUs from './contactUs/ContactUs';
import Footer from './footer/Footer';
function App() {
  return (
    <>
      <Header />,
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <Video /> <Services /> <ProjectSlider /> <Services />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Video /> <Services /> <ProjectSlider />
            </>
          }
        />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Buyer's Guide" element={<BuyersGuide />} />
        <Route path="/About Us" element={<AboutUs />} />
        <Route path="/Contact Us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
