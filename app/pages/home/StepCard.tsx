import type { ReactNode } from "react";
import { WatersOfWellnessIcon } from "@/components/icons";

interface StepCardProps {
	step: number;
	title: string;
	children: ReactNode;
}

export const StepCard = ({ step, title, children }: StepCardProps) => (
	<div className="group relative z-10 flex flex-col items-center gap-3 text-center">
		<div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-tidewater-200 ring-4 ring-linen-50 shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out group-hover:scale-110">
			<WatersOfWellnessIcon
				size={40}
				tailwindFillColorClass="fill-tidewater-100/10 absolute lg:size-15"
			/>
			<span className="relative font-roca text-2xl lg:text-3xl leading-none text-tidewater-900 translate-y-[0.08em]">
				{step}
			</span>
		</div>
		<div>
			<h3 className="text-lg font-medium capitalize">{title}</h3>
			<p className="text-sm opacity-70 max-w-56">{children}</p>
		</div>
	</div>
);
