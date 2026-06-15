import { useEffect, useState } from "react";
import { Home, Briefcase, FolderGit2, Code2, Mail } from "lucide-react";

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
		const sections = navItems
			.map((item) => document.getElementById(item.id))
			.filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.5,
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
        -translate-y-1/2
        z-50
        hidden
        lg:block
      "
		>
			<div className="relative">
				{/* Vertical Line */}
				<div
					className="
            absolute
            left-6
            top-0
            h-full
            w-[2px]
            bg-gray-200
          "
				/>

				<div className="flex flex-col gap-8">
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
                          w-14 h-14
                          bg-blue-600
                          border-blue-600
                          text-white
                          shadow-lg
                          shadow-blue-200
                        `
												: `
                          w-12 h-12
                          bg-white
                          border-gray-200
                          text-gray-500
                          hover:text-blue-600
                          hover:border-blue-300
                          hover:scale-110
                        `
										}
                  `}
								>
									<Icon size={active ? 28 : 22} />
								</div>

								<span
									className={`
                    absolute
                    left-20
                    whitespace-nowrap
                    text-sm
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
                          text-gray-600
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
