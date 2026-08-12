import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import { BOOKING_LINK, PHONE_DISPLAY, PHONE_HREF } from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
};

export const FrequentlyAskedQuestions = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("contact") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Have a question?
					<br />
					Let's get in touch.
				</EntranceText>
			}
			subtext={
				<>
					Reach out to rejuvenate your body and spirit at our Baltimore
					sanctuary, where wellness and tranquility meet.
					<br />
					Whatever questions you may have, Gina is here to answer them.
				</>
			}
			links={[
				{
					label: "Book an appointment",
					targetId: BOOKING_LINK,
					isCta: true,
					sortOrder: 0,
				},
				{
					label: "Get in touch",
					targetId: ANCHOR_CONFIG.learnMore,
					sortOrder: 1,
				},
			]}
		/>
		<div className="container p-5 mx-auto">
			<section
				className="mx-auto bg-seafoam-50 rounded-lg p-5 lg:p-8"
				id={ANCHOR_CONFIG.learnMore}
			>
				<EntranceText>Let's find your path to wellness</EntranceText>

				<div className="flex flex-col lg:flex-row gap-8 lg:items-center mt-3 ">
					<div className="flex flex-col gap-5 lg:w-1/3">
						<nav className="list-none font-semibold">
							<ul>
								<li>
									<span className="text-xs uppercase tracking-wide opacity-60 block">
										Phone
									</span>
									<a href={PHONE_HREF} target="_blank" rel="noopener">
										{PHONE_DISPLAY}
									</a>
								</li>
								<li className="mt-3">
									<a
										href="mailto:info@watersofwellness.com"
										target="_blank"
										rel="noopener"
									>
										<span className="text-xs uppercase tracking-wide opacity-60 block">
											Email
										</span>
										info@watersofwellness.com
									</a>
								</li>
								<li className="mt-3">
									<p className="text-xs uppercase tracking-wide opacity-60 block">
										Address
									</p>
									<p>
										314 Wyndhurst Avenue
										<br />
										Baltimore, MD 21210
									</p>
								</li>
							</ul>
						</nav>
					</div>

					<hr className="border-seafoam-100 lg:border-t-0 lg:border-l lg:self-stretch lg:h-auto" />

					<div className="flex flex-col gap-5 text-lg lg:w-2/3">
						<p>
							These paragraphs will explain you should reach directly out to
							Gina via email or phone with any questions or concerns.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</div>
				</div>
			</section>
		</div>
	</>
);

export default FrequentlyAskedQuestions;
