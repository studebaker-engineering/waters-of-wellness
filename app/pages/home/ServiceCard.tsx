import { Link } from "react-router";
import { AngleRightIcon } from "@/components/icons";
import type { ServiceCardConfig } from "@/types";

export const ServiceCard = ({
	title,
	children,
	icon,
	to,
}: ServiceCardConfig) => (
	<Link
		to={to}
		className="group h-full bg-linen-100 hover:bg-linen-150 transition-colors rounded-lg p-3 flex justify-between items-center gap-3"
	>
		{/* Icon and text */}
		<div className="flex items-center gap-3">
			<div className="w-12 h-12 aspect-square bg-seafoam-100 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
				{icon}
			</div>
			<div>
				<h3 className="text-base font-medium capitalize">{title}</h3>
				<p className="text-sm">{children}</p>
			</div>
		</div>

		{/* Angle link */}
		<div className="transition-transform group-hover:translate-x-1">
			<AngleRightIcon size={24} tailwindFillColorClass="fill-black" />
		</div>
	</Link>
);
