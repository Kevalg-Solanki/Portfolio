import { Briefcase } from "lucide-react";

export default function Experience() {
	return (
		<section id="experience" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:pl-40">
				{/* Header */}
				<div className="mb-12">
					<p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
						Experience
					</p>

					<h2 className="text-4xl font-bold text-slate-900 mt-3">
						Professional Experience
					</h2>
				</div>

				{/* Experience Card */}
				<div
					className="
						bg-white
						border
						border-gray-200
						rounded-3xl
						p-8
						shadow-sm
						hover:shadow-lg
						transition-all
					"
				>
					<div className="flex items-start gap-4">
						<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
							<Briefcase size={22} className="text-blue-600" />
						</div>

						<div className="flex-1">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
								<div>
									<h3 className="text-xl font-bold text-slate-900">
										Full Stack Developer Intern
									</h3>

									<p className="text-blue-600 font-medium">Sparrow Softtech</p>
								</div>

								<span className="text-sm text-slate-500">
									May 2025 — Sep 2025
								</span>
							</div>

							<p className="text-slate-600 mt-5 leading-relaxed">
								Worked on Cloud Job Manager and Cloud Donor Manager,
								contributing to SaaS development, reporting systems, payment
								integrations, RBAC implementation, testing, production
								debugging, and client communication.
							</p>

							<div className="flex flex-wrap gap-3 mt-6">
								{[
                                    "MERN Stack",
									"SaaS Development",
									"RBAC",
									"Payment Integration",
									"Reporting",
									"Testing",
									"Client Communication",
								].map((skill) => (
									<span
										key={skill}
										className="
											px-4
											py-2
											bg-blue-50
											text-blue-700
											rounded-xl
											text-sm
											font-medium
										"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
