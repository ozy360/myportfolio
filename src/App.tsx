import "./App.css";
import Nav from "./components/nav/section";
import Hero from "./components/hero/section";
import Services from "./components/services/section";
import Projects from "./components/projects/section";
import Stack from "./components/stack/section";
import Footer from "./components/footer/section";

function App() {
  return (
    <main className="!bg-yellow-300">
      <Nav />
      <div className="mx-auto max-w-screen-2xl 4xl:mx-auto 4xl:max-w-screen-4x">
        <div className="flex-grow mx-auto w-[90%] md:w-[70%] lg:w-[60%]">
          <Hero />
          <div id="services"></div>
          <Services />
          <Projects />
          <div id="stack"></div>
          <Stack />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
