//ASSETS
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.png";

//ICONS
import {
	Mail,
	MapPin,
	Send,
} from "lucide-react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-32 bg-white"
		>
			<div className="max-w-7xl mx-auto px-6 lg:pl-40">
				{/* HEADER */}
				<div className="text-center mb-16">
					<p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
						Contact
					</p>

					<h2 className="text-5xl font-bold text-slate-900 mt-4">
						Let's Build Something
					</h2>

					<p className="text-slate-600 mt-4 max-w-2xl mx-auto">
						Have a SaaS idea, Chrome Extension,
						or business automation project?
						Let's discuss it.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-10">
					{/* LEFT */}
					<div
						className="
							bg-slate-50
							p-10
							rounded-3xl
							border
							border-gray-200
						"
					>
						<h3 className="text-3xl font-bold text-slate-900">
							Get In Touch
						</h3>

						<p className="text-slate-600 mt-4">
							I'm currently available for
							freelance projects and remote
							opportunities.
						</p>

						<div className="mt-10 space-y-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
									<Mail
										size={22}
										className="text-blue-600"
									/>
								</div>

								<div>
									<p className="text-sm text-slate-500">
										Email
									</p>

									<a
										href="mailto:kevalg1950@gmail.com"
										className="font-medium text-slate-900"
									>
										kevalg1950@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
									<MapPin
										size={22}
										className="text-blue-600"
									/>
								</div>

								<div>
									<p className="text-sm text-slate-500">
										Location
									</p>

									<p className="font-medium text-slate-900">
										Gujarat, India
									</p>
								</div>
							</div>
						</div>

						<div className="flex gap-4 mt-10">
							<a
								href="https://github.com/Kevalg-Solanki"
								target="_blank"
								rel="noreferrer"
								className="
									w-12
									h-12
									bg-white
									rounded-xl
									shadow-sm
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
									className="w-6"
								/>
							</a>

							<a
								href="https://linkedin.com/in/kevalg-solanki"
								target="_blank"
								rel="noreferrer"
								className="
									w-12
									h-12
									bg-white
									rounded-xl
									shadow-sm
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
									className="w-6"
								/>
							</a>
						</div>
					</div>

					{/* RIGHT */}
					<div
						className="
							bg-blue-600
							text-white
							p-10
							rounded-3xl
							flex
							flex-col
							justify-center
						"
					>
						<h3 className="text-4xl font-bold">
							Start a Project
						</h3>

						<p className="mt-4 text-blue-100">
							Tell me about your project and
							I'll get back to you.
						</p>

						<a
							href="mailto:kevalg1950@gmail.com"
							className="
								mt-10
								inline-flex
								items-center
								justify-center
								gap-2
								bg-white
								text-blue-600
								font-semibold
								px-8
								py-4
								rounded-xl
								w-fit
							"
						>
							Send Email
							<Send size={18} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}