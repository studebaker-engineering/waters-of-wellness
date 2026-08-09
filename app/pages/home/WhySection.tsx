import { EntranceText } from "@/components/EntranceText";
import { FactCard } from "./FactCard";

export const WhySection = () => (
	<section className="mb-10">
		<EntranceText text="Why Colon Hydrotherapy?" />
		<div className="flex flex-col gap-3 mt-2 lg:grid lg:grid-cols-3">
			<FactCard
				title="Fact One Title"
				tailwindBgColorClass="bg-seafoam-100"
				className="w-4/5 self-start lg:w-full"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna.
			</FactCard>
			<FactCard
				title="Fact Two Title"
				tailwindBgColorClass="bg-seafoam-200"
				className="w-4/5 self-end lg:w-full lg:self-auto"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna.
			</FactCard>
			<FactCard
				title="Fact Three Title"
				tailwindBgColorClass="bg-seafoam-300"
				className="w-4/5 self-start lg:w-full"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna.
			</FactCard>
		</div>

		<div className="mt-3 bg-seafoam-900 text-seafoam-50 rounded-lg p-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:p-8">
			<div>
				<h3 className="text-2xl font-bold">Start with a call</h3>
				<p className="text-sm text-seafoam-50/80 mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna.
				</p>
			</div>
			<a
				href="https://watersofwellness.janeapp.com"
				target="_blank"
				rel="noopener"
				className="bg-seafoam-50 hover:bg-white text-ink rounded-full px-5 py-3 text-center font-medium transition-hover lg:shrink-0 lg:px-10"
			>
				Book now
			</a>
		</div>
	</section>
);
