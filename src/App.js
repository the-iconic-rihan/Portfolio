import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import Contact from './components/Contact/Contact';
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./Context";

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
