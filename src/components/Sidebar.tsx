import { useEffect, useState } from "react";
import {
	Home,
	Briefcase,
	FolderGit2,
	Code2,
	Mail,
	Building2,
} from "lucide-react";

const navItems = [
	{
		id: "home",
		icon: Home,
		label: "Home",
	},
	{
		id: "projects",
		icon: FolderGit2,
		label: "Projects",
	},
	{
		id: "experience",
		icon: Building2,
		label: "Experience",
	},
	{
		id: "services",
		icon: Briefcase,
		label: "Services",
	},
	{
		id: "skills",
		icon: Code2,
		label: "Skills",
	},
	{
		id: "contact",
		icon: Mail,
		label: "Contact",
	},
];

export default function Sidebar() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = navItems.map((item) => document.getElementById(item.id));

		const observer = new IntersectionObserver(
			(entries) => {
				let visibleSection = null;

				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleSection = entry.target.id;
					}
				});

				if (visibleSection) {
					setActiveSection(visibleSection);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "-20% 0px -20% 0px",
			},
		);

		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<aside
			className="
				fixed
				left-8
				top-1/2
				-transform
				-translate-y-1/2
				z-50
				hidden
				lg:block
			"
		>
			<div className="relative">
				{/* Line */}
				<div
					className="
						absolute
						left-[22px]
						top-4
						bottom-4
						w-[2px]
						bg-gray-200
					"
				/>

				<div className="flex flex-col gap-6">
					{navItems.map((item) => {
						const Icon = item.icon;

						const active = activeSection === item.id;

						return (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="
									group
									relative
									flex
									items-center
								"
							>
								<div
									className={`
										flex
										items-center
										justify-center
										rounded-full
										border
										transition-all
										duration-300

										${
											active
												? `
													w-12
													h-12
													bg-blue-600
													border-blue-600
													text-white
													shadow-lg
													scale-110
												`
												: `
													w-11
													h-11
													bg-white
													border-gray-200
													text-gray-500
													hover:text-blue-600
													hover:border-blue-300
													hover:scale-105
												`
										}
									`}
								>
									<Icon size={active ? 22 : 20} />
								</div>

								<span
									className={`
										absolute
										left-14
										text-sm
										whitespace-nowrap
										transition-all
										duration-300

										${
											active
												? `
													opacity-100
													text-blue-600
													font-semibold
												`
												: `
													opacity-0
													text-gray-500
													group-hover:opacity-100
												`
										}
									`}
								>
									{item.label}
								</span>
							</a>
						);
					})}
				</div>
			</div>
		</aside>
	);
}
