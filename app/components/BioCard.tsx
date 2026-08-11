import type { ReactNode } from "react";

interface BioCardProps {
	imageSrc: string;
	imageAlt: string;
	children: ReactNode;
	tailwindBgColorClass?: string;
	className?: string;
}

export const BioCard = ({
	imageSrc,
	imageAlt,
	children,
	tailwindBgColorClass = "bg-seafoam-50",
	className = "",
}: BioCardProps) => (
	<div
		className={`rounded-lg p-3 lg:py-5 flex flex-col lg:flex-row gap-3 ${tailwindBgColorClass} ${className}`}
	>
		<div className="w-full lg:w-1/2">
			<img
				src={imageSrc}
				alt={imageAlt}
				className="w-full aspect-4/3 lg:aspect-auto lg:h-full object-cover rounded-lg"
			/>
		</div>
		<div className="w-full lg:w-1/2 flex flex-col gap-2">{children}</div>
	</div>
);
