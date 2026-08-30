import { EntranceText } from "@/components/EntranceText";
import { StepCard } from "./StepCard";

export const PathSection = () => (
	<section className="mb-10">
		<EntranceText>The Path to Wellness</EntranceText>
		<p className="text-sm opacity-70 mt-2">This is our simple process.</p>

		<div className="relative mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
			<div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-tidewater-200" />

			<StepCard step={1} title="Get connected">
				Schedule a consultation to discuss goals, ask questions, and feel
				confident about what to expect.
			</StepCard>

			<StepCard step={2} title="Personalized care">
				Create a unique wellness plan that best supports your needs.
			</StepCard>

			<StepCard step={3} title="Find your rhythm">
				Settle into a comfortable routine at a pace that evolves alongside your
				needs and goals.
			</StepCard>
		</div>
	</section>
);
