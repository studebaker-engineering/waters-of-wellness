import { EntranceText } from "@/components/EntranceText";
import { LotusIcon, MeditationIcon, SparkleIcon } from "@/components/icons";
import { SERVICE_LINKS } from "@/config/ServiceLinks";
import { ServiceCard } from "./ServiceCard";

const [colonHydrotherapy, detoxWraps, ionicFootDetox] = SERVICE_LINKS;

export const ServicesSection = () => (
	<section className="mb-10">
		<EntranceText text="Our Services" />
		<div className="grid gap-3 lg:grid-cols-3 mt-2">
			<ServiceCard
				title="Cleansing colon hydrotherapy"
				icon={<MeditationIcon />}
				to={colonHydrotherapy.href}
				price={160}
				duration="90 minutes"
			>
				Refresh your system and support digestive health with calming colon
				hydrotherapy sessions.
			</ServiceCard>

			<ServiceCard
				title="Revitalizing detox wraps"
				icon={<LotusIcon />}
				to={detoxWraps.href}
				price={120}
				duration="60 minutes"
			>
				Experience the soothing embrace of detox body wraps that help release
				toxins and rejuvenate the body.
			</ServiceCard>

			<ServiceCard
				title="Ionic foot detox"
				icon={<SparkleIcon />}
				to={ionicFootDetox.href}
				price={140}
				duration="60 minutes"
			>
				A salt footh bath intended to pull heavy metals and environmental toxins
				from the body via the feet through osmosis.
			</ServiceCard>
		</div>
	</section>
);
