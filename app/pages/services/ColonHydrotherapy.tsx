import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
};

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
				{ label: "Learn More", targetId: ANCHOR_CONFIG.learnMore },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto" id={ANCHOR_CONFIG.learnMore}>
				<EntranceText>What is Colon Hydrotherapy?</EntranceText>
				<p className="mb-5 text-lg">
					Colon hydrotherapy, often called colonic irrigation, is a soothing
					process that helps cleanse your colon by gently flushing out waste.
					This practice can aid in improving digestion, increasing energy, and
					promoting a balanced gut. As you embark on this journey, you'll likely
					notice a feeling of lightness and rejuvenation. It's a refreshing way
					to support your body's natural detoxification process, leaving you
					feeling revitalized and more in tune with your body's wellness.
				</p>

				<EntranceText>How does it work?</EntranceText>
				<p className="mb-5 text-lg">
					Infusing filtered and temperature regulated water into the colon, the
					waste is softened and loosened, resulting in evacuation through a
					natural action called peristalsis. The inflow of water and the release
					of waste, is repeated several times throughout your treatment. The
					removal of waste encourages better colon function and elimination.
				</p>
			</section>
		</div>
	</>
);

export default ColonHydrotherapy;
