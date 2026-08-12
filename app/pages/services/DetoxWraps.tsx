import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
};

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
				{ label: "Learn more", targetId: ANCHOR_CONFIG.learnMore },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto" id={ANCHOR_CONFIG.learnMore}>
				<EntranceText>What is a Lymphatic Contour Body Wrap?</EntranceText>
				<p className="mb-5 text-lg">
					Detox wraps cleanse the liquid waste system in your body, better known
					as your Lymphatic system. It is also referred to as "The River of
					Life". This system collects any waste materials in the tissues and
					produces anti-bodies to fight infections.
				</p>
				<p className="mb-5 text-lg">
					It aids in the removal of cellulite by softening, breaking down and
					freeing trapped toxins and waste materials in the connective tissue
					through normal body function. The body contour wrap stimulates the
					lymphatic system to the circulatory system, then the liver and kidneys
					filter out toxins to be eliminated.
				</p>
			</section>
		</div>
	</>
);

export default DetoxWraps;
