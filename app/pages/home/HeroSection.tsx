import { Link } from "react-router";
import shoreHeroPoster from "@/assets/shore-hero-poster.jpg";
import { heroVideoUrl } from "@/lib";

export const HeroSection = () => (
	<section className="relative z-0 -mt-24 flex h-[80vh] items-center overflow-hidden text-seafoam-50">
		<video
			className="absolute inset-0 h-full w-full object-cover"
			poster={shoreHeroPoster}
			autoPlay
			loop
			muted
			playsInline
		>
			<source
				src={heroVideoUrl("shore-hero-mobile.mp4")}
				media="(max-width: 640px)"
				type="video/mp4"
			/>
			<source
				src={heroVideoUrl("shore-hero-480p.mp4")}
				media="(max-width: 1024px)"
				type="video/mp4"
			/>
			<source
				src={heroVideoUrl("shore-hero-720p.mp4")}
				media="(max-width: 1536px)"
				type="video/mp4"
			/>
			<source
				src={heroVideoUrl("shore-hero-1080p.mp4")}
				media="(max-width: 1920px)"
				type="video/mp4"
			/>
			<source src={heroVideoUrl("shore-hero-1440p.mp4")} type="video/mp4" />
		</video>
		{/* <div className="absolute inset-0 bg-gray-800/10" /> */}
		<div
			className="absolute inset-0 bg-noise animate-grain opacity-20 mix-blend-overlay pointer-events-none"
			aria-hidden="true"
		/>
		<div className="container relative z-10 mx-auto p-5">
			<h1 className="md:text-6xl">
				Restore Your
				<br />
				Digestive Balance
			</h1>
			<p>
				Baltimore Maryland's premier colon hydrotherapy experts.
				<br />
				Twenty years of practice, FDA Approved, and focused on your journey to
				wellness.
			</p>
			<div className="mt-5 flex gap-3">
				<a
					href="https://watersofwellness.janeapp.com"
					target="_blank"
					rel="noopener"
					className="bg-seafoam-100 hover:bg-seafoam-200 text-ink rounded-full px-5 py-2 md:w-60 w-2/3 text-center transition-hover"
				>
					Book Now
				</a>
				<a
					href="tel:4438005600"
					target="_blank"
					rel="noopener"
					className="md:hidden border border-seafoam-100 hover:bg-seafoam-50/15 rounded-full px-5 py-2 w-1/3 text-center transition-hover"
				>
					Call
				</a>
				{/* Non-mobile link  */}
				<Link
					to="/about"
					className="hidden md:inline border border-seafoam-100 hover:bg-seafoam-50/15 rounded-full px-5 py-2 min-w-40 text-center transition-hover"
				>
					How sessions work
				</Link>
			</div>
		</div>
	</section>
);
