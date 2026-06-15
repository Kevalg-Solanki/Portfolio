const skillGroups = [
	{
		title: "Frontend",
		skills: [
			"React.js",
			"TypeScript",
			"Redux",
			"Tailwind CSS",
		],
	},
	{
		title: "Backend",
		skills: [
			"Node.js",
			"Express.js",
			"REST APIs",
			"JWT",
			"Joi Validation",
		],
	},
	{
		title: "Database",
		skills: [
			"MongoDB",
			"Mongoose",
			"Database Design",
		],
	},
	{
		title: "Tools & Workflow",
		skills: [
			"Git",
			"GitHub",
			"Postman",
			"Jira",
			"Figma",
		],
	},
];
export default function Skills() {
	return (
		<section
			id="skills"
			className="py-20 bg-slate-50"
		>
			<div className="max-w-7xl mx-auto px-6 lg:pl-40">
				{/* HEADER */}
				<div className="mb-16">
					<p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
						Skills
					</p>

					<h2 className="text-5xl font-bold text-slate-900 mt-4">
						Technology Stack
					</h2>

					<p className="text-slate-600 mt-4 max-w-2xl">
						Technologies and tools I use to
						build scalable products and
						business applications.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8">
					{skillGroups.map((group) => (
						<div
							key={group.title}
							className="
								bg-white
								rounded-3xl
								p-8
								border
								border-gray-200
								shadow-sm
								hover:shadow-lg
								transition-all
							"
						>
							<h3 className="text-2xl font-bold text-slate-900 mb-6">
								{group.title}
							</h3>

							<div className="flex flex-wrap gap-3">
								{group.skills.map(
									(skill) => (
										<span
											key={skill}
											className="
												px-4
												py-2
												bg-blue-50
												text-blue-700
												rounded-xl
												font-medium
											"
										>
											{skill}
										</span>
									)
								)}
							</div>
						</div>
					))}
				</div>

				{/* SPECIALIZATION */}
				<div
					className="
						mt-12
						bg-gradient-to-r
						from-blue-600
						to-blue-500
						text-white
						rounded-3xl
						p-10
					"
				>
					<h3 className="text-3xl font-bold">
						Specialization
					</h3>

					<div className="flex flex-wrap gap-4 mt-6">
						<span className="bg-white/20 px-4 py-2 rounded-xl">
							SaaS Development
						</span>

						<span className="bg-white/20 px-4 py-2 rounded-xl">
							Chrome Extensions
						</span>

						<span className="bg-white/20 px-4 py-2 rounded-xl">
							RBAC
						</span>

						<span className="bg-white/20 px-4 py-2 rounded-xl">
							Payment Integration
						</span>

						<span className="bg-white/20 px-4 py-2 rounded-xl">
							Performance Optimization
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}