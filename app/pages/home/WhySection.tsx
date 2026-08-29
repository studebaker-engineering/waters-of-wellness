import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { BookingBanner } from "@/components/BookingBanner";
import { EntranceText } from "@/components/EntranceText";
import { dockPhotoSrcSet, dockPhotoUrl, gsap } from "@/lib";
import { FactCard } from "./FactCard";

export const WhySection = () => {
	const factsRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!factsRef.current) return;

			gsap.from(factsRef.current.querySelectorAll(".fact-card"), {
				opacity: 0,
				y: 24,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.15,
				clearProps: "transform",
				scrollTrigger: {
					trigger: factsRef.current,
					start: "top 80%",
				},
			});
		},
		{ scope: factsRef },
	);

	return (
		<section className="mb-10">
			<EntranceText>Why Colon Hydrotherapy?</EntranceText>
			<div className="mt-2 flex flex-col-reverse gap-6 lg:flex-row lg:items-center">
				<div className="w-full lg:w-1/2">
					<img
						src={dockPhotoUrl(1200)}
						srcSet={dockPhotoSrcSet}
						sizes="(min-width: 1024px) 50vw, 100vw"
						alt="Dock overlooking the water by Mick Kirchman"
						className="w-full aspect-4/3 object-cover rounded-lg"
					/>
				</div>
				<div
					ref={factsRef}
					className="w-full lg:w-1/2 flex flex-col gap-3 justify-center lg:-ml-12"
				>
					<FactCard
						title="Gentle by design"
						tailwindBgColorClass="bg-seafoam-100"
						className="w-4/5 self-start relative z-10 lg:w-3/4"
					>
						Filtered, temperature-regulated water is introduced gradually,
						creating a controlled and carefully paced cleansing experience.
					</FactCard>
					<FactCard
						title="Attentive wellness"
						tailwindBgColorClass="bg-seafoam-100"
						className="w-4/5 self-end"
					>
						Sessions are personally administered and continuously monitored,
						offering guided practitioner support that allows the experience to
						be adjusted around comfort and individual response.
					</FactCard>
					<FactCard
						title="Ancient roots, modern care"
						tailwindBgColorClass="bg-seafoam-100"
						className="w-4/5 self-start"
					>
						With colon-cleansing documented across cultures for centuries,
						hydrotherapy honors a longstanding practice grounded in tradition
						with modern health standards. Professional guidance relies on
						FDA-regulated equipment administered by certified practitioners,
						ensuring your safety and privacy.
					</FactCard>
				</div>
			</div>

			<BookingBanner title="Have questions?" className="mt-5">
				Get the clarity you need to feel comfortable and informed. Reach out
				with your questions and find the right place to begin.
			</BookingBanner>
		</section>
	);
};
