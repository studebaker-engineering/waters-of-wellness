import { EntranceText } from "@/components/EntranceText";
import { StepCard } from "./StepCard";

export const PathSection = () => (
	<section className="mb-10">
		<EntranceText text="The Path to Wellness" />
		<p className="text-sm opacity-70 mt-2">This is our simple process.</p>

		<div className="relative mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
			<div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-tidewater-200" />

			<StepCard step={1} title="Book your evaluation">
				Schedule a personal consultation to get acquainted.
			</StepCard>

			<StepCard step={2} title="Personalized care">
				Partner with Gina to create your unique wellness plan.
			</StepCard>

			<StepCard step={3} title="Find renewal">
				Experience relief and boost your confidence.
			</StepCard>
		</div>
	</section>
);
