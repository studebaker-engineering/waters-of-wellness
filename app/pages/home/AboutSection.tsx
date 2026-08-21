import { Link } from "react-router";
import gina from "@/assets/gina.jpeg";
import { BioCard } from "@/components/BioCard";
import { EntranceText } from "@/components/EntranceText";
import { ArrowRightIcon } from "@/components/icons";
import { TestimonialCard } from "./TestimonialCard";

export const AboutSection = () => (
	<section className="mb-10">
		<EntranceText>Meet Gina</EntranceText>
		<div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:items-start mt-2">
			<BioCard
				imageSrc={gina}
				imageAlt="Gina R. Cunningham"
				className="col-span-2"
			>
				<p className="font-semibold">
					At Waters of Wellness, Gina is dedicated to guiding you on your
					journey.
				</p>
				<p className="text-sm">
					Focused on nurturing the body, mind, and spirit, Gina offers
					personalized care tailored to your individual needs and goals. With
					thoughtful and professional guidance, you can feel informed,
					comfortable and supported throughout your experience.
				</p>
				<Link
					to="/about"
					className="group inline-flex items-center gap-1 text-sm font-medium transition-hover mt-1 hover:font-semibold"
					viewTransition
				>
					<span className="underline underline-offset-2">
						Learn more about Gina
					</span>
					<span className="transition-transform group-hover:translate-x-1">
						<ArrowRightIcon size={16} tailwindFillColorClass="text-ink" />
					</span>
				</Link>
				<div className="mt-auto flex gap-3 pt-3">
					<div>
						<p className="text-xs font-medium uppercase tracking-wide opacity-60">
							Accredited
						</p>
						<span className="inline-block mt-1 bg-seafoam-100 text-ink rounded-full px-2 py-0.5 text-xs font-medium">
							Clayton College
						</span>
					</div>
					<div>
						<p className="text-xs font-medium uppercase tracking-wide opacity-60">
							In practice
						</p>
						<span className="inline-block mt-1 bg-seafoam-100 text-ink rounded-full px-2 py-0.5 text-xs font-medium">
							Since 2005
						</span>
					</div>
				</div>
			</BioCard>
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
