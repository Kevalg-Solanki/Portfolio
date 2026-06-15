//ICONS
import {
	Boxes,
	
	Server,
	Workflow,
} from "lucide-react";

const services = [
	{
		title: "SaaS Development",
		description:
			"Building scalable SaaS applications with authentication, role management, dashboards, payments, and reporting systems.",
		icon: Boxes,
	},
	{
		title: "Chrome Extensions",
		description:
			"Commercial Chrome Extensions with licensing, subscriptions, offline functionality, and performance optimization.",
		icon: Boxes,
	},
	{
		title: "Backend Development",
		description:
			"REST APIs, JWT authentication, RBAC, database design, validation, and scalable backend architecture.",
		icon: Server,
	},
	{
		title: "Business Automation",
		description:
			"Automation tools and workflows that reduce manual work and improve operational efficiency.",
		icon: Workflow,
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className=" bg-white"
		>
			<div className="max-w-7xl mx-auto px-6 lg:pl-40">
				{/* HEADER */}
				<div className="mb-16">
					<p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
						Services
					</p>

					<h2 className="text-5xl font-bold text-slate-900 mt-4">
						What I Build
					</h2>

					<p className="text-slate-600 mt-4 max-w-2xl">
						I help businesses build software,
						automate workflows, and launch
						commercial digital products.
					</p>
				</div>

				{/* SERVICES GRID */}
				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service) => {
						const Icon = service.icon;

						return (
							<div
								key={service.title}
								className="
									group
									bg-white
									border
									border-gray-200
									rounded-3xl
									p-8
									shadow-sm
									hover:shadow-xl
									hover:-translate-y-2
									transition-all
									duration-300
								"
							>
								<div
									className="
										w-16
										h-16
										rounded-2xl
										bg-blue-50
										text-blue-600
										flex
										items-center
										justify-center
										mb-6
										group-hover:bg-blue-600
										group-hover:text-white
										transition-all
									"
								>
									<Icon size={30} />
								</div>

								<h3 className="text-2xl font-bold text-slate-900">
									{service.title}
								</h3>

								<p className="text-slate-600 mt-4 leading-relaxed">
									{service.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}