import { href, Link } from "react-router";
import { WatersOfWellnessIcon } from "@/components/icons";
import { NAV_LINKS, SERVICE_LINKS } from "@/config";

export const MainFooter = () => {
	return (
		<footer
			className="body-font text-gray-900"
			style={{ backgroundColor: "#b8b69a" }}
		>
			<div className="container mx-auto pt-8 pb-12 px-5">
				{/* Logo and title */}
				<Link
					className="inline-flex items-center gap-2 title-font font-medium mb-8"
					to={href("/")}
				>
					<WatersOfWellnessIcon tailwindFillColorClass="fill-gray-900" />
					<span className="text-lg font-roca leading-none">
						Waters of Wellness
					</span>
				</Link>

				<div className="flex flex-col lg:flex-row lg:items-start gap-10">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
						{/* Contact */}
						<div>
							<h2 className="text-xs uppercase tracking-wide opacity-60 mb-3">
								Contact
							</h2>
							<nav className="list-none font-semibold text-sm">
								<ul>
									<li>
										<a href="tel:4438005600" target="_blank" rel="noopener">
											443-800-5600
										</a>
									</li>
									<li className="mt-3">
										<a
											href="mailto:info@watersofwellness.com"
											target="_blank"
											rel="noopener"
										>
											info@watersofwellness.com
										</a>
									</li>
									<li className="mt-3">
										<p>
											314 Wyndhurst Avenue
											<br />
											Baltimore, MD 21210
										</p>
									</li>
								</ul>
							</nav>
						</div>

						{/* Pages */}
						<div>
							<h2 className="text-xs uppercase tracking-wide opacity-60 mb-3">
								Pages
							</h2>
							<nav className="list-none font-semibold text-sm">
								<ul>
									{NAV_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map(
										(link, index) => (
											<li key={link.label} className={index > 0 ? "mt-3" : ""}>
												<Link
													className="transition-hover hover:text-gray-700"
													to={link.href}
												>
													{link.label}
												</Link>
											</li>
										),
									)}
								</ul>
							</nav>
						</div>

						{/* Services */}
						<div>
							<h2 className="text-xs uppercase tracking-wide opacity-60 mb-3">
								Services
							</h2>
							<nav className="list-none font-semibold text-sm">
								<ul>
									{SERVICE_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map(
										(link, index) => (
											<li key={link.label} className={index > 0 ? "mt-3" : ""}>
												<Link
													className="transition-hover hover:text-gray-700"
													to={link.href}
												>
													{link.label}
												</Link>
											</li>
										),
									)}
								</ul>
							</nav>
						</div>
					</div>

					{/* CTA */}
					<div className="lg:w-72 shrink-0">
						<p className="text-xs uppercase tracking-wide opacity-60 mb-2">
							Ready to feel better?
						</p>
						<a
							href="https://watersofwellness.janeapp.com"
							target="_blank"
							rel="noopener"
							className="font-roca text-4xl md:text-5xl transition-hover hover:text-gray-700"
						>
							Book Now
						</a>
					</div>
				</div>

				<hr className="border-bs-gray-900 opacity-10 mt-10" />

				<div className="mt-10 font-medium text-sm">
					<p>&copy; 2026 Waters of Wellness. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
