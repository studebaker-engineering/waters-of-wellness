import type { ReactNode } from "react";
import type { IconConfig } from "@/types";

interface BaseIconProps extends IconConfig {
	title: string;
	children: ReactNode;
}

export const ICON_DEFAULTS: Required<IconConfig> = {
	size: 32,
	tailwindFillColorClass: "fill-tidewater-200",
};

export const BaseIcon = ({
	size = ICON_DEFAULTS.size,
	tailwindFillColorClass = ICON_DEFAULTS.tailwindFillColorClass,
	title,
	children,
}: BaseIconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={tailwindFillColorClass}
	>
		<title>{title}</title>
		{children}
	</svg>
);
