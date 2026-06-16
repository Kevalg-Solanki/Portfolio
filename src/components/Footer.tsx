//ASSETS
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.png";

export default function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:pl-40 py-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* LEFT */}
					<div>
						<h3 className="text-xl font-bold text-slate-900">
							Keval Solanki
						</h3>

						<p className="text-slate-500 mt-2">
							Full Stack Developer • SaaS • Chrome Extensions
						</p>
					</div>

					{/* CENTER */}
					<div className="flex gap-8 text-slate-600">
						<a
							href="#home"
							className="hover:text-blue-600 transition"
						>
							Home
						</a>

						<a
							href="#services"
							className="hover:text-blue-600 transition"
						>
							Services
						</a>

						<a
							href="#projects"
							className="hover:text-blue-600 transition"
						>
							Projects
						</a>

						<a
							href="#skills"
							className="hover:text-blue-600 transition"
						>
							Skills
						</a>

						<a
							href="#contact"
							className="hover:text-blue-600 transition"
						>
							Contact
						</a>
					</div>

					{/* RIGHT */}
					<div className="flex gap-4">
						<a
							href="https://github.com/Kevalg-Solanki"
							target="_blank"
							rel="noreferrer"
							className="
								w-10
								h-10
								bg-slate-100
								rounded-lg
								flex
								items-center
								justify-center
								hover:scale-110
								transition
							"
						>
							<img
								src={Github}
								alt="GitHub"
								className="w-5"
							/>
						</a>

						<a
							href="https://linkedin.com/in/kevalg-solanki"
							target="_blank"
							rel="noreferrer"
							className="
								w-10
								h-10
								bg-slate-100
								rounded-lg
								flex
								items-center
								justify-center
								hover:scale-110
								transition
							"
						>
							<img
								src={Linkedin}
								alt="LinkedIn"
								className="w-5"
							/>
						</a>
					</div>
				</div>

				{/* BOTTOM */}
				<div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-slate-500">
						© {new Date().getFullYear()} Keval Solanki. All rights reserved.
					</p>

					<p className="text-sm text-slate-400">
						Built with React, TypeScript & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}