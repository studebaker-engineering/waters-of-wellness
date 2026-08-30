import type { ReactNode } from "react";
import { EntranceText } from "@/components/EntranceText";

interface GinaBioSectionProps {
	title: string;
	children: ReactNode;
	id?: string;
	className?: string;
}

export const GinaBioSection = ({
	title,
	children,
	id,
	className = "",
}: GinaBioSectionProps) => (
	<section id={id} className={`mb-10 ${className}`}>
		<EntranceText>{title}</EntranceText>
		{children}
	</section>
);
