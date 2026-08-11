import contactHero from "@/assets/contact-hero.jpg";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";

export const FrequentlyAskedQuestions = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", src: contactHero }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Have a question?
					<br />
					Let's get in touch.
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about colon hydrotherapy and your visit."
			links={[
				{ label: "Getting Started", targetId: "getting-started" },
				{ label: "Preparing for Your Visit", targetId: "preparing" },
				{ label: "Safety & Comfort", targetId: "safety" },
			]}
			hasScrollIndicator={false}
		/>
	</>
);

export default FrequentlyAskedQuestions;
