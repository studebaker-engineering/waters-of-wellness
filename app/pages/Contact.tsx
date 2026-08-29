import { href, Link } from "react-router";
import { EntranceText } from "@/components/EntranceText";
import { Hero } from "@/components/Hero";
import {
	BOOKING_LINK,
	EMAIL_ADDRESS,
	EMAIL_HREF,
	PHONE_DISPLAY,
	PHONE_HREF,
} from "@/lib";
import { heroImageSources } from "@/lib/media";

const ANCHOR_CONFIG = {
	learnMore: "learn-more",
};

const HOURS_OF_OPERATION = [
	{ day: "Monday", hours: "10 AM–7 PM" },
	{ day: "Tuesday", hours: "10 AM–3 PM" },
	{ day: "Wednesday", hours: "10 AM–6 PM" },
	{ day: "Thursday", hours: "10 AM–7 PM" },
	{ day: "Friday", hours: "10 AM–6 PM" },
	{ day: "Saturday", hours: "10 AM–5 PM" },
	{ day: "Sunday", hours: "10 AM–5 PM" },
];

export const FrequentlyAskedQuestions = () => (
	<>
		<Hero
			size="default"
			media={{ type: "image", sources: heroImageSources("contact") }}
			title={
				<EntranceText as="h1" className="md:text-6xl">
					Have a question?
					<br />
					We're here to help.
				</EntranceText>
			}
			subtext={
				<>
					Whether you’re exploring the services, preparing for your first visit,
					or looking for the right place to begin,
					<br />
					we welcome you to explore– let’s connect.
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
				className="mx-auto bg-seafoam-50 rounded-lg p-5 lg:p-8 mb-10"
				id={ANCHOR_CONFIG.learnMore}
			>
				<EntranceText>Contact Waters of Wellness</EntranceText>

				<div className="flex flex-col lg:flex-row gap-8 mt-3">
					<div className="flex gap-5 lg:w-1/3">
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
									<a href={EMAIL_HREF} target="_blank" rel="noopener">
										<span className="text-xs uppercase tracking-wide opacity-60 block">
											Email
										</span>
										{EMAIL_ADDRESS}
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
								<li className="mt-3">
									<p className="text-xs uppercase tracking-wide opacity-60 block">
										Hours of Operation
									</p>
									<ul>
										{HOURS_OF_OPERATION.map(({ day, hours }) => (
											<li key={day} className="flex justify-between gap-4">
												<span>{day}</span>
												<span className="font-normal">{hours}</span>
											</li>
										))}
									</ul>
								</li>
								<li className="mt-3">
									<p className="text-xs uppercase tracking-wide opacity-60 block">
										Parking & Accessiblity
									</p>
									<p>TBD</p>
								</li>
							</ul>
						</nav>
					</div>

					<hr className="border-seafoam-100 lg:border-t-0 lg:border-l lg:self-stretch lg:h-auto" />

					<div className="flex flex-col gap-5 text-lg lg:w-2/3">
						<p>
							For more information, feel free to reach out by phone or email.
							Inquiries are reviewed during business hours; please allow [TBD
							timeframe] for a response.
						</p>
						<p>
							You may also learn more by visiting{" "}
							<Link
								className="underline"
								to={href("/frequently-asked-questions")}
								viewTransition
							>
								our FAQ page.
							</Link>{" "}
							Current appointment availability and pricing can be found through
							our secure{" "}
							<a
								className="underline"
								href={BOOKING_LINK}
								target="_blank"
								rel="noopener"
							>
								online booking portal.
							</a>
						</p>
						<p>
							Please note that all services are available by appointment only.
						</p>
						<div>
							<p className="text-xs uppercase tracking-wide opacity-60 block font-semibold">
								Cancellation Policy
							</p>
							<p>
								Cancellation or rescheduling require 48 hours notice. Changes
								outside this courtesy window are subject to a fee equal to 50%
								of the service or loss of deposit.
							</p>
							<p className="mt-3">
								Same day cancellations and no shows will assume full cost. Text
								and email are not accepted as forms of notice.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</>
);

export default FrequentlyAskedQuestions;
