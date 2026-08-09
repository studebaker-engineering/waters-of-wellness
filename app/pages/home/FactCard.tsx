import type { ReactNode } from "react";

interface FactCardProps {
	title: string;
	children: ReactNode;
	tailwindBgColorClass: string;
	className?: string;
}

export const FactCard = ({
	title,
	children,
	tailwindBgColorClass,
	className = "",
}: FactCardProps) => (
	<div className={`rounded-lg p-3 lg:p-5 ${tailwindBgColorClass} ${className}`}>
		<h3 className="text-lg font-medium">{title}</h3>
		<p className="text-sm mt-1">{children}</p>
	</div>
);
