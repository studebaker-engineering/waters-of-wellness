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
			subtext="A restorative body treatment that combines gentle compression with attentive care for a refreshed, contoured feeling."
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
			<section className="mx-auto mb-10" id={ANCHOR_CONFIG.learnMore}>
				<EntranceText>What is a Lymphatic Detox Wrap?</EntranceText>
				<p className="mb-5 text-lg">
					A lymphatic contour body wrap is a non-invasive wellness treatment in
					which the body is carefully wrapped, creating consistent compression
					to filter out toxins through the body’s lymphatic system. Aiding in
					the removal of cellulite, this system produces anti-bodies to fight
					infections from the lymphatic system to the circulatory system,
					followed by the liver and kidneys natural filtering of toxins to be
					eliminated.
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
						Lymphatic detox wraps are not a substitute for medical care. Please
						let us know about any medical conditions, recent surgeries, or
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

export default DetoxWraps;
