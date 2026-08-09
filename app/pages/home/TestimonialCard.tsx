import type { ReactNode } from "react";

interface TestimonialCardProps {
	reviewerName: string;
	children: ReactNode;
}

export const TestimonialCard = ({
	reviewerName,
	children,
}: TestimonialCardProps) => (
	<div className="group bg-seafoam-50 hover:bg-seafoam-100 transition-colors rounded-lg p-3 justify-between flex flex-col">
		<p className="font-roca font-extralight">&quot;{children}&quot;</p>
		<p className="text-sm mt-2 font-medium">&ndash; {reviewerName}</p>
	</div>
);
