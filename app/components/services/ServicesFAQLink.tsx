import { href, Link } from "react-router";
import type { ServiceLinkType } from "@/types";

interface ServicesFAQLinkProps {
	serviceLinkType: ServiceLinkType;
}

const getServiceTypeText = (type: ServiceLinkType): string => {
	if (type === "colon-hydrotherapy") {
		return "colon hydrotherapy";
	} else if (type === "ionic-detox") {
		return "ionic foot detox";
	} else {
		return "lymphatic detox wrap";
	}
};

export const ServicesFAQLink = ({ serviceLinkType }: ServicesFAQLinkProps) => {
	const serviceType = getServiceTypeText(serviceLinkType);

	return (
		<>
			<h4 className="font-normal lg:text-xl text-lg">Still have questions?</h4>
			<p className="text-lg">
				Explore the{" "}
				<Link
					className="underline"
					to={href("/frequently-asked-questions")}
					viewTransition
				>
					complete FAQ
				</Link>{" "}
				for more information about {serviceType}, appointment preparation,
				safety, aftercare, and our complementary services.
			</p>
		</>
	);
};
