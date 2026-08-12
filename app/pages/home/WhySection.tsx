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
						title="Ancient roots"
						tailwindBgColorClass="bg-tidewater-100"
						className="w-4/5 self-start relative z-10 lg:w-3/4"
					>
						Colonics have been documented as far back as 1500 BCE amongst
						Egyptian physicians, throughout ancient Rome and all the way to
						modern times under modern medical practice.
					</FactCard>
					<FactCard
						title="Embraced across cultures"
						tailwindBgColorClass="bg-tidewater-100"
						className="w-4/5 self-end"
					>
						Hippocrates recommended enemas regularly, Avicenna praised them
						across the Arab world, and Ayurvedic surgeons in India were
						describing rectal instruments as early as the 6th century BCE.
					</FactCard>
					<FactCard
						title="Held to modern standards"
						tailwindBgColorClass="bg-tidewater-100"
						className="w-4/5 self-start"
					>
						Today's colon hydrotherapy relies on FDA-regulated equipment with
						sterile, single-use tubing for every session, administered only by
						certified therapists trained in safe practice.
					</FactCard>
				</div>
			</div>

			<BookingBanner title="Start with a call" className="mt-5">
				Reach out to rejuvenate your body and spirit at our Baltimore sanctuary
				where wellness and tranquility meet.
			</BookingBanner>
		</section>
	);
};
