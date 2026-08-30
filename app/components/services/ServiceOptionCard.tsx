import { WatersOfWellnessIcon } from "../icons";

interface ServiceOptionCardProps {
	title: string;
	value: string;
}

export const ServiceOptionCard = ({ title, value }: ServiceOptionCardProps) => (
	<div className="relative overflow-hidden bg-seafoam-100 rounded-lg p-3 lg:p-5 text-center transition-transform duration-300 ease-out hover:-translate-y-1">
		<div className="absolute inset-0 flex items-center justify-center">
			<WatersOfWellnessIcon
				size={96}
				tailwindFillColorClass="fill-seafoam-300/15 h-auto"
			/>
		</div>
		{/* Stats */}
		<div className="relative z-10">
			<span className="text-xs uppercase tracking-wide opacity-60 block">
				{title}
			</span>
			<span className="text-md lg:text-2xl font-medium">{value}</span>
		</div>
	</div>
);
