import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Service";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<Sidebar />

			<main>
				<section id="home" className="min-h-screen">
					<Hero />
				</section>

				<section id="projects" className="min-h-screen">
          <Projects/>
        </section>
				<section id="services" className="min-h-screen" >
          <Services/>
        </section>

				<section id="skills" className="min-h-screen" >
          <Skills/>
        </section>

				<section  id="contact" className="min-h-screen">
          <Contact/>
        </section>
			</main>
		</>
	);
}

export default App;
