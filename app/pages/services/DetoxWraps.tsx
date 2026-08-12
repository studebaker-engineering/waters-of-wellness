import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const DetoxWraps = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("detox") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Lymphatic Contour
					<br />
					Body Wraps
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about detoxifying lymphatic contour wraps and your visit."
			links={[
				{
					label: "Book your session",
					targetId: BOOKING_LINK,
					isCta: true,
					sortOrder: 0,
				},
				{ label: "Getting Started", targetId: "getting-started" },
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
