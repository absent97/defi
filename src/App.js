import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import { Developer } from "./components/developer/Developer";
import { Subscribe } from "./components/subscribe/Subscribe";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Developer />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
