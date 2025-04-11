
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
// css internal
const styles = {
  mainAppContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 100px",
    backgroundColor: "#fff"
  },
};

// const [isModalOpen, setIsModalOpen] = useState(false);

// const handleOpenModal = () => setIsModalOpen(true);
// const handleCloseModal = () => setIsModalOpen(false);

function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div>
      <div className="main-app-container" style={styles.mainAppContainer}>
        {/* <Navbar /> */}
        <Navbar onContactClick={() => setShowContact(true)} />
        <Hero />
      </div>
      
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills/>
      <Certificate />
      <Footer />


      <ContactOverlay show={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
}

export default App;
