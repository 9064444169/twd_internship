import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Top from "./components/Top/Top";
import About from "./components/Learn/About";
import Event from "./components/Events/Event";
import Instructor from "./components/Instructor/Instructor";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <About />
      <section id="events">
        <Event />
      </section>
      <Instructor />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
