import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { PathSection } from "./PathSection";
import { ServicesSection } from "./ServicesSection";
import { WhySection } from "./WhySection";

export const Home = () => (
	<>
		<HeroSection />

		<div className="container p-5 mx-auto">
			<ServicesSection />

			<AboutSection />

			<PathSection />

			<WhySection />
		</div>
	</>
);

export default Home;
