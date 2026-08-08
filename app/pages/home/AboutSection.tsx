import { Link } from "react-router";
import gina from "@/assets/gina.jpeg";
import { EntranceText } from "@/components/EntranceText";
import { TestimonialCard } from "./TestimonialCard";

export const AboutSection = () => (
	<section className="mb-10">
		<EntranceText text="Meet Gina" />
		<div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:items-start mt-2">
			<div className="col-span-2 flex gap-3">
				<div className="w-1/2">
					<img
						src={gina}
						alt="Gina R. Cunningham"
						className="h-full w-full object-cover rounded-lg"
					/>
				</div>
				<div className="w-1/2 bg-linen-100 rounded-lg p-3 flex flex-col justify-center gap-2">
					<p className="font-semibold">
						At Waters of Wellness, Gina is dedicated to guiding you on your
						journey to wellness.
					</p>
					<p className="text-sm">
						With a focus on nurturing both body, mind and spirit, Gina offers
						personalized care that prioritizes your individual needs, helping
						you achieve balance and rejuvenation.
					</p>
					<Link
						to="/about"
						className="group inline-flex items-center gap-1 text-sm font-medium transition-hover hover:text-tidewater-600 mt-1"
					>
						<span className="underline underline-offset-2">
							Learn more about Gina
						</span>
						<span
							aria-hidden="true"
							className="transition-transform group-hover:translate-x-1"
						>
							&rarr;
						</span>
					</Link>
				</div>
			</div>
			<div className="col-span-2 flex flex-col gap-3">
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
