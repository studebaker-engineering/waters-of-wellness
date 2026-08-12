import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
};

const IonicFootDetox = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("ifd") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Ionic Foot
					<br />
					Detox Baths
				</EntranceText>
			}
			subtext="Answers to the questions we hear most about ionic foot detox and your visit."
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
				<EntranceText>What is an Ionic Foot Bath?</EntranceText>
				<p className="mb-5 text-lg">
					Step into a world of relaxation with an Ionic Foot Bath. This soothing
					treatment gently draws out impurities while promoting a sense of
					balance and well-being. As your feet soak, the ionization process
					helps to enhance your body's natural detoxification, leaving you
					feeling refreshed and rejuvenated. Perfect for those seeking a
					tranquil escape, this simple yet effective therapy supports a holistic
					approach to wellness, nurturing both body and mind.
				</p>
				<p>
					Please note this is an add-on service and may only be booked through
					Gina in conjunction with a colon hydrotherapy or wrap session
				</p>
			</section>
		</div>
	</>
);

export default IonicFootDetox;
