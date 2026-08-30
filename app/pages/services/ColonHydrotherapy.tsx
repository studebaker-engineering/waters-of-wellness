import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { ServiceDetails, ServiceQuestions } from "@/components/services";
import { colonHydrotherapyQuestions } from "@/config/services";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
	planYourVisit: "plan-your-visit",
	commonQuestions: "common-questions",
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
			subtext="Experience a gentle, water-based colon cleansing experience paced around your comfort and privacy."
			links={[
				{
					label: "Book your session",
					targetId: BOOKING_LINK,
					isCta: true,
					sortOrder: 0,
				},
				{ label: "Learn More", targetId: ANCHOR_CONFIG.learnMore },
				{ label: "Plan Your Visit", targetId: ANCHOR_CONFIG.planYourVisit },
				{ label: "Common Questions", targetId: ANCHOR_CONFIG.commonQuestions },
			]}
		/>
		<div className="container p-5 mx-auto">
			<section className="mx-auto" id={ANCHOR_CONFIG.learnMore}>
				<EntranceText>What is Colon Hydrotherapy?</EntranceText>
				<p className="mb-5 text-lg">
					Colon hydrotherapy, often called colonic irrigation, is a soothing
					process that helps cleanse your colon to aid in improving digestion,
					increasing energy, and promoting a balanced gut. This process uses
					filtered, temperature-regulated water through a closed system to
					soften and evacuate waste from the colon, a natural action known as
					peristalsis. The inflow of water and the release of waste is repeated
					several times throughout your treatment, supporting your body’s
					natural detoxification process. Each session offers a controlled,
					private cleansing experience that is carefully monitored throughout
					and designed to leave you feeling revitalized, rejuvenated, and more
					in tune with your body’s wellness.
				</p>
			</section>

			<ServiceDetails
				id={ANCHOR_CONFIG.planYourVisit}
				preparation={[
					"Avoid a heavy meal in the 2 hours before your appointment.",
					"Drink plenty of water throughout the day.",
					"Wear comfortable, easy-to-remove clothing.",
					"Arrive 10 minutes early to settle in before your session.",
				]}
				description={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				}
				serviceOptions={[
					{
						title: "Initial Colon Hydrotherapy Session",
						subtitle: "First time session, including consultation.",
						duration: 90,
						price: 160,
						deposit: 80,
					},
					{
						title: "90 Minute Follow-Up Session",
						subtitle: "Extended treatment for existing patients.",
						duration: 90,
						price: 160,
						deposit: 80,
					},
					{
						title: "60 Minute Follow-Up Session",
						subtitle: "Treatment for existing patients.",
						duration: 60,
						price: 140,
						deposit: 70,
					},
				]}
				disclaimer={
					<p>
						Certain health conditions, medications, pregnancy and recent medical
						procedures may affect your eligibility for colon hydrotherapy.
						Contact Waters of Wellness with any questions or concerns before
						scheduling.
					</p>
				}
			/>

			<ServiceQuestions
				questions={colonHydrotherapyQuestions.questions}
				serviceLinkType={colonHydrotherapyQuestions.serviceLinkType}
			/>
		</div>
	</>
);

export default ColonHydrotherapy;
