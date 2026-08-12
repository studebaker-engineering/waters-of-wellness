import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK } from "@/lib";
import { heroImageSources } from "@/lib/media";

export const FrequentlyAskedQuestions = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("contact") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Have a question?
					<br />
					Let's get in touch.
				</EntranceText>
			}
			subtext="Reach out to rejuvenate your body and spirit at our Baltimore sanctuary, where wellness and tranquility meet."
			links={[
				{
					label: "Book an appointment",
					targetId: BOOKING_LINK,
					isCta: true,
					sortOrder: 0,
				},
				{
					label: "Get in touch",
					targetId: "contact-information",
					sortOrder: 1,
				},
			]}
		/>
	</>
);

export default FrequentlyAskedQuestions;
