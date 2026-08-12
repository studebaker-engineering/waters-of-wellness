import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ColonHydrotherapy = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("cht") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Colon
					<br />
					Hydrotherapy
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about colon hydrotherapy and your visit."
			links={[
				{
					label: "Book your session",
					targetId: BOOKING_LINK,
					isCta: true,
					sortOrder: 0,
				},
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
