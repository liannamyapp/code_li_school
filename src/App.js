import { Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import CoursesSection from "./components/CoursesSection";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";

import AboutSchool from "./components/AboutSchool";

import "./App.scss";

function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <CoursesSection />
      <WhySection />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSchool />} />
      </Routes>

      {/* Footer-ը միշտ երևում է */}
      <Footer />
    </div>
  );
}

export default App;
