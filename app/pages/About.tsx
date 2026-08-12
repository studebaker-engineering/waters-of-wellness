import gina from "@/assets/gina.jpeg";
import { BioCard } from "@/components/BioCard";
import { BookingBanner } from "@/components/BookingBanner";
import { EntranceText } from "@/components/EntranceText";
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
				{ label: "Gina's Story", targetId: "story" },
				{ label: "Her Mission", targetId: "mission" },
			]}
		/>

		<div className="container px-5 pt-10 mx-auto">
			<section id="story" className="mb-10">
				<EntranceText>Gina's Story</EntranceText>
				<div className="mt-2 grid gap-3 lg:grid-cols-2 lg:items-start">
					<BioCard
						imageSrc={gina}
						imageAlt="Gina R. Cunningham"
						tailwindBgColorClass="bg-tidewater-100"
					>
						<div>
							<h3 className="text-lg font-medium">Gina Cunningham, CCT</h3>
							<p className="text-sm opacity-70">Colon Hydrotherapist</p>
						</div>
						<p className="text-sm">
							A 25-year wellness industry veteran and colon hydrotherapist with
							over 20 years of experience, Gina's own health transformation
							through herbal detoxification led her to pursue formal training,
							completing her Colon Hydrotherapy certification from St. John's
							Academy of Natural Healing and Sciences in 2005.
						</p>
						<p className="text-sm">
							Waters of Wellness was born from her deep passion for a holistic,
							patient-centered approach to wellness, where the focus stays on
							you in a nurturing environment where you feel comfortable and
							supported.
						</p>
						<div className="mt-auto flex gap-3 pt-3">
							<div>
								<p className="text-xs font-medium uppercase tracking-wide opacity-60">
									Accredited
								</p>
								<span className="inline-block mt-1 bg-seafoam-100 text-ink rounded-full px-2 py-0.5 text-xs font-medium">
									FDA Approved
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

					<div className="grid gap-3 sm:grid-cols-2">
						<FactCard
							title="Certified since 2005"
							tailwindBgColorClass="bg-linen-100"
						>
							Colon Hydrotherapy certification from St. John's Academy of
							Natural Healing and Sciences, plus advanced closed-system
							techniques from industry leaders.
						</FactCard>
						<FactCard
							title="Holistic nutrition"
							tailwindBgColorClass="bg-seafoam-100"
						>
							Bachelor of Science in Holistic Nutrition from Clayton College of
							Natural Health, with specialized training in candida, parasites,
							and heavy metal detox protocols.
						</FactCard>
						<FactCard
							title="Reiki attunement"
							tailwindBgColorClass="bg-seafoam-100"
						>
							Reiki attunement is integrated into every treatment, supporting
							the body, mind, and spirit together.
						</FactCard>
						<FactCard title="Mentorship" tailwindBgColorClass="bg-linen-100">
							Mentored by wellness authorities including Andrew Weil and Paul
							Stamets, with regional management experience at Renew Life.
						</FactCard>
						<FactCard
							title="Professional association"
							tailwindBgColorClass="bg-linen-100"
						>
							Active member of the International Association of Colon
							Hydrotherapy since 2005.
						</FactCard>
						<FactCard
							title="Personalized care"
							tailwindBgColorClass="bg-seafoam-100"
						>
							Every session is tailored to your individual needs, helping you
							achieve balance and rejuvenation at your own pace.
						</FactCard>
					</div>
				</div>
			</section>

			<section id="mission" className="mb-10 max-w-2xl mx-auto text-center">
				<EntranceText as="h2">Her Mission</EntranceText>
				<p className="font-roca text-xl mt-3">
					&ldquo;At Waters of Wellness, the focus is on you.&rdquo;
				</p>
				<p className="text-sm opacity-70 mt-3">
					Gina is dedicated to creating a nurturing environment where you can
					feel comfortable and supported, every step of your wellness journey.
				</p>
			</section>

			<BookingBanner
				title="Let's start your wellness journey together"
				className="mb-10"
			>
				Reach out to rejuvenate your body and spirit at our Baltimore sanctuary
				where wellness and tranquility meet.
			</BookingBanner>
		</div>
	</>
);

export default About;
