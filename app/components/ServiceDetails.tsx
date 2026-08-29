import type { ReactNode } from "react";
import { href, Link } from "react-router";
import { EntranceText } from "@/components/EntranceText";
import { WatersOfWellnessIcon } from "@/components/icons";

interface ServiceDetailsProps {
	id?: string;
	duration: string;
	investment: string;
	deposit: string;
	preparation: string[];
	disclaimer: ReactNode;
}

const CheckIcon = () => (
	<svg
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		className="w-5 h-5 shrink-0 mt-0.5 text-tidewater-200"
		viewBox="0 0 24 24"
	>
		<title>Included</title>
		<path d="M5 13l4 4L19 7" />
	</svg>
);

export const ServiceDetails = ({
	id,
	duration,
	investment,
	deposit,
	preparation,
	disclaimer,
}: ServiceDetailsProps) => {
	const stats = [
		{ label: "Duration", value: duration },
		{ label: "Investment", value: investment },
		{ label: "Deposit", value: deposit },
	];

	return (
		<section className="mx-auto" id={id}>
			<EntranceText>Plan Your Visit</EntranceText>

			<div className="mt-3 grid grid-cols-3 gap-3">
				{stats.map(({ label, value }) => (
					<div
						key={label}
						className="relative overflow-hidden bg-seafoam-100 rounded-lg p-3 lg:p-5 text-center"
					>
						<div className="absolute inset-0 flex items-center justify-center">
							<WatersOfWellnessIcon
								size={96}
								tailwindFillColorClass="fill-seafoam-300/15 h-auto"
							/>
						</div>
						<div className="relative z-10">
							<span className="text-xs uppercase tracking-wide opacity-60 block">
								{label}
							</span>
							<span className="text-lg lg:text-2xl font-medium">{value}</span>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 flex flex-col gap-8 lg:flex-row">
				<div className="lg:w-1/2">
					<h3 className="text-xl font-medium mb-3">Preparing for your visit</h3>
					<ul className="flex flex-col gap-3">
						{preparation.map((item) => (
							<li key={item} className="flex items-start gap-2 text-lg">
								<CheckIcon />
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

			<p className="mt-8 text-lg">
				Still have questions? Visit our{" "}
				<Link
					className="underline"
					to={href("/frequently-asked-questions")}
					viewTransition
				>
					FAQ page
				</Link>{" "}
				or{" "}
				<Link className="underline" to={href("/contact")} viewTransition>
					get in touch
				</Link>
				.
			</p>
		</section>
	);
};
