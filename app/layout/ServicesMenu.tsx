import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { SERVICE_LINKS } from "@/config";
import { gsap } from "@/lib/gsap";

interface ServicesMenuProps {
	variant: "popover" | "inline";
	onNavigate?: () => void;
	isHome?: boolean;
}

export const ServicesMenu = ({
	variant,
	onNavigate,
	isHome = false,
}: ServicesMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);

	const open = () => {
		setIsMounted(true);
		setIsOpen(true);
	};

	const close = () => setIsOpen(false);

	useGSAP(() => {
		if (!panelRef.current) return;
		if (isOpen) {
			gsap.fromTo(
				panelRef.current,
				{ y: -12, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
			);
		} else if (isMounted) {
			gsap.to(panelRef.current, {
				y: -12,
				opacity: 0,
				duration: 0.3,
				ease: "power2.in",
				onComplete: () => setIsMounted(false),
			});
		}
	}, [isOpen]);

	return (
		<div
			className={variant === "popover" ? "relative" : ""}
			role="none"
			tabIndex={-1}
			onBlur={(event) => {
				if (
					variant === "popover" &&
					!event.currentTarget.contains(event.relatedTarget)
				) {
					close();
				}
			}}
		>
			<button
				type="button"
				className={`flex items-center cursor-pointer focus:outline-none transition-hover px-0 ${
					isHome ? "hover:text-seafoam-200" : "hover:text-gray-900"
				}`}
				onClick={() => (isOpen ? close() : open())}
				aria-expanded={isOpen}
			>
				Services
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className={`w-4 h-4 ml-1 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
					viewBox="0 0 24 24"
				>
					<title>Dropdown Arrow</title>
					<path d="M6 9l6 6 6-6"></path>
				</svg>
			</button>
			{isMounted && (
				<div
					ref={panelRef}
					className={
						variant === "popover"
							? "absolute left-0 top-full mt-2 flex flex-col items-start border border-seafoam-100 bg-seafoam-50/15 rounded shadow-md py-2 z-10 min-w-max"
							: "flex flex-col items-start gap-y-3 mt-3"
					}
				>
					{SERVICE_LINKS.map((item) => (
						<NavLink
							key={item.label}
							end
							to={item.href}
							onClick={onNavigate}
							className={({ isActive }) =>
								`${
									variant === "popover"
										? "w-full text-left px-4 py-1 hover:text-seafoam-200"
										: "hover:text-gray-900"
								} cursor-pointer transition-hover ${
									isActive ? "font-semibold" : ""
								}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};
