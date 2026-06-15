import Hero from "./components/Hero";
import Projects from "./components/Project";
import Sidebar from "./components/Sidebar";

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
				<section id="services" className="min-h-screen" />

				<section id="skills" className="min-h-screen" />

				<section id="contact" className="min-h-screen" />
			</main>
		</>
	);
}

export default App;
