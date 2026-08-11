import detoxHero from "@/assets/detox-hero.jpg";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";

const DetoxWraps = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", src: detoxHero }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Lymphatic Contour
					<br />
					Body Wraps
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about detoxifying lymphatic contour wraps and your visit."
			links={[
				{ label: "Getting Started", targetId: "getting-started" },
				{ label: "Preparing for Your Visit", targetId: "preparing" },
				{ label: "Safety & Comfort", targetId: "safety" },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto">
				<EntranceText>Content goes here</EntranceText>
			</section>
		</div>
	</>
);

export default DetoxWraps;
