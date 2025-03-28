import { Button } from "@chakra-ui/react";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello, Portfolio!</h1>
      <Button colorScheme="blue">Click Me</Button>
    </div>
  );
}

export default App;
