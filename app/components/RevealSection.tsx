import type { ReactNode } from "react";

interface RevealSectionProps {
	id: string;
	title: string;
	children: ReactNode;
}

export const RevealSection = ({ id, title, children }: RevealSectionProps) => (
	<details id={id} className="group border-b border-seafoam-200 py-5">
		<summary className="flex cursor-pointer list-none items-center justify-between transition-hover hover:text-seafoam-700 [&::-webkit-details-marker]:hidden">
			<h2>{title}</h2>
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				className="w-5 h-5 shrink-0 ml-3 transition-transform group-open:rotate-180"
				viewBox="0 0 24 24"
			>
				<title>Toggle</title>
				<path d="M6 9l6 6 6-6" />
			</svg>
		</summary>
		<div className="mt-3 text-stone">{children}</div>
	</details>
);
