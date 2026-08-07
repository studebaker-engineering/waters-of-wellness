import type { ReactNode } from "react";
import { EntranceText } from "@/components/EntranceText";
import {
	AngleRightIcon,
	LotusIcon,
	MeditationIcon,
	SparkleIcon,
} from "@/components/icons";

interface ServiceCardProps {
	title: string;
	children: ReactNode;
	icon: ReactNode;
}

const ServiceCard = ({ title, children, icon }: ServiceCardProps) => (
	<div className="bg-linen-100 rounded-lg p-3 flex justify-between items-center gap-3 lg:mb-0 mb-3">
		{/* Icon and text */}
		<div className="flex items-center gap-3">
			<div className="w-12 h-12 aspect-square bg-seafoam-100 rounded-full flex items-center justify-center">
				{icon}
			</div>
			<div>
				<h3 className="text-base font-medium capitalize">{title}</h3>
				<p className="text-sm">{children}</p>
			</div>
		</div>

		{/* Angle link */}
		<div>
			<AngleRightIcon size={24} tailwindFillColorClass="fill-black" />
		</div>
	</div>
);

export const ServicesSection = () => (
	<section className="mb-10">
		<EntranceText text="Our Services" />
		<div className="lg:columns-3 lg:gap-3">
			<ServiceCard
				title="Cleansing colon hydrotherapy"
				icon={<MeditationIcon />}
			>
				Refresh your system and support digestive health with calming colon
				hydrotherapy sessions.
			</ServiceCard>

			<ServiceCard title="Revitalizing detox wraps" icon={<LotusIcon />}>
				Experience the soothing embrace of detox body wraps that help release
				toxins and rejuvenate the body.
			</ServiceCard>

			<ServiceCard title="Ionic foot detox" icon={<SparkleIcon />}>
				A salt footh bath intended to pull heavy metals and environmental toxins
				from the body via the feet through osmosis.
			</ServiceCard>
		</div>
	</section>
);
