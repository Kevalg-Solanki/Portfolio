//ASSETS
import QrMachine from "../assets/qr-machine.png";
import MyInventory from "../assets/myinventory.png";
import HungerHelpers from "../assets/help-me-page.png";

//ICONS
import { ExternalLink, CheckCircle2 } from "lucide-react";
//ASSETS
import Github from "../assets/github.svg";

export default function Projects() {
	return (
		<section id="projects" className="py-32">
			<div className="max-w-7xl mx-auto px-6 lg:pl-40">
				{/* SECTION TITLE */}
				<div className="mb-16">
					<p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
						Projects
					</p>

					<h2 className="text-5xl font-bold text-slate-900 mt-4">
						Featured Work
					</h2>

					<p className="text-slate-600 mt-4 max-w-2xl">
						A selection of products and applications I've built.
					</p>
				</div>

				{/* FEATURED PROJECT */}
				<div
					className="
						bg-white
						rounded-3xl
						shadow-xl
						overflow-hidden
						border
						border-gray-100
					"
				>
					<div className="grid lg:grid-cols-2">
						{/* IMAGE */}
						<div className="bg-slate-100 flex items-center justify-center p-8">
							<img
								src={QrMachine}
								alt="QR Machine"
								className="rounded-2xl shadow-lg"
							/>
						</div>

						{/* CONTENT */}
						<div className="p-10 lg:p-14">
							<span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
								Commercial Product
							</span>

							<h3 className="text-4xl font-bold mt-6 text-slate-900">
								QR Machine
							</h3>

							<p className="mt-6 text-slate-600 leading-relaxed">
								A commercial Chrome Extension for generating and exporting
								single and bulk QR codes with support for PDF, SVG and ZIP
								exports.
							</p>

							<div className="mt-8 space-y-4">
								<div className="flex items-center gap-3">
									<CheckCircle2 size={18} className="text-blue-600" />
									<span>1000+ QR codes per batch</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2 size={18} className="text-blue-600" />
									<span>Offline-first processing</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2 size={18} className="text-blue-600" />
									<span>Lemon Squeezy Licensing</span>
								</div>

								<div className="flex items-center gap-3">
									<CheckCircle2 size={18} className="text-blue-600" />
									<span>PDF/SVG/ZIP exports</span>
								</div>
							</div>

							<div className="flex gap-4 mt-10">
								<a
									href="#"
									className="
										bg-blue-600
										text-white
										px-6
										py-3
										rounded-xl
										flex
										items-center
                                        justify-center
										gap-2   
                                        h-15
                                        w-40
									"
								>
									Web Store
									<ExternalLink size={18} />
								</a>

								<a
									href="#"
									className="
										border
										border-gray-300
										px-6
										py-3
										rounded-xl
										flex
										items-center
                                        justify-center
										gap-2
                                        h-15
									"
								>
									Website
									<ExternalLink size={18} />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* OTHER PROJECTS */}
				<div className="mt-12 grid md:grid-rows-2 gap-8">
					{/* INVENTORY */}
					<div
						className="
						bg-white
						rounded-3xl
						shadow-xl
						overflow-hidden
						border
						border-gray-100
					"
					>
						<div className="grid lg:grid-cols-2">
							{/* IMAGE */}
							<div className="bg-slate-100 flex items-center justify-center p-8">
								<img
									src={MyInventory}
									alt="MyInventory"
									className="rounded-2xl shadow-lg"
								/>
							</div>

							{/* CONTENT */}
							<div className="p-10 lg:p-14">
								<h3 className="text-4xl font-bold mt-6 text-slate-900">
									MyInventory
								</h3>

								<p className="mt-6 text-slate-600 leading-relaxed">
									Multi-Tenant Inventory Management System
								</p>

								<div className="mt-8 space-y-4">
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-blue-600" />
										<span>
											Designed a multi-tenant backend architecture supporting
											isolated business accounts and role-based access control.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-blue-600" />
										<span>
											Implemented JWT authentication, OTP verification, password
											recovery, and permission management workflows.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={12} className="text-blue-600" />
										<span>
											Developed REST APIs for tenant, user, role, and membership
											management.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-blue-600" />
										<span>
											Applied Service Layer and Repository Pattern architecture
											for scalability and maintainability.
										</span>
									</div>
								</div>

								<div className="flex gap-4 mt-10">
									<a
										href="#"
										className="
										border
										border-gray-300
										px-6
										py-3
										rounded-xl
										flex
										items-center
                                        justify-center
										gap-2
                                        h-15
									"
									>
										GitHub
										<img className="w-10 h-10" src={Github} alt="Github" />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* HUNGER HELPERS */}
					<div
						className="
						bg-white
						rounded-3xl
						shadow-xl
						overflow-hidden
						border
						border-gray-100
					"
					>
						<div className="grid lg:grid-cols-2">
							{/* IMAGE */}
							<div className="bg-slate-100 flex items-center justify-center p-8">
								<img
									src={HungerHelpers}
									alt="Hunger Helpers"
									className="rounded-2xl shadow-lg"
								/>
							</div>

							{/* CONTENT */}
							<div className="p-10 lg:p-14">
								<h3 className="text-4xl font-bold mt-6 text-slate-900">
									Hunger Helpers
								</h3>

								<p className="mt-6 text-slate-600 leading-relaxed">
									Food Donation Platform
								</p>

								<div className="mt-8 space-y-4">
									<div className="flex items-center gap-3">
										<CheckCircle2 size={19} className="text-blue-600" />
										<span>
											Designed and developed the backend architecture for a food donation and volunteer coordination 
platform. 
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={21} className="text-blue-600" />
										<span>
											Built 50+ REST APIs covering authentication, donations, volunteer management, notifications, 
analytics, and reporting.
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-blue-600" />
										<span>
										 Implemented JWT authentication, role-based access control (RBAC), and donation lifecycle 
workflows. 
										</span>
									</div>

									<div className="flex items-center gap-3">
										<CheckCircle2 size={15} className="text-blue-600" />
										<span>
											Developed analytics, leaderboard, reporting, and real-time notification features. 
										</span>
									</div>
								</div>

								<div className="flex gap-4 mt-10">
									<a
										href="#"
										className="
										border
										border-gray-300
										px-6
										py-3
										rounded-xl
										flex
										items-center
                                        justify-center
										gap-2
                                        h-15
									"
									>
										GitHub
										<img className="w-10 h-10" src={Github} alt="Github" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
