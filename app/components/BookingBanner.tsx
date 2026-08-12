import type { ReactNode } from "react";
import { EntranceText } from "@/components/EntranceText";
import { BOOKING_LINK, PHONE_HREF } from "@/lib";

interface BookingBannerProps {
	title: string;
	children: ReactNode;
	className?: string;
}

export const BookingBanner = ({
	title,
	children,
	className = "",
}: BookingBannerProps) => (
	<section
		className={`bg-linen-100 text-ink rounded-lg p-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:p-8 ${className}`}
	>
		<div>
			<EntranceText as="h3" className="md:text-2xl text-xl font-bold max-w-4/5">
				{title}
			</EntranceText>
			<p className="text-sm mt-2">{children}</p>
		</div>
		<a
			href={BOOKING_LINK}
			target="_blank"
			rel="noopener"
			className="hidden lg:inline bg-tidewater-200 hover:bg-tidewater-200/75 text-ink rounded-full px-5 py-3 text-center transition-hover lg:shrink-0 lg:px-10"
		>
			Book now
		</a>
		<a
			href={PHONE_HREF}
			target="_blank"
			rel="noopener"
			className="lg:hidden bg-tidewater-200 hover:bg-tidewater-200/75 text-ink rounded-full px-5 py-3 text-center transition-hover font-medium"
		>
			Call now
		</a>
	</section>
);
