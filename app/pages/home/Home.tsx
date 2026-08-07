import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { WhySection } from "./WhySection";

export const Home = () => (
	<>
		<HeroSection />

		<div className="container p-5 pt-10 mx-auto">
			<ServicesSection />

			<AboutSection />
		</div>

		<section className="bg-seafoam-50">
			<div className="container p-5 pt-10 mx-auto">
				<WhySection />
			</div>
		</section>
	</>
);

export default Home;
