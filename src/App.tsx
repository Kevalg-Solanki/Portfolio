import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Reveal from "./components/Reveal";
import Services from "./components/Service";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
	return (
		<>
		<Cursor/>
			<Sidebar />

			<main>
				<section id="home" className="min-h-screen">
					<Reveal>

					<Hero />
					</Reveal>
				</section>

				<section id="projects" className="min-h-screen">
					<Reveal>
						<Projects />
					</Reveal>
				</section>
				<section id="experience" className="min-h-screen">
					<Reveal>
						<Experience />
					</Reveal>
				</section>

				<section id="services" className="min-h-screen">
					<Reveal>
						<Services />
					</Reveal>
				</section>

				<section id="skills" className="min-h-screen">
					<Reveal>
						<Skills />
					</Reveal>
				</section>

				<section id="contact" className="min-h-screen">
					<Reveal>
						<Contact />
					</Reveal>
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
