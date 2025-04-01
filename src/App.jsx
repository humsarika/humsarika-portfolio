
import Navbar from './components/Navbar';
import Hero from "./components/hero";
import About from "./components/about";
// css internal
const styles = {
  mainAppContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 100px"
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
      {/* Add other components here */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
