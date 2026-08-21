import { Link } from "react-router";
import shoreHeroPoster from "@/assets/shore-hero-poster.jpg";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK, heroVideoUrl, PHONE_HREF } from "@/lib";

export const HeroSection = () => (
	<Hero
		size="large"
		media={{
			type: "video",
			poster: shoreHeroPoster,
			sources: [
				{
					src: heroVideoUrl("shore-hero-540p.mp4"),
					media: "(max-width: 640px)",
				},
				{
					src: heroVideoUrl("shore-hero-720p.mp4"),
					media: "(max-width: 1024px)",
				},
				{
					src: heroVideoUrl("shore-hero-1080p.mp4"),
					media: "(max-width: 1536px)",
				},
				{
					src: heroVideoUrl("shore-hero-1440p.mp4"),
					media: "(max-width: 2560px)",
				},
				{ src: heroVideoUrl("shore-hero-2160p.mp4") },
			],
		}}
		title={
			<EntranceText as="h1" className="md:text-6xl">
				Begin Your
				<br />
				Journey to Wellness
			</EntranceText>
		}
		subtext={
			<>
				Return to a sense of balance through personalized colon hydrotherapy and
				holistic wellness.
				<br />
				Guided by 20 years of FDA-approved practitioner care serving Baltimore,
				Maryland.
			</>
		}
		cta={
			<>
				<a
					href={BOOKING_LINK}
					target="_blank"
					rel="noopener"
					className="bg-seafoam-100 hover:bg-seafoam-200 text-ink rounded-full px-5 py-2 md:w-60 w-2/3 text-center transition-hover font-medium"
				>
					Book Now
				</a>
				<a
					href={PHONE_HREF}
					target="_blank"
					rel="noopener"
					className="md:hidden border border-seafoam-100 hover:bg-seafoam-50/15 rounded-full px-5 py-2 w-1/3 text-center transition-hover font-medium"
				>
					Call
				</a>
				{/* Non-mobile link  */}
				<Link
					to="/about"
					className="hidden md:inline border border-seafoam-100 hover:bg-seafoam-50/15 rounded-full px-5 py-2 min-w-40 text-center transition-hover font-medium"
					viewTransition
				>
					How sessions work
				</Link>
			</>
		}
		excludeScrollIndicator={true}
	/>
);
