import { href, Link, NavLink, useLocation } from "react-router";
import { ArrowRightIcon, WatersOfWellnessIcon } from "@/components/icons";
import { HERO_ROUTES, NAV_LINKS } from "@/config";
import { navItemHoverClass, navLinkClassName } from "@/lib";
import { MobileMenu } from "./MobileMenu";
import { ServicesMenu } from "./ServicesMenu";

export const MainNavigation = () => {
	const { pathname } = useLocation();
	const hasHero = HERO_ROUTES.includes(pathname);

	const textColorClass = hasHero ? "text-seafoam-50" : "text-gray-900";
	const positionClass = hasHero ? "absolute inset-x-0 top-0" : "relative";

	return (
		<header className={`${positionClass} z-10`}>
			<div className="container mx-auto flex items-center justify-between px-3 py-5 md:px-5 z-10">
				<Link
					className={`flex title-font font-medium items-center ${textColorClass}`}
					to={href("/")}
					viewTransition
				>
					<WatersOfWellnessIcon tailwindFillColorClass="fill-seafoam-200" />
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
										`mr-5 ${navItemHoverClass(hasHero)}`,
									)
								}
								to={link.href}
								viewTransition
							>
								{link.label}
							</NavLink>
						))}
						<div className="mr-5">
							<ServicesMenu variant="popover" isHome={hasHero} />
						</div>
					</nav>
					<a
						href="https://watersofwellness.janeapp.com"
						target="_blank"
						rel="noopener"
						className="inline-flex items-center bg-seafoam-100 hover:bg-seafoam-200 text-ink rounded-full px-3 py-1 text-center transition-hover"
					>
						Book Now
						<ArrowRightIcon size={16} tailwindFillColorClass="ml-1" />
					</a>
				</div>

				<MobileMenu />
			</div>
		</header>
	);
};
