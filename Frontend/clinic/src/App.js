import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import ServicePage from "./page/service/Service";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Blog from "./page/blog/Blog";
import Footer from "./components/footer/Footer";
import Appointment from "./page/appointment/Appointment";
import Testimonial from "./page/testimonial/Testimonial";
import Gallery from "./page/gallery/Gallery";
import Disclaimer from "./page/disclaimer/Disclaimer";
import TermsAndCondition from "./page/termsandcondition/TermsAndCondition";
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy";
import GalleryMain from "./page/gallery/GalleryMain";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallerymain" element={<GalleryMain />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
