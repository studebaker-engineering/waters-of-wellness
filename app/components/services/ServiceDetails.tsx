import type { ReactNode } from "react";
import { EntranceText } from "@/components/EntranceText";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { BOOKING_LINK } from "@/lib";
import { ServiceOptionCard } from "./ServiceOptionCard";

interface ServiceDetailsProps {
	id: string;
	description: string;
	disclaimer: ReactNode;
	preparation: string[];
	serviceOptions?: ServiceOption[];
}

interface ServiceOption {
	title: string;
	subtitle: string;
	duration: number;
	price: number;
	deposit: number;
}

export const ServiceDetails = ({
	id,
	preparation,
	disclaimer,
	serviceOptions,
	description,
}: ServiceDetailsProps) => {
	return (
		<section className="mx-auto mb-10" id={id}>
			<EntranceText>Plan Your Visit</EntranceText>
			<p className="text-lg">{description}</p>

			{serviceOptions?.map((option) => (
				<div
					key={option.title}
					className="mt-5 bg-seafoam-100/25 p-5 rounded-lg"
				>
					<div className="flex justify-between md:flex-row flex-col">
						<div>
							<h3 className="font-normal">{option.title}</h3>
							<p>{option.subtitle}</p>
						</div>

						<a
							href={BOOKING_LINK}
							target="_blank"
							rel="noopener"
							className="group inline-flex items-center gap-1 text-sm font-medium transition-hover mt-1 hover:font-semibold"
						>
							<span className="underline underline-offset-2">Book now</span>
							<span className="transition-transform group-hover:translate-x-1">
								<ArrowRightIcon size={16} tailwindFillColorClass="text-ink" />
							</span>
						</a>
					</div>

					<div className="mt-3 grid grid-cols-3 gap-3">
						<ServiceOptionCard
							title="Duration"
							value={`${option.duration} min.`}
						/>
						<ServiceOptionCard title="price" value={`$${option.price}`} />
						<ServiceOptionCard title="Deposit" value={`$${option.deposit}`} />
					</div>
				</div>
			))}

			<div className="mt-8 flex flex-col gap-8 lg:flex-row">
				<div className="lg:w-1/2">
					<h3 className="text-xl font-medium mb-3">Preparing for your visit</h3>
					<ul className="flex flex-col gap-3">
						{preparation.map((item) => (
							<li key={item} className="flex items-start gap-2 text-lg">
								<CheckIcon
									size={20}
									tailwindFillColorClass="shrink-0 mt-0.5 text-tidewater-200"
								/>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>

				<hr className="border-seafoam-100 lg:border-t-0 lg:border-l lg:self-stretch lg:h-auto" />

				<div className="lg:w-1/2 bg-linen-100 rounded-lg p-5 h-fit">
					<h3 className="text-xs uppercase tracking-wide opacity-60 font-semibold mb-2">
						Health note
					</h3>
					<p className="text-md">{disclaimer}</p>
				</div>
			</div>
		</section>
	);
};
