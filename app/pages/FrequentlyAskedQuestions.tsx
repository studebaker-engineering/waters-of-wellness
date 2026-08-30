import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { RevealSection } from "@/components/RevealSection";
import { heroImageSources } from "@/lib/media";

const LOREM =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

interface FaqSection {
	id: string;
	title: string;
	questions: string[];
}

const FAQ_SECTIONS: FaqSection[] = [
	{
		id: "colon-hydrotherapy",
		title: "Colon Hydrotherapy",
		questions: [
			"What is colon hydrotherapy?",
			"How does it work?",
			"What type of system is used?",
			"Is the session practitioner-administered?",
			"Is colon hydrotherapy the same as an enema?",
			"Does the process hurt?",
		],
	},
	{
		id: "your-first-visit",
		title: "Your First Visit",
		questions: [
			"What should I expect during my first appointment?",
			"How long does an initial session take?",
			"Will the practitioner remain present?",
			"What should I wear?",
			"Is the experience private?",
			"Can I ask questions during the session?",
		],
	},
	{
		id: "preparing-aftercare",
		title: "Preparing & Aftercare",
		questions: [
			"How should I prepare?",
			"Should I eat before my appointment?",
			"What should I drink beforehand?",
			"What should I expect afterward?",
			"When can I return to normal activities?",
			"Are there any aftercare recommendations?",
		],
	},
	{
		id: "safety-eligibility",
		title: "Safety & Eligibility",
		questions: [
			"Is colon hydrotherapy safe?",
			"Who should not receive colon hydrotherapy?",
			"Do I need approval from a medical provider?",
			"Can I book while pregnant?",
			"What sanitation practices are followed?",
			"Are single-use components used?",
		],
	},
	{
		id: "sessions-results",
		title: "Sessions & Results",
		questions: [
			"How many sessions will I need?",
			"How often should I schedule?",
			"Will I lose weight?",
			"When might I notice a difference?",
			"Does everyone have the same experience?",
			"Can colon hydrotherapy replace medical care?",
		],
	},
	{
		id: "holistic-services",
		title: "Holistic Services",
		questions: [
			"What is a lymphatic detox wrap?",
			"What should I expect during a wrap?",
			"What is an ionic foot detox?",
			"Can the ionic foot bath be booked by itself?",
			"Can services be combined?",
			"How long do the services take?",
		],
	},
	{
		id: "booking-policies",
		title: "Booking & Policies",
		questions: [
			"How do I book?",
			"Which session should a client choose?",
			"What are the prices?",
			"What is the cancellation policy?",
			"What happens if I arrive late?",
			"How can I contact the practice before booking?",
		],
	},
];

const slugify = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

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
			subtext="Explore helpful information about our services, safety, and what you can expect during your visit."
			links={FAQ_SECTIONS.map((section) => ({
				label: section.title,
				targetId: section.id,
			}))}
		/>
		<div className="container p-5 mx-auto">
			{FAQ_SECTIONS.map((section) => (
				<section
					key={section.id}
					id={section.id}
					className="mx-auto mb-12 px-5 py-10 rounded-lg bg-seafoam-100"
				>
					<h2 className="text-2xl lg:text-3xl">{section.title}</h2>
					<div>
						{section.questions.map((question) => (
							<RevealSection
								key={question}
								id={`${section.id}-${slugify(question)}`}
								title={question}
							>
								<p>{LOREM}</p>
							</RevealSection>
						))}
					</div>
				</section>
			))}
		</div>
	</>
);

export default FrequentlyAskedQuestions;
