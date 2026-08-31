import type { ReactNode } from "react";
import { ToggleIcon } from "./icons";

interface RevealSectionProps {
	id: string;
	title: string;
	children: ReactNode;
	variant?: "large" | "small";
}

export const RevealSection = ({
	id,
	title,
	children,
	variant = "large",
}: RevealSectionProps) => {
	const sizeStyles =
		variant === "large" ? "text-xl lg:text-2xl" : "text-lg lg:text-xl";

	return (
		<details id={id} className="group border-b border-seafoam-200 py-5">
			<summary className="flex cursor-pointer list-none items-center justify-between transition-hover hover:text-stone-700 [&::-webkit-details-marker]:hidden">
				<h3 className={`${sizeStyles} font-light`}>{title}</h3>
				<ToggleIcon />
			</summary>
			<div className="mt-3 text-stone-500">{children}</div>
		</details>
	);
};
