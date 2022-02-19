import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import Contact from './components/Contact/Contact';
import ProductList  from "./components/productList/ProductList";

function App() {
  return (
    <div >
      <Intro />
      <About />
      <ProductList />
      <Contact/>
    </div>
  );
}

export default App;
