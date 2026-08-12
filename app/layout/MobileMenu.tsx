import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { href, Link, NavLink } from "react-router";
import { NAV_LINKS } from "@/config";
import { gsap, navItemHoverClass, navLinkClassName } from "@/lib";
import { ServicesMenu } from "./ServicesMenu";

export const MobileMenu = () => {
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
		<>
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

			{isMobileMenuMounted && (
				<div
					ref={mobileMenuRef}
					className="fixed inset-0 z-50 bg-seafoam-100 flex flex-col justify-between px-3 py-5 md:hidden"
				>
					{/* Links */}
					<div>
						<div className="flex items-center justify-between">
							<Link
								className="flex title-font font-medium items-center text-gray-900"
								to={href("/")}
								onClick={closeMobileMenu}
								viewTransition
							>
								<img
									src="/waters-of-wellness.svg"
									alt="Waters of Wellness"
									className="w-8 h-8"
								/>
								<span className="ml-3 text-xl font-roca">
									Waters of Wellness
								</span>
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
							{NAV_LINKS.sort((a, b) => a.sortOrder - b.sortOrder).map(
								(link) => (
									<NavLink
										key={link.label}
										end
										to={link.href}
										onClick={closeMobileMenu}
										className={({ isActive }) =>
											navLinkClassName(isActive, navItemHoverClass(false))
										}
										viewTransition
									>
										{link.label}
									</NavLink>
								),
							)}
							<ServicesMenu variant="inline" onNavigate={closeMobileMenu} />
						</nav>
					</div>
					{/* Logo */}
					<div className="flex justify-center">
						<Link className="" to={href("/")} viewTransition>
							<img
								src="/waters-of-wellness.svg"
								alt="Waters of Wellness"
								className="w-30 h-30 mb-3"
							/>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};
