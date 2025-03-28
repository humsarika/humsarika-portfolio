
import Navbar from './components/Navbar';
import Hero from "./components/hero";
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
    <div className="main-app-container" style={styles.mainAppContainer}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
