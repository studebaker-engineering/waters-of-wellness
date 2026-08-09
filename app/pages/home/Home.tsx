import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { PathSection } from "./PathSection";
import { ServicesSection } from "./ServicesSection";
import { WhySection } from "./WhySection";

export const Home = () => (
	<>
		<HeroSection />

		<div className="container px-5 pt-10 mx-auto">
			<ServicesSection />

			<AboutSection />

			<PathSection />

			<WhySection />
		</div>
	</>
);

export default Home;
