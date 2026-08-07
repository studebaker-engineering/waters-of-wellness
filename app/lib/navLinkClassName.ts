export const navLinkClassName = (isActive: boolean, base: string) =>
	isActive ? `${base} font-semibold` : base;

const hoverColorClass = (isHome: boolean) =>
	isHome ? "hover:text-seafoam-200" : "hover:text-gray-600";

export const navItemHoverClass = (isHome: boolean) =>
	`cursor-pointer transition-hover ${hoverColorClass(isHome)}`;
