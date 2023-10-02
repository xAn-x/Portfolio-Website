import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
function App() {
  return (
    <div className="App container-fluid my-5 mx-3">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
