
import Navbar from './components/Navbar';
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
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

function App() {
  return (
    <div>
      <div className="main-app-container" style={styles.mainAppContainer}>
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Education />
      <Experience />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
