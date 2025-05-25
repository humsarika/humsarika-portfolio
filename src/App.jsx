
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Certificate from "./components/certificate";
import ContactOverlay from "./components/contactOverlay";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./app.css";



// const [isModalOpen, setIsModalOpen] = useState(false);

// const handleOpenModal = () => setIsModalOpen(true);
// const handleCloseModal = () => setIsModalOpen(false);

function App() {
  const [showContact, setShowContact] = useState(false);
  return (

    <div>
      <style>
  {`
    .Toastify {
      padding: 0 !important;
      min-height: 0 !important;
      z-index: 9999 !important;
    }

    @media (max-width: 768px) {
      .Toastify {
        padding: 0 !important;
        min-height: 0 !important;
        
      }
    }

    @media (max-width: 480px) {
      .Toastify {
        padding: 0 !important;
        min-height: 0 !important;
        
      }
    }
  `}
</style>



      <div className="main-app-container">
        {/* <Navbar /> */}
        <Navbar onContactClick={() => setShowContact(true)} />
        <Hero onContactClick={() => setShowContact(true)} />
      </div>

      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificate />
      <Footer />


      <ContactOverlay show={showContact} onClose={() => setShowContact(false)} />
      <ToastContainer position="top-center" autoClose={5000} pauseOnHover />
    </div>

  );
}

export default App;
