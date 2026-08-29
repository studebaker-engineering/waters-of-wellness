import gina from "@/assets/gina.jpeg";
import { BioCard } from "@/components/BioCard";
import { EntranceText } from "@/components/EntranceText";
import { GinaBioSection } from "@/components/GinaBioSection";
import { Hero } from "@/components/Hero";
import { heroImageSources } from "@/lib/media";
import { FactCard } from "@/pages/home/FactCard";

export const About = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("about") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Welcome to <br />
					Waters of Wellness
				</EntranceText>
			}
			subtext={
				<>
					Revitalize your body and soul with holistic wellness services in
					Baltimore, MD, for a rejuvenated and balanced life.
					<br />
					At Waters of Wellness, the focus is on you.
				</>
			}
			links={[
				{ label: "Meet Gina", targetId: "meet-gina" },
				{ label: "Our Approach", targetId: "our-approach" },
			]}
		/>

		<div className="container p-5 mx-auto">
			<GinaBioSection id="meet-gina" title="Meet Gina">
				<div className="mt-2 grid gap-3 lg:grid-cols-2 lg:items-start">
					<BioCard
						imageSrc={gina}
						imageAlt="Gina R. Cunningham"
						tailwindBgColorClass="bg-seafoam-100"
					>
						<div>
							<h3 className="text-lg font-medium">Gina Cunningham, CCT</h3>
							<p className="text-sm opacity-70">
								Certified Colon Hydrotherapist
							</p>
						</div>
						<p className="text-sm">
							Gina’s path to colon hydrotherapy began through the search for a
							more holistic approach to her own well-being. She pursued formal
							training and earned her colon hydrotherapy certification from St.
							John’s Academy of Natural Healing and Sciences in 2005, dedicating
							a lasting commitment to the practice.
						</p>
						<p className="text-sm">
							Since then, she has built her career around creating an experience
							where informed guidance, genuine connection, and attentive care is
							tailored to the individual.
						</p>
					</BioCard>

					<div className="grid gap-3 sm:grid-cols-2 [&>.fact-card:nth-child(odd)]:bg-linen-100 [&>.fact-card:nth-child(even)]:bg-seafoam-100 sm:[&>.fact-card:nth-child(4n+1)]:bg-linen-100! sm:[&>.fact-card:nth-child(4n)]:bg-linen-100! sm:[&>.fact-card:nth-child(4n+2)]:bg-seafoam-100! sm:[&>.fact-card:nth-child(4n+3)]:bg-seafoam-100!">
						<FactCard title="Certification">
							Colon Hydrotherapy certification from St. John’s Academy of
							Natural Healing and Sciences, completed in 2005.
						</FactCard>
						<FactCard title="Education">
							Bachelor of Science in Holistic Nutrition from Clayton College of
							Natural Health.
						</FactCard>
						<FactCard title="Advanced Training">
							Trained in detoxification and cleansing protocols through gut
							health expert Brenda Watson, with Closed-system training through
							practitioners Christina Sharp and Argo Duenas.
						</FactCard>

						<FactCard title="Professional Associations">
							Active member of the International Association for Colon
							Hydrotherapy (I-ACT) since 2005, supporting continued education
							and connection to professional standards.
						</FactCard>
						<FactCard title="Reiki Attunement">
							Integrative Reiki-attuned treatment, using the ancient healing
							modality to support intuitive approach in client care.
						</FactCard>
						<FactCard title="Digestive Care Education">
							Served as a Digestive Care Specialist regionally with Renew Life,
							delivering training and education focused on digestive wellness.
						</FactCard>
					</div>
				</div>
			</GinaBioSection>

			<section id="our-approach">
				<div className="mb-10 mx-auto w-fit p-5 bg-linen-100 rounded-lg text-center">
					<EntranceText as="h2">Our Approach</EntranceText>
					<p className="font-roca text-xl">
						Whole-person care begins with understanding the individual.
					</p>
					<p className="text-md opacity-70">
						Dedicated to creating a calm, supportive environment, Waters of
						Wellness is focused on you.
						<br />
						Every experience is grounded in genuine connection and approached
						with comfort to help shape your journey.
					</p>
				</div>
			</section>
		</div>
	</>
);

export default About;
