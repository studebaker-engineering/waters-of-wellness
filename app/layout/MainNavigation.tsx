import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { href, Link, NavLink, useLocation } from "react-router";
import { NAV_LINKS } from "@/config";
import { gsap } from "@/lib/gsap";
import { ServicesMenu } from "./ServicesMenu";

export const MainNavigation = () => {
	const { pathname } = useLocation();
	const isHome = pathname === href("/");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileMenuMounted, setIsMobileMenuMounted] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const openMobileMenu = () => {
		setIsMobileMenuMounted(true);
		setIsMobileMenuOpen(true);
	};

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	useGSAP(() => {
		if (!mobileMenuRef.current) return;
		if (isMobileMenuOpen) {
			gsap.fromTo(
				mobileMenuRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.25, ease: "power2.out" },
			);
		} else if (isMobileMenuMounted) {
			gsap.to(mobileMenuRef.current, {
				opacity: 0,
				duration: 0.2,
				ease: "power2.in",
				onComplete: () => setIsMobileMenuMounted(false),
			});
		}
	}, [isMobileMenuOpen]);

	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	return (
		<header className="relative z-10">
			<div className="container mx-auto flex items-center justify-between px-3 py-5 md:px-5 z-10">
				<Link
					className={`flex title-font font-medium items-center ${
						isHome ? "text-seafoam-50" : "text-gray-900"
					}`}
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

				<div
					className={`hidden md:flex md:items-center ${
						isHome ? "text-seafoam-50" : "text-gray-900"
					}`}
				>
					<nav className="flex items-center text-base">
						{NAV_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map((link) => (
							<NavLink
								key={link.label}
								end
								className={({ isActive }) =>
									`mr-5 cursor-pointer transition-hover ${
										isActive ? "font-semibold" : ""
									} ${isHome ? "hover:text-seafoam-200" : "hover:text-gray-900"}`
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

				<button
					type="button"
					className="md:hidden flex items-center justify-center w-10 h-10 text-seafoam-100 p-2 bg-seafoam-50/15 rounded-full cursor-pointer"
					onClick={openMobileMenu}
					aria-label="Open menu"
				>
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1"
						className="w-full h-full"
						viewBox="0 0 24 24"
					>
						<title>Menu Icon</title>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			{isMobileMenuMounted && (
				<div
					ref={mobileMenuRef}
					className="fixed inset-0 z-50 bg-linear-to-t from-seafoam-100/95 to-seafoam-100 flex flex-col px-3 py-5 md:hidden"
				>
					<div className="flex items-center justify-between">
						<Link
							className="flex title-font font-medium items-center text-gray-900"
							to={href("/")}
							onClick={closeMobileMenu}
						>
							<img
								src="/waters-of-wellness.svg"
								alt="Waters of Wellness"
								className="w-8 h-8"
							/>
							<span className="ml-3 text-xl font-roca">Waters of Wellness</span>
						</Link>
						<button
							type="button"
							className="flex items-center justify-center w-10 h-10 text-gray-400 p-2 bg-seafoam-100/20 rounded-full cursor-pointer"
							onClick={closeMobileMenu}
							aria-label="Close menu"
						>
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1"
								className="w-full h-full"
								viewBox="0 0 24 24"
							>
								<title>Close Icon</title>
								<path d="M6 6l12 12M18 6L6 18"></path>
							</svg>
						</button>
					</div>

					<nav className="flex flex-col items-start gap-y-6 text-lg mt-10">
						{NAV_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map((link) => (
							<NavLink
								key={link.label}
								end
								to={link.href}
								onClick={closeMobileMenu}
								className={({ isActive }) =>
									`hover:text-gray-900 cursor-pointer transition-hover ${
										isActive ? "font-semibold" : ""
									}`
								}
							>
								{link.label}
							</NavLink>
						))}
						<ServicesMenu variant="inline" onNavigate={closeMobileMenu} />
					</nav>
				</div>
			)}
		</header>
	);
};
