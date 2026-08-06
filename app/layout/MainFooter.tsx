import { href, Link } from "react-router";

export const MainFooter = () => {
	return (
		<footer className="bg-seafoam-100 text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				{/* Logo and title */}
				<div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
					<Link
						className="flex flex-col title-font font-medium items-center"
						to={href("/")}
					>
						<img
							src="/waters-of-wellness.svg"
							alt="Waters of Wellness"
							className="w-30 h-30 mb-3"
						/>
						<span className="ml-3 text-lg font-roca leading-none">
							Waters of Wellness
						</span>
					</Link>
				</div>
				<div className="grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
					{/* Contact */}
					<div className="w-full px-4">
						<h2 className="text-gray-900 mb-3 text-xl">Contact</h2>
						<nav className="list-none mb-10 font-semibold text-sm">
							<ul>
								<li>
									<p>
										314 Wyndhurst Avenue
										<br />
										Baltimore, MD 21210
									</p>
								</li>
								<li className="mt-3">
									<a href="tel:4438005600" target="_blank" rel="noopener">
										<p>443-800-5600</p>
									</a>
									<a
										href="mailto:info@watersofwellness.com"
										target="_blank"
										rel="noopener"
									>
										<p>info@watersofwellness.com</p>
									</a>
								</li>
								<li className="mt-3">
									<p>&copy; 2026 Waters of Wellness</p>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};
