import chtHero from "@/assets/cht-hero.jpg";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";

const ColonHydrotherapy = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", src: chtHero }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Colon
					<br />
					Hydrotherapy
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
				<EntranceText>Content goes here</EntranceText>
			</section>
		</div>
	</>
);

export default ColonHydrotherapy;
