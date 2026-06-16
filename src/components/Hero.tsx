
//EXTERNAL MODULES
import { motion } from "framer-motion";

//ASSETS
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.png";
import Profile from "../assets/profile.jpeg";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center"
		>
			<div className="max-w-7xl mx-auto px-6 lg:pl-40 w-full">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* LEFT */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
					>
						<p className="text-blue-500 uppercase tracking-[0.3em] text-lg font-bold">
							FULL STACK DEVELOPER
						</p>

						<h1
							className="
								mt-6
								text-4xl
								md:text-5xl
								lg:text-6xl
								font-bold
								leading-tight
								text-slate-900
							"
						>
							Building SaaS Products
							<br />
							<span className="text-blue-600">
								& Chrome Extensions
							</span>
						</h1>

						<p
							className="
								mt-8
								text-slate-600
								text-lg
								max-w-2xl
								leading-relaxed
							"
						>
							I build business software,
							automation tools, and commercial
							Chrome extensions using React,
							TypeScript, Node.js, and MongoDB.
						</p>

						{/* TECH STACK */}
						<div className="flex flex-wrap gap-3 mt-6">
							{[
								"React",
								"TypeScript",
								"Node.js",
								"MongoDB",
								"Express",
							].map((tech) => (
								<span
									key={tech}
									className="
										px-3
										py-1.5
										bg-blue-50
										text-blue-700
										rounded-lg
										text-sm
										font-medium
									"
								>
									{tech}
								</span>
							))}
						</div>

						{/* BUTTONS */}
						<div className="flex flex-wrap gap-4 mt-10">
							<a
								href="#projects"
								className="
									bg-blue-600
									hover:bg-blue-700
									transition-all
									duration-300
									px-8
									py-4
									rounded-xl
									font-medium
									text-white
									shadow-lg
								"
							>
								View Projects
							</a>

							<a
								href="/resume.pdf"
								target="_blank"
								className="
									border
									border-slate-300
									hover:border-blue-600
									hover:text-blue-600
									transition-all
									duration-300
									px-8
									py-4
									rounded-xl
									font-medium
									text-slate-900
								"
							>
								Download Resume
							</a>
						</div>

						{/* SOCIALS */}
						<div className="flex gap-5 mt-10">
							<a
								href="https://github.com/Kevalg-Solanki"
								target="_blank"
								rel="noreferrer"
								className="
									w-12 h-12
									bg-white
									rounded-xl
									shadow-md
									flex
									items-center
									justify-center
									hover:scale-110
									transition-all
								"
							>
								<img
									className="w-7 h-7"
									src={Github}
									alt="GitHub"
								/>
							</a>

							<a
								href="https://linkedin.com/in/kevalg-solanki"
								target="_blank"
								rel="noreferrer"
								className="
									w-12 h-12
									bg-white
									rounded-xl
									shadow-md
									flex
									items-center
									justify-center
									hover:scale-110
									transition-all
								"
							>
								<img
									className="w-7 h-7"
									src={Linkedin}
									alt="LinkedIn"
								/>
							</a>
						</div>

						{/* STATS */}
						<div className="flex gap-10 mt-10">
							<div>
								<h3 className="text-2xl font-bold text-slate-900">
									3+
								</h3>
								<p className="text-slate-500 text-sm">
									Products Built
								</p>
							</div>

							<div>
								<h3 className="text-2xl font-bold text-slate-900">
									50+
								</h3>
								<p className="text-slate-500 text-sm">
									APIs Developed
								</p>
							</div>

							<div>
								<h3 className="text-2xl font-bold text-slate-900">
									5+
								</h3>
								<p className="text-slate-500 text-sm">
									Months Experience
								</p>
							</div>
							
						</div>
					</motion.div>

					{/* RIGHT */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="flex justify-center"
					>
						<div className="relative bg-white p-3 rounded-[32px] shadow-xl">
							<div
								className="
									absolute
									inset-0
									bg-blue-500/20
									blur-[120px]
									rounded-full
								"
							/>

							<img
								src={Profile}
								alt="Keval Solanki"
								className="
									relative
									w-80
									h-80
									md:w-[420px]
									md:h-[520px]
									object-cover
									rounded-3xl
								"
							/>

							<div
								className="
									absolute
									-top-5
									-right-5
									bg-slate-900
									px-4
									py-2
									rounded-xl
									text-white
									text-sm
									font-medium
								"
							>
								Custom Softwares
							</div>

							<div
								className="
									absolute
									-bottom-5
									-left-5
									bg-slate-900
									px-4
									py-2
									rounded-xl
									text-white
									text-sm
									font-medium
								"
							>
								SaaS Products
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

