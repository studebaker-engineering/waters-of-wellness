import { EntranceText } from "@/components/EntranceText";
import { TestimonialCard } from "./TestimonialCard";

export const AboutSection = () => (
	<section className="mb-10">
		<EntranceText text="Meet Gina" />
		<div className="grid gap-3 lg:grid-cols-4 mt-2">
			<div className="col-span-2">
				<TestimonialCard reviewerName="Tiffany F.">
					Gina provides outstanding care and is very knowledgeable! I've been
					seeing her regularly as a client for 2 years, and I always feel so
					much better after an appointment. She is very attentive, and her
					facilities are very clean and put you at ease. I not only recommend
					colon hydrotherapy for your health but also wholeheartedly recommend
					Gina as your therapist.
				</TestimonialCard>
				<TestimonialCard reviewerName="Alicia C.">
					I have been coming to Gina now for almost two years for my monthly
					session. The results have been amazing, after each session I feel so
					much relief and the bloating in stomach goes away. Gina has made this
					process so easy. We discussed my diet, supplements and vitamins I can
					take to support my body. She has been super resourceful, patient and
					friendly. My body feels better and I’m grateful to her for the
					support.
				</TestimonialCard>
			</div>
		</div>
	</section>
);
