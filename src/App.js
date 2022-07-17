import React from "react";
import Navbar from './components/navbar/Navbar';
import LandingPage from "./components/landing-page/LandingPage";
import TourContainer from "./components/tours/TourContainer";
import Footer from "./components/footer/Footer";
import IntroSection from "./components/intro-section/IntroSection";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
   <React.Fragment>
     <Navbar />
     <LandingPage />
     <IntroSection />
     <TourContainer/>
     <Footer />
     <div style={{marginBottom:'200px'}} />
   </React.Fragment>
  );
}

export default App;
