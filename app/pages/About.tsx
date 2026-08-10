import aboutHero from "@/assets/about-hero.jpg";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { RevealSection } from "@/components/RevealSection";

const LOREM =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const About = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", src: aboutHero }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Welcome to <br /> Waters of Wellness
				</EntranceText>
			}
			subtext="Meet Gina and learn how Waters of Wellness supports your journey to digestive wellness."
			links={[
				{ label: "Meet Gina", targetId: "meet-gina" },
				{ label: "Our Approach", targetId: "our-approach" },
				{ label: "What to Expect", targetId: "what-to-expect" },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="max-w-2xl mx-auto">
				<RevealSection id="meet-gina" title="Meet Gina">
					<p>{LOREM}</p>
				</RevealSection>
				<RevealSection id="our-approach" title="Our Approach">
					<p>{LOREM}</p>
				</RevealSection>
				<RevealSection id="what-to-expect" title="What to Expect">
					<p>{LOREM}</p>
				</RevealSection>
			</section>
		</div>
	</>
);

export default About;
