import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { RevealSection } from "@/components/RevealSection";
import { heroImageSources } from "@/lib/media";

const LOREM =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const FrequentlyAskedQuestions = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("faq") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Frequently
					<br />
					Asked Questions
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about colon hydrotherapy and your visit."
			links={[
				{ label: "Getting Started", targetId: "getting-started" },
				{ label: "Preparing for Your Visit", targetId: "preparing" },
				{ label: "Safety & Comfort", targetId: "safety" },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto">
				<RevealSection id="getting-started" title="What is colon hydrotherapy?">
					<p>{LOREM}</p>
				</RevealSection>
				<RevealSection
					id="preparing"
					title="How should I prepare for my visit?"
				>
					<p>{LOREM}</p>
				</RevealSection>
				<RevealSection id="safety" title="Is colon hydrotherapy safe?">
					<p>{LOREM}</p>
				</RevealSection>
			</section>
		</div>
	</>
);

export default FrequentlyAskedQuestions;
