import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { ServiceDetails, ServiceQuestions } from "@/components/services";
import { colonHydrotherapyQuestions } from "@/config/services";

import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
	planYourVisit: "plan-your-visit",
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
				{ label: "Plan Your Visit", targetId: ANCHOR_CONFIG.planYourVisit },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto mb-10 text-lg" id={ANCHOR_CONFIG.learnMore}>
				<EntranceText>What is an Ionic Foot Bath?</EntranceText>
				<p className="mb-5">
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

			<ServiceDetails
				id={ANCHOR_CONFIG.planYourVisit}
				description={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				}
				preparation={[
					"Avoid a heavy meal in the 2 hours before your appointment.",
					"Drink plenty of water throughout the day.",
					"Wear comfortable, easy-to-remove clothing.",
					"Arrive 10 minutes early to settle in before your session.",
				]}
				disclaimer={
					<>
						Ionic footh baths are not a substitute for medical care. Please let
						us know about any medical conditions, recent surgeries, or
						medications before your visit, as certain conditions may make this
						service unsuitable. When in doubt, check with your physician first.
					</>
				}
			/>

			<ServiceQuestions
				questions={colonHydrotherapyQuestions.questions}
				serviceLinkType={colonHydrotherapyQuestions.serviceLinkType}
			/>
		</div>
	</>
);

export default IonicFootDetox;
