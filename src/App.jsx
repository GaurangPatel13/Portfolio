import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor"
import Home from "./sections/Home";

const App = () => {

  return (
    <BrowserRouter>
    <CustomCursor />
      <div data-scroll-container>
        <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main> 
         <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
