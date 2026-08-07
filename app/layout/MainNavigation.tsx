import { href, Link, NavLink, useLocation } from "react-router";
import { NAV_LINKS } from "@/config";
import { navItemHoverClass, navLinkClassName } from "@/lib";
import { MobileMenu } from "./MobileMenu";
import { ServicesMenu } from "./ServicesMenu";

export const MainNavigation = () => {
	const { pathname } = useLocation();
	const isHome = pathname === href("/");

	const textColorClass = isHome ? "text-seafoam-50" : "text-gray-900";

	return (
		<header className="relative z-10">
			<div className="container mx-auto flex items-center justify-between px-3 py-5 md:px-5 z-10">
				<Link
					className={`flex title-font font-medium items-center ${textColorClass}`}
					to={href("/")}
				>
					<img
						src="/waters-of-wellness.svg"
						alt="Waters of Wellness"
						className="w-8 h-8"
					/>
					<span className="ml-3 text-xl font-roca leading-none">
						Waters of Wellness
					</span>
				</Link>

				<div className={`hidden md:flex md:items-center ${textColorClass}`}>
					<nav className="flex items-center text-base">
						{NAV_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map((link) => (
							<NavLink
								key={link.label}
								end
								className={({ isActive }) =>
									navLinkClassName(
										isActive,
										`mr-5 ${navItemHoverClass(isHome)}`,
									)
								}
								to={link.href}
							>
								{link.label}
							</NavLink>
						))}
						<div className="mr-5">
							<ServicesMenu variant="popover" isHome={isHome} />
						</div>
					</nav>
					<a
						href="https://watersofwellness.janeapp.com"
						target="_blank"
						rel="noopener"
						className="inline-flex items-center bg-seafoam-100 hover:bg-seafoam-200 text-ink rounded-full px-3 py-1 text-center transition-hover"
					>
						Book Now
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<title>Arrow Icon</title>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>

				<MobileMenu />
			</div>
		</header>
	);
};
